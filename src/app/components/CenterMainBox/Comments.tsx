"use client";

import React, { useState } from "react";
import Image from "next/image";
import Comment from "./Comment";
import emoji from "../../../../public/emoji.png";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";

const Comments = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  return (
    <div id="comments-container" className="my-2 text-slate-400">
      <div
        id="input-container"
        className="flex flex-nowrap flex-row items-center gap-1 "
      >
        <Image
          src={
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          width={32}
          height={32}
          alt="post owner avatar"
          title="see owner's profile"
          className="w-8 h-8 rounded-full object-cover ring-2 ring-orange-500"
        />
        <div
          id="input-box"
          className="bg-slate-200 flex flex-nowrap rounded-xl p-2 items-center relative"
        >
          <input
            name="text"
            type="text"
            placeholder="What's you comment on this post"
            className="bg-transparent focus:outline-none text-sm "
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

        <div>
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
