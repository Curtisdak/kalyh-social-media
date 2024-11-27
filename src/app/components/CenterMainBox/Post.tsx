import React from "react";
import Image from "next/image";

import {
  Bookmark,
  Ellipsis,
  MessageSquareText,
  Send,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import Comments from "./Comments";

const Post = () => {
  return (
    <div id="post" className="bg-white flex-col p-2 ">
      {/* AVATAR , POSTED OR UPADATE DATE AND USER ACTION  */}

      <div className="flex items-center gap-2 w-full mb-2">
        <Link href={"/profile/kirikou"}>
          <Image
            src={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={42}
            height={42}
            alt="post owner avatar"
            title="see owner's profile"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-500"
          />
        </Link>
        <div
          id="username-date"
          className="flex items-center w-[90%] justify-between "
        >
          <div className="flex flex-col ">
            <p className="text-sm font-bold">Loren picsum</p>
            <span className="text-[12px] font-extralight italic text-slate-300">
              {" "}
              01 jan 2020{" "}
            </span>
          </div>
          <Ellipsis />
        </div>
      </div>

      {/* Post Images */}
      <div className="w-full min-h-96 relative">
        <Image
          src={
            "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          fill
          alt="post image"
          className=" object-cover rounded-md"
        />
      </div>
      {/* DESCRIPPTION CONTAINER */}
      <div className="mt-2">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque
          eligendi esse, repudiandae culpa nisi ratione tenetur inventore sint,
          iure perspiciatis ex exercitationem doloribus pariatur eaque maxime
          doloremque sit! Ipsam.
        </p>
      </div>

      {/* Action BUTTON LIKE COMMENT SHARE BOOKMARK SHARE  */}
      <div className="flex justify-between items-center mt-2">
        <span className="flex items-center gap-2 bg-slate-200 p-1 px-4 rounded-2xl text-sm cursor-pointer">
          {" "}
          <ThumbsUp className="w-3 h-3 bg-origin-content cursor-pointer" /> 123{" "}
        </span>
        <span className="flex items-center gap-2 bg-slate-200 p-1 px-4 rounded-2xl text-sm cursor-pointer">
          {" "}
          <MessageSquareText className="w-3 h-3 bg-origin-content " /> 123{" "}
        </span>
        <span className="flex items-center gap-2 bg-slate-200 p-1  px-3 rounded-2xl text-sm cursor-pointer">
          {" "}
          <Send className="w-3 h-3 bg-origin-content cursor-pointer" /> share{" "}
        </span>
        <span className="flex items-center gap-2 bg-slate-200 p-1 px-3 rounded-2xl text-sm cursor-pointer">
          {" "}
          <Bookmark className="w-3 h-3 bg-origin-content cursor-pointer" /> save{" "}
        </span>
      </div>

      {/* COMMENTS */}
      <Comments/>
    </div>
  );
};

export default Post;
