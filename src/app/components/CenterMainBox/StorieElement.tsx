import React from "react";
import Image from "next/image";

const StorieElement = () => {
  return (
    <div className=" flex flex-col  items-center gap-2 cursor-pointer ">
      <Image
        src="https://images.pexels.com/photos/29099997/pexels-photo-29099997/free-photo-of-architecture-historique-dans-un-cadre-urbain-ensoleille.jpeg"
        width={80}
        height={80}
        className="w-20 h-20 shadow-md shadow-black rounded-full ring-1 ring-ring hover:scale-110 hover:animate-pulse ease-out duration-500"
        alt={"storie-image"}
      />
      <p>{"username"}</p>
    </div>
  );
};

export default StorieElement;
