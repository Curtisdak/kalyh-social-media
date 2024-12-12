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
import { Button } from "@/components/ui/button";

const Post = () => {
  return (
    <div id="post" className="bg-background flex-col p-3 rounded-lg ">
      {/* AVATAR , POSTED OR UPADATE DATE AND USER ACTION  */}

      <div className="flex items-center gap-2 w-full mb-2 text-muted-foreground">
        <Link href={"/profile/kirikou"}>
          <Image
            src={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            width={42}
            height={42}
            alt="post owner avatar"
            title="see owner's profile"
            className="w-10 h-10 rounded-full object-cover ring-1 ring-ring"
          />
        </Link>
        <div
          id="username-date"
          className="flex items-center w-[90%] justify-between "
        >
          <div className="flex flex-col ">
            <p className="text-sm text-primary ">Loren picsum</p>
            <span className="text-[11px] font-extralight italic ">
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
      <div className="mt-2  max-h-[160px] overflow-scroll scrollbar-hide">
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cumque
          eligendi esse, repudiandae culpa nisi ratione tenetur inventore sint,
          iure perspiciatis ex exercitationem doloribus pariatur eaque maxime
          doloremque sit! Ipsam.
        </p>
      </div>

      {/* Action BUTTON LIKE COMMENT SHARE BOOKMARK SHARE  */}
      <div className="flex justify-between items-center mt-2">
        <Button variant={"secondary"} className="flex items-center gap-2 rounded-2xl">
          {" "}
          <ThumbsUp className="w-3 h-3 bg-origin-content cursor-pointer" /> 123{" "}
        </Button>
        <Button  variant={"secondary"}  className="flex items-center gap-2  rounded-2xl">
          {" "}
          <MessageSquareText className="w-3 h-3 bg-origin-content " /> 123{" "}
        </Button>
        <Button  variant={"secondary"} className="flex items-center gap-2  rounded-2xl">
          {" "}
          <Send className="w-3 h-3 " /> <p className="hidden md:flex">share</p>{" "}
        </Button>
        <Button variant={"secondary"}  className="flex items-center gap-2 rounded-2xl">
          {" "}
          <Bookmark className="w-3 h-3 bg-origin-content cursor-pointer" /> <p className=" hidden md:flex">save</p> {" "}
        </Button>
      </div>

      {/* COMMENTS */}
      <Comments/>
    </div>
  );
};

export default Post;
