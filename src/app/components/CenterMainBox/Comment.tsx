import React from "react";
import Image from "next/image";
import { MessageSquareText, Minus, ThumbsUp } from "lucide-react";

const Comment = () => {
  return (
    <div id="list-container" className="flex w-[85%] flex-nowrap flex-col mx-auto  gap-2 my-2">
      <div className="flex items-center gap-2 text-sm -mb-2">
        <Image
          src={
            "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          width={24}
          height={24}
          alt="post owner avatar"
          title="see owner's profile"
          className="w-6 h-6 rounded-full object-cover "
        />
        <p>kirkou</p>
        <Minus />
        <p className="text-[12px] italic">20 nov 2020</p>
      </div>
      <div className="text-[12px]  ">
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse cumque
          velit quae tempora sunt consequatur ipsa? Itaque ex dolore praesentium
          corrupti, ducimus obcaecati, fugiat, at nulla dolorum sequi
          necessitatibus! Blanditiis?
        </p>
        <div className="flex gap-10 my-1">
          <span className="flex gap-2 items-center"><ThumbsUp className="w-3 h-3" /> | 12</span>
          <span className="flex gap-2 items-center" ><MessageSquareText className="w-3 h-3 rotate-180" /> reply</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
