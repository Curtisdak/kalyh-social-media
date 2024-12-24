import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../lib/client";

const ProfileCard = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  return (
    <div
      title="your profile"
      className="p-4 bg-background texr-sm flex flex-col gap-2 rounded-md shadow-md relative items-center justify-center text-center"
    >
      {user?.cover === "/noAvatar.png" ? (
        <div className="relative w-full h-32 rounded-sm bg-primary opacity-50"></div>
      ) : (
        <Image
          src={""}
          width={250}
          height={128}
          alt="cover-image"
          className="relative object-cover w-full h-32 rounded-sm "
        />
      )}

      <Image
        src={user?.avatar || "/noAvatar.png"}
        width={80}
        height={80}
        alt="cover-image"
        className=" mt-[-50px] object-cover w-20 h-20 rounded-full ring-2 ring-white z-10 "
      />
      <div className="flex flex-col gap-0">
        {user?.name &&<p className="font-extrabold">{user?.name}</p>}
        {!user?.name ? <p className="font-extrabold">{user?.username}</p> : <p className="text-muted-foreground mx-3 text-[14px]">@{user?.username}</p>  }
      </div>

      <div className="flex items-center ">
        {Array.from({ length: 3 }, (_, i) => (
          <Star key={i} fill="orange" strokeWidth={0} className=" w-4 h-4" />
        ))}{" "}
        <p
          title="The number of followers you have "
          className="text-muted-foreground mx-3 text-[14px]"
        >
          {user?._count?.followers}{" "}
          {user?._count?.followers === 0 ? "Follower" : "Followers"}
        </p>
      </div>

      <Link href={`/profile/${user?.username}`}>
        {" "}
        <Button>My Profile</Button>{" "}
      </Link>
    </div>
  );
};

export default ProfileCard;
