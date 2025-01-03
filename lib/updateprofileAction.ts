"use server";

import { auth } from "@clerk/nextjs/server";

export const updateProfileAction = async (formData: FormData) => {
    
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    console.log("USER IS NOT CONNECTED");
    return;
  }

  try {
    const fields =  Object.fromEntries(formData);
    console.log(fields, "hello kirikou")
  } catch (error) {
    console.log(error, "COULD NOT UPDATE YOUR PROFILE");
    return error;
  }
};
