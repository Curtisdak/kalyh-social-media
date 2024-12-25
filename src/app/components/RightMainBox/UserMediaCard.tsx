import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import prisma from "../../../../lib/client";


const UserMediaCard = async ({ user }:{user:User}) => {

  const postMedias = await prisma.post.findMany({
    where:{
      userId:user?.id,
      img:{not:null},
    },
    take:8,
    orderBy:{
      createdAt:"desc",
    }
  })



  return (
    <div className="bg-background p-4 shadow-lg rounded-md w-full text-sm ">
      {/*  */}
      <div className="flex justify-between items-center text-primary mb-4">
        <p className="">User media</p>
        <Button variant={"ghost"} className="rounded-full">
          See all
        </Button>
      </div>
      <div className="grid grid-rows-2  grid-cols-4  gap-3 opacity-60 hover:opacity-100">
        {postMedias.length  ? postMedias.map(postMedia => (
          <div
            key={postMedia.id}
            className="relative w-25 h-40 rounded-sm overflow-hidden"
          >
            <Image
              src={postMedia.img!}
              alt="media"
              fill
              className="object-cover hover:animate-pulse cursor-pointer"
            />
          </div>
        )): <p className="text-destructive block"> No medias </p> }
      </div>
    </div>
  );
};

export default UserMediaCard;
