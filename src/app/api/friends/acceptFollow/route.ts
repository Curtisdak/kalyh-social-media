// import { NextApiRequest, NextApiResponse } from "next";
// import { acceptFriendRequest } from "../../../../../lib/acceptRequestAction"; // Adjust the path based on your project structure

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log("Incoming request to acceptFriendRequest...");

//   if (req.method === "POST") {
//     try {
//       const { userId } = req.body;

//       if (!userId) {
//         console.error("No userId provided in the request body.");
//         return res.status(400).json({ error: "User ID is required." });
//       }

//       const response = await acceptFriendRequest(userId);

//       console.log("Friend request accepted successfully:", response);
//       return res.status(200).json(response);
//     } catch (error: any) {
//       console.error("Error accepting friend request:", error.message || error);
//       return res.status(500).json({ error: error.message || "Internal Server Error" });
//     }
//   } else {
//     console.error(`Unsupported HTTP method: ${req.method}`);
//     return res.status(405).json({ error: "Method Not Allowed. Use POST." });
//   }
// }
