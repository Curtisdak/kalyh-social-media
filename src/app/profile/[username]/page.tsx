import Feeds from "@/app/components/CenterMainBox/Feeds";
import MainProfile from "@/app/components/CenterMainBox/MainProfile";
import Post from "@/app/components/CenterMainBox/Post";
import LeftMainBox from "@/app/components/LeftMainBox/LeftMainBox";
import RightMainBox from "@/app/components/RightMainBox/RightMainBox";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import prisma from "../../../../lib/client";
import NotFound from "@/app/components/CenterMainBox/NotFound";

type ProfileProps = {
  params: {
    username: string;
  };
};

const Profile = async ({ params }: ProfileProps) => {
  const { username } = params; // Extracting `username` from `params`

  const { userId } = auth();
  if (!userId) return <NotFound message={"Sorry"}redirect={"/"} detail={""}/>

  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          followings: true,
        },
      },
    },
  });

  if (!user) return <NotFound message={ `Sorry user not found !`}redirect={"/"} detail={""}/>

  const { userId: currentUserId } = auth();

  let isBlocked = false;

  if (currentUserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentUserId,
      },
    });

    if (res) isBlocked = true;
  } else {
    isBlocked = false;
  }

  if(isBlocked)return <NotFound message={`You was blocked by`} redirect={"/"} detail={user.username}/>

  return (
    <div id="main-home-container" className="flex gap-4  ">
      {/* LEFT */}
      <div id="left" className="hidden xl:flex  w-[20%] ">
        <LeftMainBox type="profile" />
      </div>
      {/* CENTER */}
      <div
        id="center"
        className="w-full flex flex-col  h-100vh gap-2 lg:w-[70%] xl:w-[50%] overflow-y-scroll mt-14 scrollbar-hide  "
      >
        {/*   {!isBlocked ? (
          <div className="flex items-center justify-center text-center font-extrabold text-primary text-3xl h-[80%]">
            <p>You have been blocked by this user</p>
          </div>
        ) : (
          <MainProfile user={user} />
        )}    */}

        <MainProfile user={user} />
        <Post />
        <Post />
        <Post />
      </div>
      {/* RIGHT */}
      <div id="right" className="hidden lg:flex w-[30%]  ">
        <RightMainBox user={user}   />
      </div>
    </div>
  );
};

export default Profile;
