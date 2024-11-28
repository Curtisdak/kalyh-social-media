import React from "react";
import Image from "next/image";
import StorieElement from "./StorieElement";
import { Plus } from "lucide-react";

const Stories = () => {
  return (
    <div
      id="main-story-container"
      className="scrollbar-hide bg-background rounded-lg shadow-md overflow-scroll text-xs text-muted-foreground"
    >
      <div id="story-addStory-container" className="flex gap-4 p-4 w-max ">
        <div className=" flex flex-col items-center gap-2 cursor-pointer ">
          <Plus className=" bg-muted   w-20 h-20 rounded-full duration-300 ease-in-out hover:animate-spin hover:ring-1 hover:ring-ring  " />
          <p>{"add your story"}</p>
        </div>
        <div className=" flex gap-8 w-max">
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
          <StorieElement />
        </div>
      </div>
    </div>
  );
};

export default Stories;
