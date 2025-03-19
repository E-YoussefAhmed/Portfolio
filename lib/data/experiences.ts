"use server";
import "server-only";

import { handleError } from "@/lib/utils";
import { connectToDatabase } from "@/lib/db/mongoose";

import Experience from "@/lib/models/experience";

export const getExperiences = async () => {
  try {
    await connectToDatabase();

    const experiences = await Experience.find().sort({ year: -1 });

    return JSON.parse(JSON.stringify(experiences));
  } catch (error) {
    handleError(error);
  }
};
