import { Button } from "@/components/ui/button";
import { Briefcase, CalendarDays, GraduationCap, Link2, MapPin, ShieldOff } from "lucide-react";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="bg-background p-4 shadow-lg rounded-md w-full text-sm ">
      {/*  */}
      <div className="flex justify-between items-center text-primary mb-2">
        <p className="">User information</p>
        <Button variant={"ghost"} className="rounded-full">
          See all
        </Button>
      </div>
      <p className="text-lg text-muted-foreground font-bold">
        Kirikou Omega <span className="text-[12px] font-normal"> @kirikouomega</span>
      </p>

      <p className="text-muted-foreground text-[12px] ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
        expedita. Repellendus tenetur atque deserunt, deleniti, nobis quidem
        eius necessitatibus sit obcaecati minus autem ullam asperiores
        voluptatum aut omnis ea molestiae?
      </p>

      <div className="flex flex-col gap-2 text-muted-foreground my-2 text-[12px]">
        <div className="flex gap-2 items-center">   <MapPin strokeWidth={1.50} className="w-4 h-4" /> <p>Living in <strong className="text-primary"> France </strong> </p> </div>
        <div className="flex gap-2 items-center">   <GraduationCap  strokeWidth={1.50} className="w-4 h-4" /> <p>Went to <strong className="text-primary">  Victor kirikou School</strong> </p> </div>
        <div className="flex gap-2 items-center">   <Briefcase  strokeWidth={1.50} className="w-4 h-4" /> <p>Work at <strong className="text-primary"> Apple Inc. </strong> </p> </div>
        <Link href={'www.youtube.com'} className="flex gap-2 items-cente font-extrabold">   <Link2    strokeWidth={1.50} className="w-4 h-4" /> <p>My website </p> </Link>
        <div className="flex gap-2 items-center">   <CalendarDays   strokeWidth={1.50} className="w-4 h-4" /> <p> Joined on November 2024 </p> </div>
        <Button>Following</Button>
        <p className="flex gap-2 items-center w-full justify-end">Block this User <ShieldOff strokeWidth={0} fill="red"  className="w-4 h-4" /> </p>
      </div>
    </div>
  );
};

export default UserInfoCard;
