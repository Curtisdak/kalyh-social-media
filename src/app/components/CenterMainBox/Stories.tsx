import React from "react";
import Image from "next/image";
import StorieElement from "./StorieElement";
import { Plus } from "lucide-react";

const Stories = () => {
  return (
    <div
      id="main-story-container"
      className="scrollbar-hide bg-white rounded-lg shadow-md overflow-scroll text-xs"
    >
      <div id="story-addStory-container" className="flex gap-4 p-4 w-max ">
        <div className=" flex flex-col items-center gap-2 cursor-pointer ">
          <Plus className=" bg-slate-200 text-white  w-20 h-20 rounded-full duration-300 ease-in-out hover:animate-spin hover:ring-2 hover:ring-orange-600  " />
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
