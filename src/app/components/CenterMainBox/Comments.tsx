"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comment from "./Comment";
import emoji from "../../../../public/emoji.png";
import { CircleArrowDown, CircleArrowUp, CircleX } from "lucide-react";
import { Button } from "@/components/ui/button";

const Comments = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  return (
    <div id="comments-container" className="my-2 text-slate-400">
      <div
        id="input-container"
        className="flex flex-nowrap flex-row items-center gap-1  md:w-full"
      >
        <Image
          src={
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          width={32}
          height={32}
          alt="post owner avatar"
          title="see owner's profile"
          className="w-8 h-8 rounded-full object-cover ring-1 ring-ring"
        />
        <div
          id="input-box"
          className="bg-input flex flex-nowrap flex-1 rounded-xl p-0 items-center relative"
        >
          <CircleX xlinkTitle="cancel what you are typing" className="cursor-pointer mx-1 hover:animate-ping "/>
          <input
            name="text"
            type="text"
            placeholder="What's you comment on this post"
            className="bg-transparent focus:outline-none text-sm w-full  p-2 "
            title="enter your comments"
          />
          <Image
            src={emoji}
            alt="emoji"
            width={24}
            height={24}
            className="duration-200 ease-in-out hover:animate-bounce w-6 h-6 absolute right-1"
          />
        </div>

        <div className="text-muted-foreground">
          {isOpen ? (
            <CircleArrowUp
              className="w-5 h-5 cursor-pointer hover:animate-ping"
              onClick={() => setIsopen(!isOpen)}
            />
          ) : (
            <CircleArrowDown
              className="w-5 h-5 cursor-pointer hover:animate-ping"
              onClick={() => setIsopen(!isOpen)}
            />
          )}
        </div>
      </div>

      {/* COMMENTS LIST */}
      {isOpen && (
        <div className="max-h-[250px] overflow-scroll scrollbar-hide">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      )}
    </div>
  );
};

export default Comments;
