import { Model, Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    require: true,
  },
  feedback: {
    type: String,
    require: true,
  },
});

const Testimonial: Model<ITestimonial> =
  models?.Testimonial || model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
