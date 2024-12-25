import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";

import { Home } from "lucide-react";
import Link from "next/link";

import React from "react";

const BlockByUser = async ({
  message,
  link,
  username,
}: {
  message: string;
  link: string;
  username: string;
}) => {
  return (
    <div className="h-[100vh] flex flex-col items-center text-center  justify-center ">
      <div className="  bg-background p-6 flex flex-col items-center text-center min-w-[350px] justify-center gap-6 rounded-lg shadow-md animate-pulse">
        <p className="text-primary font-extrabold text-6xl ">Kalyh</p>
        <p className="text-primary">
          {message} <span className="font-bold text-xl"> {username} </span>
        </p>
        <Link href={link}>
          <Button>
            <Home />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlockByUser;
