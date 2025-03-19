import Image from "next/image";

import { MotionSection, homeVariants } from "@/lib/motion";

import Circles from "@/components/section/home/circles";
import NavButtons from "@/components/shared/nav-buttons";
import MainHeading from "@/components/section/home/main-heading";

export default function Home() {
  return (
    <MotionSection
      variants={homeVariants}
      initial="hide"
      animate="show"
      className="min-h-full flex flex-col gap-4 md:gap-10 justify-center items-center"
    >
      <div>
        <Image
          src="/home/joe.jpg"
          width={200}
          height={200}
          alt="Icon"
          title="DevLab"
          className="w-26 md:w-40 rounded-full"
        />
      </div>
      <MainHeading />
      <div className="absolute bottom-20">
        <NavButtons secondLink="/about" secondTitle="About" />
      </div>
      <Circles />
    </MotionSection>
  );
}
