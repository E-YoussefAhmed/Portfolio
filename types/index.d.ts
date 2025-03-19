declare interface IExperience {
  _id: string;
  year: number;
  title?: string;
  description: string;
}

declare interface IMessage {
  _id: string;
  name: string;
  phone?: string;
  email: string;
  message: string;
}

declare interface ISkill {
  _id: string;
  title: string;
  image: string;
}

declare interface ITag {
  _id: string;
  title: string;
  tag: string;
}

declare interface ITestimonial {
  _id: string;
  name: string;
  image: string;
  company: string;
  feedback: string;
}

declare interface IWork {
  _id: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink?: string;
  projectLink: string;
  images: string[];
  tags?: string[];
}
