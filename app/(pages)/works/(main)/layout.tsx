import { Suspense } from "react";

import { MotionSection, worksVariants } from "@/lib/motion";

import Filters from "@/components/section/works/filters";
import NavButtons from "@/components/shared/nav-buttons";
import FiltersLoader from "@/components/section/works/filters-loader";

const WorksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionSection
      variants={worksVariants}
      initial="hide"
      animate="show"
      className="min-h-full flex flex-col gap-4 md:gap-10 justify-evenly
  items-center py-4 sm:py-8 px-8"
    >
      <h1 className="main-heading">
        My Creative <span className="text-primary">Portfolio</span>
      </h1>
      <Suspense fallback={<FiltersLoader />}>
        <Filters />
      </Suspense>
      {children}
      <NavButtons
        firstLink="/about"
        firstTitle="About"
        secondLink="/skills"
        secondTitle="Skills"
      />
    </MotionSection>
  );
};

export default WorksLayout;
