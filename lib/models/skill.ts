import { Model, Schema, model, models } from "mongoose";

const SkillSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Skill: Model<ISkill> =
  models?.Skill || model<ISkill>("Skill", SkillSchema);

export default Skill;
