import { Model, Schema, model, models } from "mongoose";

const TagSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
});

const Tag: Model<ITag> = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
