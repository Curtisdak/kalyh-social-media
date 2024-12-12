import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BirthdayElement from "./BirthdayElement";
import Birthday from "../../../../public/gift.png"

const Birthdays = () => {
  return (
    <div className="bg-background  p-4 rounded-md shadow-md flex flex-col">
      <div className="mb-4 text-sm text-primary">Birthdays</div>
      <div className="flex flex-col gap-4  mb-4">
        <BirthdayElement />
        <BirthdayElement />
      </div>

      <div className="flex gap-2 bg-muted flex-1 text-sm text-primary  rounded-lg items-center">
      <Image src={Birthday} width={60} height={60} alt="birthday logo" className="w-16 h-16 drop-shadow-md  hover:animate-bounce "/>

      <Button variant={"ghost"} className="text-wrap">
        check all upcomming birthdays here
      </Button>
      </div>
    </div>
  );
};

export default Birthdays;
