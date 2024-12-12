import React from "react";
import Image from "next/image";
import {
  AlignVerticalJustifyEnd,
  CalendarDays,
  Camera,
  CameraIcon,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const AddNewPost = () => {
  return (
    <div
      id="addPost-container"
      className="bg-background p-2 flex flex-col  text-sm rounded-lg shadow-md"
    >
      <div className=" flex flex-nowrap justify-start items-center gap-2 ">
        {/* AvATAR */}
        <Image
          src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full w-12  h-12 object-cover shadow-md hover:scale-110 duration-300 cursor-pointer ring-1 ring-ring "
        />

        {/* TEXTE AREA INPUT */}
        <div className=" gap-2 flex  flex-1 ">
          <textarea
            name="desc"
            id="description"
            placeholder="What's on your mind"
            className="text-sm flex-1 w-full bg-input focus:outline-none rounded-md p-2 text-secondary-foreground"
          ></textarea>
        </div>

        <Button variant={"ghost"} className=" self-end p-0 ">
          <span>
            <Image
              src="/emoji.png"
              width={24}
              height={24}
              alt="emoji"
              className="w-6 h-6 rounded-full object-cover shadow-md cursor-pointer hover:scale-110 duration-300 ease-in-out "
            />
          </span>
        </Button>
      </div>

      <div
        id="option-container"
        className="flex gap-2 mt-4 mx-auto justify-start items-center px-4 w-[85%] text-sm"
      >
        <Button variant={"secondary"} className="rounded-full">
          <CameraIcon /> <span className="text-[12px] ">Photo</span>
        </Button>
        <Button variant={"secondary"} className="rounded-full">
          <Video /> <span className="text-[12px] ">Video</span>
        </Button>
      </div>
    </div>
  );
};

export default AddNewPost;
