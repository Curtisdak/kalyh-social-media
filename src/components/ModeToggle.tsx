"use client";

import * as React from "react";
import { Eye, Moon, MoonIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className="flex  gap-6 justify-between items-center w-[180px] relative">
            {" "}
            Kalyh - Light
            <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-0  ">
              {" "}
              <span className="bg-white w-[50%]"></span>{" "}
              <span className="bg-orange-500 w-[50%]"></span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <div className="flex  gap-6 justify-between items-center  w-[180px]  relative">
            {" "}
            Kalyh - Dark{" "}
            <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-0  ">
              {" "}
              <span className="bg-indigo-950 w-[50%]"></span>{" "}
              <span className="bg-orange-500 w-[50%]"></span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blue-light")}>
          <div className="flex  gap-6 justify-between items-center realtive  w-[180px]  ">
            {" "}
            Ligth - blue
            <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2 ">
              {" "}
              <span className="bg-white w-[50%]"></span>{" "}
              <span className="bg-blue-500 w-[50%]"></span>
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("blue-dark")}>
          <div className="flex  gap-6 justify-between items-center realtive">
            {" "}
            Dark - blue
            <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2">
              {" "}
              <span className="bg-black w-[50%]"></span>{" "}
              <span className="bg-blue-500 w-[50%]"></span>
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("green-light")}>
   <div className="flex  gap-6 justify-between items-center realtive">
     {" "}
     Light - green
     <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2">
       {" "}
       <span className="bg-white w-[50%]"></span>{" "}
       <span className="bg-green-500 w-[50%]"></span>
     </div>
   </div>
 </DropdownMenuItem>

 <DropdownMenuItem onClick={() => setTheme("green-dark")}>
   <div className="flex  gap-6 justify-between items-center realtive">
     {" "}
     Dark - blue
     <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2">
       {" "}
       <span className="bg-black w-[50%]"></span>{" "}
       <span className="bg-green-500 w-[50%]"></span>
     </div>
   </div>
 </DropdownMenuItem>

 <DropdownMenuItem onClick={() => setTheme("violet-light")}>
  <div className="flex  gap-6 justify-between items-center realtive">
    {" "}
    Light - violet
    <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2">
      {" "}
      <span className="bg-white w-[50%]"></span>{" "}
      <span className="bg-violet-500 w-[50%]"></span>
    </div>
  </div>
</DropdownMenuItem>

<DropdownMenuItem onClick={() => setTheme("violet-dark")}>
  <div className="flex  gap-6 justify-between items-center realtive">
    {" "}
    Dark - violet
    <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2">
      {" "}
      <span className="bg-black w-[50%]"></span>{" "}
      <span className="bg-violet-500 w-[50%]"></span>
    </div>
  </div>
</DropdownMenuItem>

<DropdownMenuItem onClick={() => setTheme("yellow-light")}>
  <div className="flex  gap-6 justify-between items-center realtive">
    {" "}
    Light - yellow
    <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2">
      {" "}
      <span className="bg-white w-[50%]"></span>{" "}
      <span className="bg-yellow-500 w-[50%]"></span>
    </div>
  </div>
</DropdownMenuItem>

<DropdownMenuItem onClick={() => setTheme("yellow-dark")}>
  <div className="flex  gap-6 justify-between items-center realtive">
    {" "}
    Dark - yellow
    <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground  overflow-hidden absolute right-2">
      {" "}
      <span className="bg-black w-[50%]"></span>{" "}
      <span className="bg-yellow-500 w-[50%]"></span>
    </div>
  </div>
</DropdownMenuItem>

<DropdownMenuItem onClick={() => setTheme("zinc-light")}>
  <div className="flex  gap-6 justify-between items-center realtive">
    {" "}
    Day Mode
    <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground justify-center  overflow-hidden absolute right-2">
      {" "}
    <Sun/>
    
    </div>
  </div>
</DropdownMenuItem>

<DropdownMenuItem onClick={() => setTheme("zinc-dark")}>
  <div className="flex  gap-6 justify-between items-center realtive">
    {" "}
   Eye Mode
    <div className="flex w-6 h-4 rounded-xl ring-1 ring-muted-foreground justify-center  overflow-hidden absolute right-2">
      {" "}
      <Eye />
    </div>
  </div>
</DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
