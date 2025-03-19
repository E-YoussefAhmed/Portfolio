import { getWorks } from "@/lib/data/works";
import { MotionDiv, cardVariants } from "@/lib/motion";

import WorksCard from "@/components/section/works/works-card";

const WorksSlider = async ({ tag }: { tag?: string }) => {
  const works: IWork[] = await getWorks(tag);

  return (
    <div
      className="add-scrollbar flex max-w-full overflow-x-auto overflow-y-hidden
gap-3 sm:gap-5 pb-4"
    >
      {works.map((work) => (
        <MotionDiv variants={cardVariants} key={work._id}>
          <WorksCard work={work} />
        </MotionDiv>
      ))}
    </div>
  );
};

export default WorksSlider;
