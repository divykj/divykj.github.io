import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";

import shuffle from "../helpers/shuffle";
import { navLinks } from "constants/routing";
import { toggleCrispChat } from "helpers/crisp";
import { fadeInDownMotion, fadeInMotion } from "constants/motion";
import Link from "next/link";
import WIP from "components/WIP";

const pageVariants = fadeInDownMotion({
  offset: 20,
  duration: 0.5,
  initialDelay: 0.75,
  exitDuration: 0.15,
  fadeExit: true,
});
const anchorVariants = fadeInMotion({ duration: 0.15, initialDelay: 1 });

export default function Home() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="relative"
    >
      <div className="flex min-h-screen">
        <div className="flex flex-col items-center self-center w-full mt-6 mb-32 md:flex-row custom-container">
          <img
            src="/assets/avatar.svg"
            className="mt-16 md:mt-0 md:mr-12 max-h-64"
          />
          <div className="z-10 items-stretch flex-1 mt-12 space-y-12 text-center md:mt-0 md:text-left">
            <h4 className="text-3xl font-bold leading-tight text-gray-100">
              hi, i am<span className="block md:inline"> </span>
              <span className="text-indigo-200 bg-black bg-opacity-20">
                divy jain
              </span>
            </h4>
            <h2 className="text-5xl font-bold leading-tight text-gray-100">
              i am a<span className="block lg:inline"> </span>
              <ReactTypingEffect
                speed={250}
                eraseSpeed={100}
                typingDelay={2500}
                eraseDelay={1500}
                text={["developer", "designer", "learner"]}
                cursor="_"
                className="text-indigo-200 bg-black bg-opacity-20"
              />
            </h2>
            <div className="flex-col hidden mt-12 space-y-2 md:flex md:flex-row md:space-x-8 md:space-y-0">
              {navLinks.map((link, i) => (
                <Link passHref href={link} key={`nav/${link}`}>
                  <motion.a
                    initial="initial"
                    animate="animate"
                    custom={i}
                    variants={anchorVariants}
                    className={"primary-link text-lg"}
                  >
                    {link}
                  </motion.a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WIP />
    </motion.main>
  );
}
