import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ProfileCard = () => {
  return (
    <div title="your profile" className="p-4 bg-background texr-sm flex flex-col gap-2 rounded-md shadow-md relative items-center justify-center text-center">
      {/* <div className="relative w-40 h-18"></div> */}
      <Image
        src={
          "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        width={250}
        height={128}
        alt="cover-image"
        className="relative object-cover w-full h-32 rounded-sm "
      />

      <Image
        src={
          "https://images.pexels.com/photos/17179702/pexels-photo-17179702/free-photo-of-une-femme-portant-des-lunettes-de-soleil-et-une-chemise-blanche-marche-dans-une-rue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        width={80}
        height={80}
        alt="cover-image"
        className=" mt-[-50px] object-cover w-20 h-20 rounded-full ring-2 ring-white z-10 "
      />

      <p className="font-extrabold">Johnson Kirikou</p>

      <div className="flex items-center ">
        {Array.from({ length: 3 }, (_, i) => (
          <Star key={i} fill="orange" strokeWidth={0} className=" w-4 h-4" />
        ))}{" "}
        <p
          title="The number of followers you have "
          className="text-muted-foreground mx-3 text-[14px]"
        >
          430 Followers{" "}
        </p>
      </div>

      <Button>My Profile</Button>
    </div>
  );
};

export default ProfileCard;
