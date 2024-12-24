"use client";

import { Button } from "@/components/ui/button";
import { followAction } from "@/lib/followAction";
import { Ghost, ShieldOff } from "lucide-react";
import React, { useOptimistic, useState } from "react";

interface userInfoCardInteractionProps {
  userId: string;
  currentUserId: string;
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
    handleFollowOptimistic("");
    if (!currentUserId) return null;
    try {
      await followAction(userId);
      setUserState((prev) => ({
        ...prev,
        following: prev.following && false,
        followRequest: !prev.following && !prev.followRequest ? true : false,
      }));
    } catch (error) {}
  };

//   I'M USING OPTISMICTIC HOOK FOR THE FIRST TIME  COOL 
  const [optimisticFollow, handleFollowOptimistic] = useOptimistic(
    userState,
    (state) => ({
      ...state,
      following: state.following && false,
      followRequest: !state.following && !state.followRequest ? true : false,
    }),
  );

  return (
    <>
      <form action={handleFollow}>
        <button
          type="submit"
          className=" bg-primary items-center w-full p-2 rounded-lg hover:animate-pulse text-secondary-foreground"
        >
          {optimisticFollow.following 
            ? "Following"
            : optimisticFollow.followRequest
            ? "Friend request sent" 
            : "Follow"}
        </button>
      </form>
      {/*  */}
      <Button
        variant={"ghost"}
        className="flex gap-2 items-center w-full justify-end text-[12px] "
      >
        {isUserBlocked ? "Unblock this User" : "Block  this user"}
        <ShieldOff strokeWidth={0} fill="red" className="w-4 h-4" />{" "}
      </Button>
    </>
  );
};

export default UserInfoCardInteraction;
