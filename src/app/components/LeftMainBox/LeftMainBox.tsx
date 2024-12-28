import React from "react";
import Ads from "../RightMainBox/Ads";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  CalendarClock,
  Images,
  MonitorPlay,
  Newspaper,
  Rss,
  Settings,
  Store,
} from "lucide-react";

const LeftMainBox = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-2 p-1 mt-12 w-full">
      { type==="home" && <ProfileCard />}
      <div className="p-4 flex flex-col items-center gap-2 text-sm text-muted-foreground rounded-md bg-background shadow-md max-h-[600px] overflow-scroll scrollbar-hide">
        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <Rss className="text-primary" /> <span>My Posts</span>{" "}
          </Button>
        </Link>

        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <Briefcase className="text-primary" /> <span>Activity</span>{" "}
          </Button>
        </Link>
        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <Newspaper className="text-primary" /> <span>News</span>{" "}
          </Button>
        </Link>
        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <Store className="text-primary" /> <span>Marketplace</span>{" "}
          </Button>
        </Link>
        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <CalendarClock className="text-primary" /> <span>Events</span>{" "}
          </Button>
        </Link>
        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <Images className="text-primary" /> <span>Albums</span>{" "}
          </Button>
        </Link>
        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <MonitorPlay className="text-primary" /> <span>Videos</span>{" "}
          </Button>
        </Link>

        <Link href={"/"} className="w-full">
          <Button variant={"ghost"} className="w-full flex justify-start">
            {" "}
            <Settings className="text-primary" /> <span>Settings</span>{" "}
          </Button>
        </Link>
      </div>
      <Ads size="sm" />
    </div>
  );
};

export default LeftMainBox;
