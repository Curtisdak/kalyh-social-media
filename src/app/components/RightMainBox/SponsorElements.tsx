import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SponsorElements = () => {
  return (
    <div className='flex flex-col gap-2 '> 
   
    <div className=" rounded-lg items-center w-full min-h-60   relative">
    <Image
      src={
        "https://images.pexels.com/photos/788662/pexels-photo-788662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
      fill
      alt="birthday logo"
      className=" object-cover drop-shadow-md "
    />
  </div>
  <h3 className='font-semibold'>Love is all you need !</h3>
  <p className="">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
    harum doloremque nihil consequatur omnis quo est itaque corrupti saepe
    sapiente repellendus nam ullam rerum, adipisci a voluptatum earum
    laudantium ea!
  </p>
  <Button variant={"default"} className="">
    Learn more
  </Button>
  </div>
  )
}

export default SponsorElements
