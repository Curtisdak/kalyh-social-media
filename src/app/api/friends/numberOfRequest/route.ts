import { NextResponse } from "next/server";
import prisma from "../../../../../lib/client";
import { auth, getAuth } from "@clerk/nextjs/server";
import { NextApiRequest } from "next";

export async function GET(req:NextApiRequest) {
  try {
    const { userId } = getAuth(req);
  
    if (!userId) {
      return NextResponse.json({ message: "User is not authenticated" }, { status: 401 });
    }
 
    const totalRequests = await prisma.followRequest.count({
      where: {
        receiverId:String(userId),
      },
    });
 
    return NextResponse.json(totalRequests , { status: 200 });
  } catch (error) {
    console.error("Error fetching number of friend requests:", error);
    return NextResponse.json(
      { message: "Could not count the number of friend requests" },
      { status: 500 }
    );
  }

// return NextResponse.json({message:"Route is working"})
}
