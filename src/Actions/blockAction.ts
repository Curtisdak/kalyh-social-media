"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../../lib/client";

export    const blockAction = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) throw new Error("NOT CURRENTLY CONNECTED ");

  try {
    const existingblock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (existingblock) {
      await prisma.block.delete({ where: { id: existingblock.id } });
    } else {
      await prisma.block.create({
        data: { blockerId: currentUserId, blockedId: userId },
      });
    }
  } catch (error) {
    console.info(error);
    throw new Error("SOMETHING WENT WRONG !");
  }
};
