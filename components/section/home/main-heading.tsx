"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

const MainHeading = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "Freelancer"],
    loop: 0,
    delaySpeed: 2000,
  });

  return (
    <h1 className="main-heading">
      <p className="mb-2">Hello, I am Youssef 👋,</p>
      <span className="text-primary">
        <span className="dark:text-white">I am a </span>
        {text}
      </span>
      <Cursor cursorColor="#6d28d9" />
    </h1>
  );
};

export default MainHeading;
