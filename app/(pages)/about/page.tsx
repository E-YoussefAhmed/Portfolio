import type { Metadata } from "next";

import {
  MotionDiv,
  MotionSection,
  aboutVariants,
  cardVariants,
} from "@/lib/motion";
import { abouts } from "@/lib/constants";

import NavButtons from "@/components/shared/nav-buttons";
import AboutCard from "@/components/section/about/about-card";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <MotionSection
      variants={aboutVariants}
      initial="hide"
      animate="show"
      className="min-h-full flex flex-col gap-4 md:gap-20 justify-evenly
    items-center pb-4 py-10 sm:py-16 px-8"
    >
      <h1 className="main-heading">
        I Know That <span className="text-primary">Good Development</span> Means{" "}
        <span className="text-primary">Good Business</span>
      </h1>
      <div
        className="flex max-w-full gap-10 overflow-y-hidden overflow-x-auto
      add-scrollbar py-4 sm:px-4"
      >
        {abouts.map((about) => (
          <MotionDiv variants={cardVariants} key={about.title}>
            <AboutCard {...about} />
          </MotionDiv>
        ))}
      </div>
      <NavButtons
        firstLink="/"
        firstTitle="Home"
        secondLink="/works"
        secondTitle="Works"
      />
    </MotionSection>
  );
}
