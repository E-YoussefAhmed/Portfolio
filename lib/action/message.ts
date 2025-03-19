"use server";
import "server-only";

import { handleError } from "@/lib/utils";
import {
  ContactData,
  // , ContactSchema
} from "@/lib/schema";
import { connectToDatabase } from "@/lib/db/mongoose";

import Message from "@/lib/models/message";

export const submitMessage = async (message: ContactData) => {
  try {
    await connectToDatabase();

    await Message.create(message);

    return { success: true };
  } catch (error) {
    handleError(error);
  }
};

// type FormState = {
//   success: boolean;
//   fields?: ContactData;
//   errors?: Record<string, string[]>;
// };

// export const submitMessage = async (
//   _: FormState,
//   formData: FormData
// ): Promise<FormState> => {
//   try {
//     const rawData = {
//       name: formData.get("name") as string,
//       email: formData.get("email") as string,
//       phone: formData.get("phone") as string,
//       message: formData.get("message") as string,
//     };

//     const validatedFields = ContactSchema.safeParse(rawData);

//     if (!validatedFields.success) {
//       return {
//         success: false,
//         fields: rawData,
//         errors: validatedFields.error.flatten().fieldErrors,
//       };
//     }

//     await connectToDatabase();

//     await Message.create(rawData);

//     return { success: true };
//   } catch (error) {
//     console.log(error);
//     return {
//       success: false,
//     };
//   }
// };
