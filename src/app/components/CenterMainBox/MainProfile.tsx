import React from "react";
import Image from "next/image";
import UserInfoCard from "../RightMainBox/UserInfoCard";

const MainProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-muted-foreground mb-2 bg-background rounded-md shadow-md">
      <div className=" aspect-[5/2] w-full relative">
        <Image
          src={
            "https://images.pexels.com/photos/27960654/pexels-photo-27960654/free-photo-of-paysage-nature-eau-ete.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt="profile cover"
          fill
          className="object-cover w-full"
        />
      </div>
      <div className="shadow-md w-20 h-20 lg:w-40 lg:h-40   rounded-full mt-[-50px] lg:mt-[-100px] z-10 ring-2 ring-white relative overflow-hidden ">
        <Image
          src={
            "https://images.pexels.com/photos/14465203/pexels-photo-14465203.jpeg"
          }
          fill
          alt="profile picture"
          className=" object-cover w-full"
        />
      </div>

      <p className="font-bold text-lg">Kirkou Omega</p>

      <div title="Your current total posts" className="grid grid-cols-3 gap-4 pb-4 ">
        <div className="flex flex-col items-center ">
          <strong className="text-lg">123</strong>
          <span>Posts</span>
        </div>

        <div title="This is the number of followers you have currently" className="flex flex-col items-center ">
          <strong className="text-lg">523</strong>
          <span>Followers</span>
        </div>

        <div title="This is the number of people you follow currently" className="flex flex-col items-center ">
          <strong className="text-lg">746</strong>
          <span>Following</span>
        </div>
      </div>

     <div className="lg:hidden text-start"><UserInfoCard userId={"userId"}/> </div> 
    </div>
  );
};

export default MainProfile;
