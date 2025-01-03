import React from "react";
import FriendRequestList from "./FriendRequestList";
import { Button } from "@/components/ui/button";

const FriendsRequest = () => {
  return (
    <div className="bg-background p-4 shadow-lg rounded-md w-full text-sm max-h-[250px] overflow-hidden ">
      {/*  */}

      <FriendRequestList />
    </div>
  );
};

export default FriendsRequest;
