import React from "react";
import OneFriendRequest from "./OneFriendRequest";
import { Button } from "@/components/ui/button";

const FriendsRequest = () => {
  return (
    <div className="bg-background p-4 shadow-lg rounded-md w-full text-sm max-h-[250px] overflow-scroll scrollbar-hide">
      {/*  */}
      <div className="flex justify-between items-center text-primary mb-4">
        <p className="">Friend Requests</p>
        <Button variant={"ghost"} className="rounded-full">
          See all
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <OneFriendRequest />
        <OneFriendRequest />
        <OneFriendRequest />
        <OneFriendRequest />
        <OneFriendRequest />
        <OneFriendRequest />
        <OneFriendRequest />
        <OneFriendRequest />
        <OneFriendRequest />
      </div>
    </div>
  );
};

export default FriendsRequest;
