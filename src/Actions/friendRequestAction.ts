'use server'

import prisma from "../../lib/client";
import { auth } from "@clerk/nextjs/server";


const ensureUserConnected = (): string => {
    const currentUserId = auth().userId;
    console.log(currentUserId)
    if (!currentUserId) throw new Error("USER IS NOT CONNECTED");
    return currentUserId;
};

// Accept Follow Request
export const acceptFollowRequest = async(userId: string): Promise < void > => {
    const currentUserId = ensureUserConnected();

    try {
        const existingFollow = await prisma.followRequest.findFirst({
            where: { receiverId: currentUserId, senderId: userId },
        });

        if (!existingFollow) {
            throw new Error("FOLLOW REQUEST NOT FOUND");
        }

        // Delete follow request and create a new follow relationship
        await prisma.$transaction([
            prisma.followRequest.delete({
                where: { id: existingFollow.id },
            }),
            prisma.follow.create({
                data: {
                    followerId: userId,
                    followingId: currentUserId,
                },
            }),
        ]);
    } catch (error) {
        console.error("Error accepting follow request:", error);
        throw new Error("FAILED TO ACCEPT FOLLOW REQUEST");
    }
};

// Refuse Follow Request
export const refuseFollowRequest = async(userId: string): Promise < void > => {
    const currentUserId = ensureUserConnected();

    try {
        const existingFollow = await prisma.followRequest.findFirst({
            where: { receiverId: currentUserId, senderId: userId },
        });

        if (!existingFollow) {
            throw new Error("FOLLOW REQUEST NOT FOUND");
        }

        // Delete follow request
        await prisma.followRequest.delete({
            where: { id: existingFollow.id },
        });
    } catch (error) {
        console.error("Error refusing follow request:", error);
        throw new Error("FAILED TO REFUSE FOLLOW REQUEST");
    }
};