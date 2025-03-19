"use server";
import "server-only";

import { handleError } from "@/lib/utils";
import { connectToDatabase } from "@/lib/db/mongoose";

import Work from "@/lib/models/work";

export const getWorks = async (tag?: string) => {
  try {
    await connectToDatabase();

    if (tag) {
      const works = await Work.find({ tags: tag });
      return JSON.parse(JSON.stringify(works));
    } else {
      const works = await Work.find();
      return JSON.parse(JSON.stringify(works));
    }
  } catch (error) {
    handleError(error);
  }
};

export const getWorkById = async (id: string) => {
  try {
    await connectToDatabase();

    const work = await Work.findById(id);

    return JSON.parse(JSON.stringify(work));
  } catch (error) {
    handleError(error);
  }
};
