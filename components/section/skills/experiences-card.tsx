import { getExperiences } from "@/lib/data/experiences";
import { MotionDiv, experienceVariants } from "@/lib/motion";

type Experience = {
  _id: string;
  title?: string;
  year: number;
  description: string;
};

const ExperiencesCard = async () => {
  const experiences: IExperience[] = await getExperiences();

  return (
    <MotionDiv
      variants={experienceVariants}
      initial="hide"
      animate="show"
      className="flex flex-col justify-start self-stretch space-y-4"
    >
      {experiences.map((exp: Experience) => (
        <div key={exp._id}>
          <p className="text-primary text-lg font-bold sm:text-xl">
            {exp.year}
          </p>
          {exp.title && (
            <h2 className="sm:text-xl text-lg font-bold">{exp.title}</h2>
          )}
          <p className="tracking-wider text-sx sm:text-base">
            {exp.description}
          </p>
        </div>
      ))}
    </MotionDiv>
  );
};

export default ExperiencesCard;
