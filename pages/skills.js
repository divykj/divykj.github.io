import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";

import Picker from "components/Picker";
import Rating from "components/Rating";
import Popover from "components/Popover";
import usePicker from "helpers/usePicker";
import { colorSchemes } from "constants/colors";
import { fadeInDownMotion, fadeInMotion } from "constants/motion";

const pageVariants = fadeInDownMotion({
  offset: 20,
  duration: 0.5,
  initialDelay: 0.75,
  exitDuration: 0.15,
  fadeExit: true,
});
const skillVariants = fadeInMotion({
  duration: 0.15,
  initialDelay: 1.25,
  animateInDelay: 0.1,
});

const skillSortParams = {
  INTEREST: {
    key: "interest",
    displayName: "interest",
  },
  PROFICIENCY: {
    key: "proficiency",
    displayName: "proficiency",
  },
};

const skillSortDropdownPlaceholder = (value) => (
  <>
    sort by: <b>{value.displayName}</b>
  </>
);

export default function Skills({ skills }) {
  const sortParam = usePicker(skillSortParams.PROFICIENCY);
  const sortedSkills = useMemo(
    () =>
      skills.sort((a, b) => b[sortParam.value.key] - a[sortParam.value.key]),
    [skills, sortParam.value]
  );

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="py-4 custom-container"
    >
      <div className="space-y-4">
        <div className="flex flex-row flex-wrap mt-6">
          <h2 className="flex-shrink-0 page-title">skills</h2>
          <Picker
            className="w-full mt-4 ml-auto md:w-auto md:mt-0"
            items={Object.values(skillSortParams)}
            renderPlaceholder={skillSortDropdownPlaceholder}
            {...sortParam.bind}
          />
        </div>
        <motion.div layout className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {sortedSkills.map((skill, index) => (
            <Link key={skill.id} href={`/skills/${skill.id}`}>
              <motion.div
                layoutId={skill.id}
                variants={skillVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={index}
                className="flex flex-col p-6 space-y-2 interactive-surface"
              >
                <div className="flex flex-row items-center justify-between space-x-4">
                  <h5 className={`text-xl font-bold`}>{skill.name}</h5>
                  <div className="space-x-2">
                    <Popover
                      placement="bottom"
                      content="interest"
                      colorScheme="red"
                    >
                      <Rating variant="heart" rating={skill.interest} />
                    </Popover>
                    <Popover
                      placement="bottom"
                      content="proficiency"
                      colorScheme="yellow"
                    >
                      <Rating variant="star" rating={skill.proficiency} />
                    </Popover>
                  </div>
                </div>
                <div className="flex flex-row flex-wrap -mx-1 -mb-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className={classNames(
                        "m-1 py-1 px-2 bg-black bg-opacity-20 text-sm font-bold",
                        colorSchemes[skill.color]
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="flex-1 text-justify text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}

import admin from "helpers/firebaseAdmin";
import collections from "constants/collections";
import parseDoc from "helpers/parseDoc";
import classNames from "classnames";

export async function getStaticProps() {
  const db = admin.firestore();

  const skillsQuery = await db.collection(collections.SKILLS).get();
  const skills = skillsQuery.docs.map(parseDoc);

  return { props: { skills } };
}
