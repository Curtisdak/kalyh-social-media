import React, { Suspense } from "react";
import FriendsRequest from "./FriendsRequest";
import Birthdays from "./Birthdays";
import Ads from "./Ads";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import Spinner from "../MySpinner/Spinner";
import { User } from "@prisma/client";

const RightMainBox = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-2 p-1 mt-12 w-full">
      {user && (
        <>
          <Suspense fallback={<Spinner />}>
            <UserInfoCard user={user} />
          </Suspense>

          <Suspense fallback={<Spinner />}>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      )}
      <FriendsRequest />
      <Birthdays />
      <Ads size="md" />
    </div>
  );
};

export default RightMainBox;
