import React from "react";
import OneFriendRequest from "./OneFriendRequest";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../lib/client";
import { User } from "@prisma/client";
import {
  acceptFollowRequest,
  refuseFollowRequest,
} from "@/Actions/friendRequestAction";

const FriendsRequest = async ({ user }: { user: User }) => {
  const { userId: currentuserId } = auth();

  if (!currentuserId) return null;

  const followRequests = await prisma.followRequest.findMany({
    where: { receiverId: currentuserId },
    include: { sender: true },
    take: 10,
    orderBy: { createdAt: "desc" },
  });
  // console.info(requests)
  const numberOfSenders = await prisma.followRequest.count({
    where: { receiverId: currentuserId },
  });

  const accept = async (id:string) => {
    try {
      await acceptFollowRequest(id);
    } catch (error) {
      return error;
    }
  };

  const refuse = async (id:string) => {
    try {
      await refuseFollowRequest(id);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="bg-background p-4 shadow-lg rounded-md w-full text-sm max-h-[250px] overflow-scroll scrollbar-hide">
      {/*  */}
      <div className="flex justify-between items-center text-primary mb-4">
        <p className="">
          Your Friend Requests{" "}
          {numberOfSenders && <strong> ({numberOfSenders}) </strong>}
        </p>
        <Button variant={"ghost"} className="rounded-full">
          See all
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <OneFriendRequest followRequests={followRequests} accept={accept} refuse={refuse} />
      </div>
    </div>
  );
};

export default FriendsRequest;
