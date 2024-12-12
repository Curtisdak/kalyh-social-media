import React from "react";
import FriendsRequest from "./FriendsRequest";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMainBox = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-2 p-1 mt-12 w-full">
      {userId&&(
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard  userId={userId}/>
        </>
      )}
      <FriendsRequest />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMainBox;
