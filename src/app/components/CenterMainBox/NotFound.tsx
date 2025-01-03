import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NotFoundProps {
  message: string;
  redirect: string;
  detail: string;
}

const NotFound: React.FC<NotFoundProps> = ({ message, redirect, detail }) => {
  return (
    <div className=" flex  items-center  h-[calc(100vh+80px) min-h-[700px]  ]">
      <div className="shadow-lg p-10 gap-6 bg-background mx-auto my-auto rounded-md flex flex-col items-center justify-evenly">
        <p className="text-8xl text-primary  "> Kalyh</p>
        <p>
          {message} <strong> {detail} </strong>{" "}
        </p>

        <div className="flex flex-row justify-between items-center w-full ">
          <p className="text-muted  text-sm   ">Kalyh</p>

          <Link href={redirect} title="Go back">
            <Button variant={"secondary"} className="rounded-full">
              <Home />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
