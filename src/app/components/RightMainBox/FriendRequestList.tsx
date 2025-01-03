"use client";

import React, { useState, useEffect, useOptimistic } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX } from "lucide-react";
import Link from "next/link";
import { acceptFriendRequest } from "../../../../lib/acceptRequestAction";
import { declineFollowRequest } from "../../../../lib/declineRequestAction";
import FriendsRequest from "./FriendsRequest";


type FriendRequestType = {
  id: number;
  sender: {
    id: string;
    username: string;
    avatar: string | null;
    name: string | null;
  };
  createdAt: string;
};


const FriendRequestList = () => {


  const [friendRequests, setFriendRequests] = useState<FriendRequestType[]>([]);
  const [numberOfRequests, setNumberOfRequests] = useState<number | null>(null);
  

  useEffect(() => {
    const fetchFriendRequests = async () => {
      try {
        const response = await fetch("/api/friends/friendRequest");
        if (response.ok) {
          console.log(response.status, "Fetching friend requests is OK");
          const data = await response.json();
          setFriendRequests(data);
        
        } else {
          console.error("Failed to fetch friend requests:", response.status);
        }
      } catch (error) {
        console.error("Could not fetch friend requests:", error);
      }
    };

    const fetchNumberOfRequest = async () => {
      try {
        const response = await fetch("/api/friends/numberOfRequest");
        if (response.ok) {
          const data = await response.json();
          setNumberOfRequests(data);
          
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriendRequests();
    fetchNumberOfRequest();
  }, []);

  const acceptRequest = async (senderId: string, requestId: number) => {
    console.log("CLICKED");
    handleOptimisticAnswer(requestId);
    try {
      await acceptFriendRequest(senderId)
      setFriendRequests((prevRequest) =>
        prevRequest.filter((req) => req.id !== requestId)
      );
      setNumberOfRequests((prev) => (prev !== null ? prev - 1 : null));
    } catch (error) {
      console.log("Error accepting request:", error);
    }
  };

  const declineRequest = async (senderId: string, requestId: number) => {
    console.log("declineRequest function CLICKED");
    handleOptimisticAnswer(requestId);
    
    try {
      await declineFollowRequest(senderId)
      setFriendRequests((prevRequest) =>
        prevRequest.filter((req) => req.id !== requestId)
      );
      setNumberOfRequests((prev) => (prev !== null ? prev - 1 : null));
    } catch (error) {
      console.log("Error accepting request:", error);
    }
  };
  
  const [optimisticAnswer, handleOptimisticAnswer] = useOptimistic(
    friendRequests,
     (state, value: number) => (state.filter((rev:any) => rev.id !== value))
  );

  
  
  return (
    <div className="flex flex-col gap-2 scrollbar-hide overflow-scroll">
      <div className="flex justify-between items-center text-primary mb-2">
        <p className="">Friend Requests ({numberOfRequests}) </p>
        <Button variant={"ghost"} className="rounded-full">
          See all
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        {optimisticAnswer.length > 0 ? (
          optimisticAnswer.map((request) => (
            <div
              key={request.id}
              className="flex gap-2 items-center w-full p-2  rounded-md shadow-md"
            >
              <Link href={`/profile/${request.sender.username}`} className="hover:animate-pulse">
                <Image
                  src={
                    request.sender.avatar || "https://via.placeholder.com/150" // Fallback avatar
                  }
                  alt={`${request.sender.name || "User"}'s avatar`}
                  width={40}
                  height={40}
                  className="rounded-full w-12 h-12 object-cover"
                />
              </Link>
              <div className="flex-1">
                <p className="text-primary text-sm font-medium">
                  {request.sender.name || "Unknown User"}
                </p>
                <p className="text-muted-foreground text-xs">
                  Sent on:{" "}
                  <span>
                   { new Date(request.createdAt).toLocaleDateString()}
                  </span>
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  title="Accept the request"
                  className="rounded-full p-1 bg-primary  ease-in-out hover:opacity-60  duration-500 "
                  onClick={() => acceptRequest(request.sender.id, request.id)}
                >
                  <CircleCheck className="w-[24px] h-[24px] text-secondary  " />
                </button>
                <button
                  title="Decline the request"
                  className="rounded-full p-1 bg-muted-foreground  ease-in-out hover:opacity-60  duration-500 "
                  onClick={() => declineRequest(request.sender.id, request.id)}
                >
                  <CircleX className="w-[24px] h-[24px] text-secondary " />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">
            No friend requests at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default FriendRequestList;
