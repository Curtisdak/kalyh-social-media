import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OneFriendRequest = () => {
  return (
    <div className="flex gap-3 flex-nowrap items-center w-full">
      <Image
        src={
          "https://images.pexels.com/photos/15953861/pexels-photo-15953861/free-photo-of-femme-retro-vintage-automne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt="request avatar"
        width={32}
        height={32}
        className="rounded-full w-10 h-10  object-contain relative"
      />
      <div className="flex-1">
        <p className="text-primary text-sm"> Ange Marie </p>
        <p className="text-muted-foreground text-[12px]">Request sent on  : <span className="">15 nov 2015</span></p>
      </div>

      <div>
        <Button title="click to accept the request" variant={"default"} className="rounded-full mx-2 size-8">Yes</Button>
        <Button title="click to reject the request"  variant={"secondary"} className="rounded-full  size-9 ">No</Button>
      </div>
    </div>
  );
};

export default OneFriendRequest;
