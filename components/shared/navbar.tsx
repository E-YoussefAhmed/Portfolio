import Link from "next/link";

import { links } from "@/lib/constants";
import { MotionHeader, navbarVariants } from "@/lib/motion";

import NavLink from "@/components/shared/nav-link";
import MobileNav from "@/components/shared/mobile-nav";
import ThemeToggle from "@/components/shared/theme-toggle";

const Navbar = () => {
  return (
    <MotionHeader
      variants={navbarVariants}
      initial="hide"
      animate="show"
      className="sticky top-0 z-10 bg-background flex justify-between items-center
    py-4 px-6 shadow-md dark:shadow-primary/20"
    >
      <div className="w-20 lg:w-32">
        <Link
          href="/"
          className="sm:text-5xl text-4xl text-primary font-bold
          flex items-center cursor-pointer"
        >
          JOE
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex">
          {links.map((link) => (
            <NavLink key={link.title} {...link} />
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="md:hidden flex items-center">
        <MobileNav />
      </div>
    </MotionHeader>
  );
};

export default Navbar;
