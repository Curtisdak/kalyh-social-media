"use client";

import { Button } from "@/components/ui/button";
import { blockAction } from "@/Actions/blockAction";
import { followAction } from "@/Actions/followAction";
import { ShieldOff } from "lucide-react";
import React, { useOptimistic, useState } from "react";

interface userInfoCardInteractionProps {
  userId: string;
  currentUserId: string | null;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isFollowRequestSent: boolean;
}
const UserInfoCardInteraction: React.FC<userInfoCardInteractionProps> =  ({
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
  const handleFollow = async ():Promise<void> => {
    handleOptimisticState("follow");
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

  //  NOW LET HANDLE THE WAY OF BLOCKING  OR UNBLOCK USER let go !!!
const handleBlock = async ():Promise<void>=> {
    handleOptimisticState("block")
    if(!currentUserId) return;
    await blockAction(userId);
    setUserState((prev) => ({ ...prev, blocked: !prev.blocked}));
    console.info("hello");
  };

  //   I'M USING OPTISMICTIC HOOK FOR THE FIRST TIME  COOL
  const [optimisticState, handleOptimisticState] = useOptimistic(
    userState,
    (state, value: "follow" | "block") => value === "follow" ? ({
      ...state,
      following: state.following && false,
      followRequest: !state.following && !state.followRequest ? true : false,
    }):{...state, blocked:!state.blocked}
  );


  return (
    <>
      <form action={handleFollow}>
        <Button
          type="submit"
          className=" bg-primary items-center w-full p-2 rounded-lg text-secondary-foreground"
        >
          {optimisticState.following
            ? "Following"
            : optimisticState.followRequest
            ? "Friend request sent"
            : "Follow"}
        </Button>
      </form>
      {/*  */}

      <form action={handleBlock} title={optimisticState.blocked ? "click to unblock this user ": "you can block this user"}>
        <Button
          type="submit"
          
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
