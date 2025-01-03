"use client";

import { Button } from "@/components/ui/button";

import { ShieldOff } from "lucide-react";
import React, { useOptimistic, useState } from "react";
import { followAction } from "../../../../lib/followAction";
import { blockUserAction } from "../../../../lib/blockUserAction";

interface userInfoCardInteractionProps {
  userId: string;
  currentUserId: string | null;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowRequestSent: boolean;
}
const UserInfoCardInteraction: React.FC<userInfoCardInteractionProps> = ({
  userId,
  currentUserId,
  isUserBlocked,
  isFollowing,
  isFollowRequestSent,
}) => {
  const [userState, setUserState] = useState({
    following: isFollowing,
    followRequest: isFollowRequestSent,
    blocked: isUserBlocked,
  });
  //  LET HANDLE THE FOLLOW BUTTON IN THE FORM form_action
  const handleFollow = async () => {
    handleStateOptimistic("follow");
    if (!currentUserId) return;
    try {
      await followAction(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followRequest: !prev.following && !prev.followRequest ? true : false,
      }));
    } catch (error) {}
  };

  const handleBlock = async () => {
    handleStateOptimistic("block");
    if (!currentUserId) return;
    try {
      await blockUserAction(userId);
      setUserState((prev) => ({ ...prev, blocked: !prev.blocked && false }));
    } catch (error) {
      console.log(error);
    }
  };

  //   I'M USING OPTISMICTIC HOOK FOR THE FIRST TIME  COOL
  const [optimisticState, handleStateOptimistic] = useOptimistic(
    userState,
    (state, value) =>
      value === "follow"
        ? {
            ...state,
            following: state.following && false,
            followRequest:
              !state.following && !state.followRequest ? true : false,
          }
        : { ...state, blocked: !state.blocked }
  );

  return (
    <>

    <div className="grid grid-cols-2 w-full gap-4"> 
      <form action={handleFollow} className="w-full">
        <button
          type="submit"
          className=" bg-primary items-center w-full  p-2 rounded-lg hover:animate-pulse text-secondary-foreground"
        >
          {optimisticState.following
            ? "Following"
            : optimisticState.followRequest
            ? "Friend request sent"
            : "Follow"}
        </button>
      </form>

      {optimisticState.following === true && <Button variant={"secondary"}  className="  items-center text-[12px] p-2 rounded-lg hover:animate-pulse text-secondary-foreground">Message</Button>}
      </div>
      {/*  */}
      <form action={handleBlock}>
        <Button
          variant={"ghost"}
          className="flex gap-2 items-center w-full justify-end text-[12px] "
        >
          {optimisticState.blocked ? "Unblock this User" : "Block  this user"}
          <ShieldOff strokeWidth={0} fill="red" className="w-4 h-4" />{" "}
        </Button>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
