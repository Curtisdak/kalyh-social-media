"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export const acceptFriendRequest = async (userId: string) => {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    throw new Error("User is not Authenticated!!");
   
  }
  const existingRequest = await prisma.followRequest.findFirst({
    where: { senderId:userId, receiverId: currentUserId },
  });

  if (!existingRequest) {
    throw new Error("Friend request does not exist.");
  }

  // Delete the friend request
  await prisma.followRequest.delete({
    where: { id: existingRequest.id },
  });

  // Add the friend relationship
  await prisma.follow.create({
    data: {
      followingId: currentUserId,
      followerId: userId,
    },
  });

  return { message: "Friend request accepted successfully!" };
};
