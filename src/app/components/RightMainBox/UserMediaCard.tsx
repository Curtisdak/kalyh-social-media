import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";


const UserMediaCard = ({ user }:{user?:User}) => {
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
        {Array.from({ length: 6}, (_, index) => (
          <div
            key={index}
            className="relative w-25 h-40 rounded-sm overflow-hidden"
          >
            <Image
              src={
                "https://images.pexels.com/photos/6154428/pexels-photo-6154428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt="media"
              fill
              className="object-cover hover:animate-pulse cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserMediaCard;
