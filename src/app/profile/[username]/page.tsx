import Feeds from "@/app/components/CenterMainBox/Feeds";
import MainProfile from "@/app/components/CenterMainBox/MainProfile";
import Post from "@/app/components/CenterMainBox/Post";
import LeftMainBox from "@/app/components/LeftMainBox/LeftMainBox";
import RightMainBox from "@/app/components/RightMainBox/RightMainBox";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../lib/client";
import BlockByUser from "@/app/components/ErrorMessage/BlockByUser";

type ProfileProps = {
  params: {
    username: string;
  };
};

const Profile = async ({ params }: ProfileProps) => {
  const { username } = params; // Extracting `username` from `params`

  const { userId } = auth();
  if (!userId) return null;

  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          followings: true,
        },
      },
    },
  });

  if (!user) return <BlockByUser message={`Sorry!  ${username} does not exist`} link={""} username={""}/>

  const { userId: currentUserId } = auth();

  let isBlocked = false;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if(isBlocked)return <BlockByUser message={"Sorry you were blocked by "} link={"/"} username={username}/>

  return (
    <div id="main-home-container" className="flex gap-4 ">
      {/* LEFT */}
      <div id="left" className="hidden xl:flex  w-[20%] ">
        <LeftMainBox type="profile" />
      </div>
      {/* CENTER */}
      <div
        id="center"
        className="w-full flex flex-col  h-100vh gap-2 lg:w-[70%] xl:w-[50%] overflow-y-scroll mt-14 scrollbar-hide  "
      >
        <MainProfile user={user} />
        <Post />
        <Post />
        <Post />
      </div>
      {/* RIGHT */}
      <div id="right" className="hidden lg:flex w-[30%]  ">
        <RightMainBox user={user}   />
      </div>
    </div>
  );
};

export default Profile;
