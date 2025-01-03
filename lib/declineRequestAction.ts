"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    return "user is not connected";
  }

  try {
    const existingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        receiverId: currentUserId,
        senderId: userId,
      },
    });

    if (existingFollowRequest) {
      await prisma.followRequest.delete({
        where: { id: existingFollowRequest.id },
      });
    } else {
      return "Follow request does not exist";
    }
  } catch (error) {
    console.log(error, "could delete the follow request");
    return error;
  }
};
