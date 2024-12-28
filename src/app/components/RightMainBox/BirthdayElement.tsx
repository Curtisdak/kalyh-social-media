import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";

const BirthdayElement = () => {
  return (
    <div className="flex gap-3 flex-nowrap items-center w-full">
    <Image
      src={
        "https://images.pexels.com/photos/15953861/pexels-photo-15953861/free-photo-of-femme-retro-vintage-automne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
      alt="request avatar"
      width={32}
      height={32}
      className="rounded-full w-10 h-10  object-contain relative"
    />
    <div className="flex-1">
      <p className="text-primary text-sm"> Chloe Kelly </p>
      <p className="text-muted-foreground text-[12px]">
        Celebrate my birthady with me !<span className=""></span>
      </p>
    </div>
    <div>
      <Button
        title="click to celebrate your friend's birthday"
        variant={"default"}
        className="  "
      >
        Celebrate
      </Button>
    </div>
  </div>
  )
}

export default BirthdayElement
