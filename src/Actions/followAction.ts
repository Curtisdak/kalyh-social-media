"use server"

import { auth } from "@clerk/nextjs/server";
import prisma from "../../lib/client";

export const followAction = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("USER IS NOT CONNECTED");
  }

  try {
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (existingFollow) {
      await prisma.follow.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingfollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          receiverId: userId,
        },
      });

      if (existingfollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingfollowRequest.id,
          },
        });
      }else{
        await prisma.followRequest.create({
            data:{
                 senderId: currentUserId,
                 receiverId: userId,
            }
        })
      }
    }
  } catch (error) {
    console.log(error)
    throw new Error("SOMETHING WHEN WRONG ABOUT THE FOLLOW_ACTION")
  }
};
