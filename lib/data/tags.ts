"use server";
import "server-only";

import { handleError } from "@/lib/utils";
import { connectToDatabase } from "@/lib/db/mongoose";

import Tag from "@/lib/models/tag";

export const getTags = async () => {
  try {
    await connectToDatabase();

    const tags = await Tag.find();

    return JSON.parse(JSON.stringify(tags));
  } catch (error) {
    handleError(error);
  }
};
