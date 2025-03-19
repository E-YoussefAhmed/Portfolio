import type { Metadata } from "next";
import { IoIosMail } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";

import {
  MotionDiv,
  MotionH1,
  MotionSection,
  contactVariants,
  formVariants,
} from "@/lib/motion";
import { Button } from "@/components/ui/button";

import NavButtons from "@/components/shared/nav-buttons";
import Socials from "@/components/section/contact/socials";
import ContactFrom from "@/components/section/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <MotionSection
      variants={contactVariants}
      initial="hide"
      animate="show"
      className="min-h-full flex flex-col gap-5 justify-evenly
    items-center py-6 px-8"
    >
      <MotionH1 variants={formVariants} className="main-heading">
        Take A <span className="text-primary">Coffee</span> &{" "}
        <span className="text-primary">Chat</span> With Me
      </MotionH1>
      <MotionDiv
        variants={formVariants}
        className="flex flex-col md:flex-row gap-4"
      >
        <Button
          size="contact"
          variant="contact"
          asChild
          className="min-w-[200px] sm:min-w-[360px] text-base sm:text-lg"
        >
          <a
            href="mailto:ya23122002@gmail.com"
            className="flex items-center hover:text-primary"
          >
            <IoIosMail className="text-4xl mobile:text-2xl mr-2 " />
            ya23122002@gmail.com
          </a>
        </Button>
        <Button
          size="contact"
          variant="contact"
          asChild
          className="min-w-[200px] sm:min-w-[360px] text-base sm:text-lg"
        >
          <a
            href="tel:+201069036485"
            className="flex items-center hover:text-primary"
          >
            <BsTelephoneFill className="text-4xl mobile:text-2xl mr-2" />
            (+20) 106-9036-485
          </a>
        </Button>
      </MotionDiv>
      <ContactFrom />
      <MotionDiv variants={formVariants}>
        <NavButtons firstLink="/skills" firstTitle="Skills" />
      </MotionDiv>
      <Socials />
    </MotionSection>
  );
}
