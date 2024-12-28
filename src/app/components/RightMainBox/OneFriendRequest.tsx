"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { convertedDate } from "./UserInfoCard";
import Link from "next/link";
import {
  acceptFollowRequest,
  refuseFollowRequest,
} from "@/Actions/friendRequestAction";

type FollowRequests = {
  id: number;
  sender: {
    id: string;
    username: string;
    avatar: string;
  };
  createdAt: string;
};

const OneFriendRequest = ({followRequests,accept, refuse}: {followRequests: FollowRequests[],accept:any,refuse:any}) => {
  const [requestState, setRequestState] = useState(followRequests);

  if (!requestState || requestState.length === 0) return null;

  const handleAccept = async (
    userId: string,
    requestId: number
  ): Promise<void> => {
    try {
      await accept(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.error("Failed to accept request:", error);
    }
  };

  const handleRefuse = async (
    userId: string,
    requestId: number
  ): Promise<void> => {
    try {
      await refuse(userId);
      setRequestState((prev) => prev.filter((req) => req.id !== requestId));
    } catch (error) {
      console.error("Failed to refuse request:", error);
    }
  };

  return (
    <>
      {requestState.map((request) => (
        <div key={request.id} className="flex gap-3 items-center w-full">
          {/* Profile Link */}
          <Link
            href={`/profile/${request.sender.username}`}
            className="flex gap-3 items-center w-full hover:opacity-80"
          >
            {/* Avatar */}
            <Image
              src={request.sender.avatar || "/images/noAvatar.png"}
              alt={`${request.sender.username}'s avatar`}
              width={40}
              height={40}
              className="rounded-full w-10 h-10 object-cover"
            />

            {/* User Details */}
            <div className="flex-1">
              <p className="text-primary text-sm font-medium">
                {request.sender.username}
              </p>
              <p className="text-muted-foreground text-xs">
                Sent on:{" "}
                <span>{convertedDate(request.createdAt, "medium")}</span>
              </p>
            </div>
          </Link>

          {/* Action Buttons */}
          <div className="flex">
            <form action={() => handleAccept(request.sender.id, request.id)}>
              <Button
                title="Accept this request"
                variant="default"
                className="rounded-full mx-2"
                type="submit"
              >
                Accept
              </Button>{" "}
            </form>
            <form action={() => handleRefuse(request.sender.id, request.id)}>
            
              <Button
                title="Reject this request"
                variant="secondary"
                className="rounded-full"
                type="submit"
              >
                Reject
              </Button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default OneFriendRequest;
