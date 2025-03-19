import { Model, Schema, model, models } from "mongoose";

const ExperienceSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  title: String,
  description: {
    type: String,
    required: true,
  },
});

const Experience: Model<IExperience> =
  models?.Experience || model<IExperience>("Experience", ExperienceSchema);

export default Experience;
