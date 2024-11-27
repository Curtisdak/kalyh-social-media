import React from "react";
import Image from "next/image";
import { AlignVerticalJustifyEnd, CalendarDays, Camera, Video } from "lucide-react";
const AddNewPost = () => {
  return (
    <div
      id="addPost-container"
      className="bg-white p-2 flex flex-col  text-sm rounded-lg shadow-md"
    >
      <div className=" flex flex-nowrap justify-center items-center gap-2">
        {/* AvATAR */}
        <Image
          src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="avatar"
          width={48}
          height={48}
          className="rounded-full w-12  h-12 object-cover shadow-md hover:scale-110 duration-300 cursor-pointer ring-2 ring-orange-500"
        />

        {/* TEXTE AREA INPUT */}
        <div className=" w-[90%] gap-2 flex flex-nowrap ">
          <textarea
            name="desc"
            id="description"
            placeholder="What's on your mind"
            className="text-sm flex-1  bg-slate-200 focus:outline-none rounded-md p-2"
          ></textarea>

          <span className="  self-end ">
            <Image
              src="/emoji.png"
              width={24}
              height={24}
              alt="emoji"
              className="w-6 h-6 rounded-full object-cover shadow-md cursor-pointer hover:scale-110 duration-300 ease-in-out "
            />
          </span>
        </div>
      </div>

      <div
        id="option-container"
        className="flex gap-2 mt-4 mx-auto justify-between items-center px-4 w-[85%]"
      >
        <div
          className="flex gap-1 items-center hover:animate-pulse cursor-pointer p-2 rounded-lg opacity-70 bg-green-300 hover:scale-110 duration-300 ease-in-out "
          title="add a photo"
        >
          <Camera className="text-white" />{" "}
          <p className="text-sm text-white md:flex  hidden">Photo</p>
        </div>
        <div
          className="flex gap-1 items-center hover:animate-pulse cursor-pointer p-2 rounded-lg opacity-70 bg-purple-300 hover:scale-110 duration-300 ease-in-out "
          title="add a video"
        >
          <Video className="text-white" />{" "}
          <p className="text-sm text-white md:flex  hidden">Video</p>
        </div>
        <div
          className="flex gap-1 items-center hover:animate-pulse cursor-pointer p-2 rounded-lg opacity-70 bg-red-300 hover:scale-110 duration-300 ease-in-out "
          title="add a poll"
        >
          <AlignVerticalJustifyEnd  className="text-white" />{" "}
          <p className="text-sm text-white md:flex  hidden">Poll</p>
        </div>
        <div
          className="flex gap-1 items-center hover:animate-pulse cursor-pointer p-2 rounded-lg opacity-70 bg-blue-300 hover:scale-110 duration-300 ease-in-out "
          title="add an event"
        >
          <CalendarDays className="text-white" />{" "}
          <p className="text-sm text-white  md:flex hidden">Event</p>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
