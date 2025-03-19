import { Model, Schema, model, models } from "mongoose";

const WorkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  codeLink: String,
  images: {
    type: [String],
    required: true,
  },
  tags: [String],
});

const Work: Model<IWork> = models?.Work || model<IWork>("Work", WorkSchema);

export default Work;
