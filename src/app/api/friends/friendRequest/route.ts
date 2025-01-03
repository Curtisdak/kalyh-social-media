import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/client";
import { auth, getAuth } from "@clerk/nextjs/server";

export async function GET(req:NextRequest) {
  const { userId } = getAuth(req);

  if (!userId) {
    return NextResponse.json({ error: "User not allowed" }, { status: 405 });
  }

  try {
    const getFriendRequest = await prisma.followRequest.findMany({
      where: { receiverId: String(userId) },
      select: {
        id: true,
        sender: {
          select: { id: true, username: true, avatar: true, name: true },
        },
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(getFriendRequest, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Could not fetch friend requests" },
      { status: 400 }
    );
  }
}
