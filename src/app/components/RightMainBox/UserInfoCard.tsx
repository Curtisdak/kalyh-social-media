import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import {
  Briefcase,
  CalendarDays,
  GraduationCap,
  Link2,
  MapPin,
  ShieldOff,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../lib/client";

const convertedDate = (date: any) => {
  const theDate = new Date();
  const dateOptions: any = {
    dateStyle: "full",
  };
  const formatter = new Intl.DateTimeFormat(date, dateOptions);
  const formattedDate = formatter.format(theDate);

  if (date) return formattedDate;
};

const UserInfoCard = async ({ user }: { user: User }) => {
  let isUserBlocked = false;
  let isFollowing = false;
  let isFollowRequestSent = false;

  const { userId: currentUserId } = auth();

  if (currentUserId) {
    const blockRes = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: user.id,
      },
    });
    blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

    const followRes = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: user.id,
      },
    });
    followRes ? (isFollowing = true) : (isFollowing = false);

    const followRequestRes = await prisma.followRequest.findFirst({
      where: {
        senderId: currentUserId,
        receiverId: user.id,
      },
    });

    followRequestRes ? (isFollowRequestSent = true) : (isFollowRequestSent = false);
  }

  return (
    <div className="bg-background p-4 shadow-lg rounded-md w-full text-sm ">
      {/*  */}
      <div className="flex justify-between items-center text-primary mb-2">
        <p className="">User information</p>
        <Button variant={"ghost"} className="rounded-full">
          Edit
        </Button>
      </div>
      <p className="text-lg text-muted-foreground font-bold">
        {user?.name}{" "}
        <span className="text-[12px] font-normal"> @{user?.username}</span>
      </p>

      <p className="text-muted-foreground text-[12px] ">
        {user?.bio ? user?.bio : "There is no description yet"}
      </p>

      <div className="flex flex-col gap-2 text-muted-foreground my-2 text-[12px]">
        <div className="flex gap-2 items-center">
          {" "}
          <MapPin strokeWidth={1.5} className="w-4 h-4" />{" "}
          <p>
            Living in{" "}
            <strong className="text-primary">
              {" "}
              {!user?.city ? "Nowhere" : user?.city}{" "}
            </strong>{" "}
          </p>{" "}
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <GraduationCap strokeWidth={1.5} className="w-4 h-4" />{" "}
          <p>
            Went to{" "}
            <strong className="text-primary">
              {" "}
              {!user?.school ? "No School" : user?.school}{" "}
            </strong>{" "}
          </p>{" "}
        </div>
        <div className="flex gap-2 items-center">
          {" "}
          <Briefcase strokeWidth={1.5} className="w-4 h-4" />{" "}
          <p>
            Work at{" "}
            <strong className="text-primary">
              {!user?.work ? "Nowhere" : user?.work}{" "}
            </strong>{" "}
          </p>{" "}
        </div>
        <Link
          href={user?.website || "/"}
          className="flex gap-2 items-cente font-extrabold"
        >
          {" "}
          <Link2 strokeWidth={1.5} className="w-4 h-4" />{" "}
          <p>{!user?.website ? "No link" : user?.website}</p>{" "}
        </Link>
        <div className="flex gap-2 items-center">
          {" "}
          <CalendarDays strokeWidth={1.5} className="w-4 h-4" />{" "}
          <p> {` ${convertedDate(user?.createdAt)}`} </p>{" "}
        </div>

        <UserInfoCardInteraction
          userId= {user.id}
          currentUserId = {currentUserId}
          isUserBlocked={isUserBlocked}
          isFollowing={isFollowing}
          isFollowRequestSent={isFollowRequestSent}
        />
      </div>
    </div>
  );
};

export default UserInfoCard;
