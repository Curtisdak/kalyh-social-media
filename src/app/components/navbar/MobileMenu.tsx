"use client";

import { ClerkLoaded, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div id="mobile-menu-container" className="md:hidden">
      <div
        id="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex flex-col justify-center gap-[4.5px] rounded-sm cursor-pointer hover:scale-110 duration-300 ease-in-out`}
      >
        <div
          className={`bg-orange-500 w-6 h-1 rounded-sm origin-left ${
            isOpen && "rotate-45"
          }  duration-500 ease-in-out  `}
        />
        <div
          className={`bg-orange-500 w-6 h-1 rounded-sm   ${
            isOpen && "opacity-0"
          } duration-500 ease-in-out  `}
        />
        <div
          className={`bg-orange-500 w-6 h-1 rounded-sm   ${
            isOpen && "-rotate-45"
          } duration-500 ease-in-out  origin-left `}
        />
      </div>

      {isOpen && (
        <div className="bg-white flex flex-col items-center justify-center gap-8  w-full  absolute left-0 top-16  h-[calc(100vh-64px)]  z-10 duration-300 ease-in-out ">
          <Link className="w-full" href={"/"} onClick={() => setIsOpen(!isOpen)}>
            <div className="flex  gap-2 justify-center items-center">
              {" "}
              <p className="text-md font-semibold text-orange-600">Home</p>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex  gap-2 justify-center items-center">
              {" "}
              <p className="text-md font-semibold text-orange-600">Friends</p>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex  gap-2 justify-center items-center">
              {" "}
              <p className="text-md font-semibold text-orange-600">Groups</p>
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex  gap-2 justify-center items-center">
              {" "}
              <p className="text-md font-semibold text-orange-600">Stories</p>
            </div>
          </Link>

          <ClerkLoaded>
            <SignedOut>
              <Link href={"/sign-in"} onClick={() => setIsOpen(!isOpen)}>
                <div className="flex  gap-2 justify-center items-center">
                  {" "}
                  <p className="text-md font-semibold text-orange-600">Login</p>
                </div>
              </Link>
            </SignedOut>
          </ClerkLoaded>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
