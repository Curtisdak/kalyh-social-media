import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import {
  Bell,
  CircleFadingPlus,
  CircleUser,
  House,
  LucideCircleUser,
  MessageCircleMore,
  Search,
  Users,
} from "lucide-react";
import Spinner from "../MySpinner/Spinner";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Klogo from "@/app/kalyh-logo-1.png";
import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="h-12 flex  justify-between items-center  ">
      {/* LEFT */}
      <div className="hover:scale-110 duration-300 ease-in-out w-[10%]">
        <Link
          className=" font-bold text-xl  flex items-center  "
          href={"/"}
        >
          <Image src={Klogo} width={40} height={40} alt="logo " />
          <span className="hidden   lg:flex">Kalyh</span>
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden    md:flex  items-center justify-between w-[50%]  gap-4">
        {/* LINKS */}
        <Link
          className="flex flex-row gap-1 items-center justify-center hover:scale-110 duration-500 ease-in-out"
          href={"/"}
        >
          {" "}
          <House className="w-4 h-4" /> <p className="text-sm">Home</p>{" "}
        </Link>
        <Link
          className="flex flex-row gap-1 items-center justify-center hover:scale-110 duration-500 ease-in-out"
          href={"/"}
        >
          {" "}
          <Users className="w-4 h-4" /> <p className="text-sm">Friends</p>{" "}
        </Link>
        <Link
          className="flex flex-row gap-1 items-center justify-center hover:scale-110 duration-500 ease-in-out"
          href={"/"}
        >
          {" "}
          <CircleFadingPlus className="w-4 h-4" />{" "}
          <p className="text-sm">Stories</p>{" "}
        </Link>

        <div
          id="searchInput-container"
          className="hidden   md:flex items-center gap-1 p-1  bg-input rounded-md active:border-2 active:border-ring duration-300 ease-in-out "
        >
          <Search className="w-5 h-5 text-slate-400 font-bold hover:scale-110 cursor-pointer duration-300 ease-in-out" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-input   font-normal w-full focus:outline-none placeholder:font-normal "
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-[30%] justify-end items-center gap-4">
        <div className="md:hidden">
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
        </div>

        <MobileMenu />
        
        <div className="hidden md:flex">
          <ClerkLoading>
            <Spinner />
          </ClerkLoading>

          {/* WHEN USER IS LOADED WHAT DO I WANT TO SHOW */}

          <ClerkLoaded>
            <SignedIn>
              {/* THIS WILL BE LINK TO TO MY CHAT APP LATER ON */}
              <div className="flex gap-4">
                <Link
                  className="flex flex-row gap-1 items-center justify-center hover:scale-110 duration-500 ease-in-out"
                  href={"/"}
                >
                  <MessageCircleMore className="w-4 h-4" />{" "}
                  <p className="text-sm">Chats</p>{" "}
                </Link>
                {/* --------------------- NOTIFICATION BUTTON   ---------------------------------------- */}
                <div className="flex flex-row gap-1 items-center justify-center hover:scale-110 duration-500 ease-in-out">
                  <Bell className="w-4 h-4" />{" "}
                  <p className="text-sm">Notifications</p>{" "}
                </div>
                
                  <UserButton />
                  <ModeToggle/>
                
              </div>
            </SignedIn>

            <SignedOut>
              <Link
                className="flex flex-row gap-1 mx-1 items-center justify-center hover:scale-110 duration-500 ease-in-out"
                href={"/sign-in"}
              >
               {" "}
                <Button variant="ghost" className="text-sm rounded-xl"> <LucideCircleUser className="w-4 h-4" /> Login/register</Button>
               
              </Link>
              <ModeToggle/>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
