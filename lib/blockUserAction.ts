"use server"



import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

 export const blockUserAction = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) return;

  try {
    const existingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });
   
    if(existingBlock){
        await prisma.block.delete({
            where:{
                id: existingBlock.id
            }
        })
    }else{
        await prisma.block.create({
            data:{
                blockerId:currentUserId,
                blockedId:userId,
            }
        })
    }

  } catch (error) {
    console.log(error)
    throw new Error("SOMMETHING WENTWRONG ABOUT BLOCKING USER")  }
};
