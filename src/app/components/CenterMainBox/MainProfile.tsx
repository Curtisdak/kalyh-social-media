import React from "react";
import Image from "next/image";
import UserInfoCard from "../RightMainBox/UserInfoCard";
import UserMediaCard from "../RightMainBox/UserMediaCard";

interface MainProfileProps {
  user: any;
}

const MainProfile: React.FC<MainProfileProps> = async ({ user }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground mb-2 bg-background rounded-md shadow-md">
      <div className=" aspect-[5/2] w-full relative">
        <Image
          src={user?.cover}
          alt="profile cover"
          fill
          className="object-cover w-full blur-sm hover:blur-0 ease-in-out duration-400"
        />
      </div>
      <div className="shadow-md w-20 h-20 lg:w-40 lg:h-40   rounded-full mt-[-50px] lg:mt-[-100px] z-10 ring-2 ring-white relative overflow-hidden ">
        <Image
          src={user?.avatar}
          fill
          alt="profile picture"
          className=" object-cover w-full"
        />
      </div>

      {user?.name && <p className="font-bold text-lg">{user?.name}</p>}
      {!user?.name ? (
        <p className="font-bold text-lg">{user?.username}</p>
      ) : (
        <p className="text-muted-foreground text-sm">@{user?.username}</p>
      )}

      <div
        title="Your current total posts"
        className="grid grid-cols-3 gap-4 pb-4 "
      >
        <div className="flex flex-col items-center ">
          <strong className="text-lg">{user?._count?.posts}</strong>
          <span>{user?._count?.posts===0 ? "Post": "Posts"}</span>
        </div>

        <div
          title="This is the number of followers you have currently"
          className="flex flex-col items-center "
        >
          <strong className="text-lg">{user?._count?.followers}</strong>
          <span>{user?._count?.followers===0 ? "Follower": "Followers"}</span>
        </div>

        <div
          title="This is the number of people you follow currently"
          className="flex flex-col items-center "
        >
          <strong className="text-lg">{user?._count?.followers}</strong>
          <span>{user?._count?.followers===0 ? "Following": "Followings"}</span>
        </div>
      </div>

      <div className="lg:hidden text-start w-full flex flex-col">
        <UserInfoCard user={user} />
        <UserMediaCard user={user}/>
      </div>
    </div>
  );
};

export default MainProfile;
