"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import { updateProfileAction } from "../../../../lib/updateprofileAction";

const UpdateProfile = ({ user }: { user: User }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"}>Edit</Button>
      </DialogTrigger>
      <DialogContent className=" border-none  max-h-[70%] lg:w-[70%] overflow-scroll scrollbar-hide">
        <DialogHeader>
          <DialogTitle className="flex gap-2">Update your profile <p className="text-primary"> {user.username}  </p></DialogTitle>
          <DialogDescription>
            <p className="text-[12px] ">
              {" "}
              Click on the avatar in the navbar to change the username and
              picture profile
            </p>

            <form
              action={updateProfileAction}
              className="flex flex-col my-3 gap-2 text-left"
              title=" Your name "
            >
              <div className="flex flex-col gap-1  ">
                <label htmlFor="" className="block text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={user.name || "kalyh"}
                  className="bg-input p-2  rounded-md  focus:outline-none focus:ring-1 focus:ring-primary  "
                />
              </div>

              <div
                className="flex flex-col gap-1  "
                title=" Your family name (optional) "
              >
                <label htmlFor="">Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder={user.surname || "kalyhFan"}
                  className="bg-input p-2  rounded-md  focus:outline-none focus:ring-1 focus:ring-primary  "
                />
              </div>

              <div
                className="flex flex-col gap-1  "
                title=" talk about yourself (optional) "
              >
                <label htmlFor="">Description</label>
                <textarea
                  rows="4"
                  name="bio"
                  placeholder={user.bio || "talk about yourself... "}
                  className="bg-input p-2  rounded-md  focus:outline-none focus:ring-1 focus:ring-primary  "
                ></textarea>
              </div>

              <div
                className="flex flex-col gap-1"
                title=" From which city do you come or where do you live (optional) ? "
              >
                <label htmlFor="">Living</label>
                <input
                  type="text"
                  name="city"
                  placeholder={user.city || "where do you live"}
                  className="bg-input p-2  rounded-md  focus:outline-none focus:ring-1 focus:ring-primary  "
                />
              </div>

              <div
                className="flex flex-col gap-1"
                title="Your friends want to know the school you attended (optional) ? "
              >
                <label htmlFor="">School</label>
                <input
                  type="text"
                  name="school"
                  placeholder={user.school || "kalyh school"}
                  className="bg-input p-2  rounded-md  focus:outline-none focus:ring-1 focus:ring-primary  "
                />
              </div>

              <div
                className="flex flex-col gap-1"
                title="were do you work at (optional) ? "
              >
                <label htmlFor="">Work at</label>
                <input
                  type="text"
                  name="work"
                  placeholder={user.work || "Air Caledonie"}
                  className="bg-input p-2  rounded-md  focus:outline-none focus:ring-1 focus:ring-primary  "
                />
              </div>

              <div
                className="flex flex-col gap-1"
                title="were do you work at (optional) ? "
              >
                <label htmlFor="">Website Link</label>
                <input
                  type="text"
                  name="website"
                  placeholder={user.website || "Air Caledonie"}
                  className="bg-input p-2  rounded-md  focus:outline-none focus:ring-1 focus:ring-primary  "
                />
              </div>

              <DialogClose className="w-[50%] flex gap-4 mt-3 ">
                <Button variant={"secondary"} type="button">
                  Cancel
                </Button>

                <Button type="submit">Update</Button>
              </DialogClose>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfile;
