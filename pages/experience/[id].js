import { motion } from "framer-motion";

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

export default function Experience({ experience }) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="py-4 space-y-4 custom-container"
    >
      <h2 className={`inline-block text-3xl mt-6 font-bold text-black`}>
        {experience.name}
      </h2>
      <div className="flex flex-row flex-wrap -m-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className={`mx-2 my-0.5 text-${experience.color}-600 bg-${experience.color}-100 font-bold`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-600">{experience.description}</p>
    </motion.main>
  );
}

import admin from "helpers/firebaseAdmin";
import collections from "constants/collections";
import parseDoc from "helpers/parseDoc";

export async function getStaticPaths() {
  const db = admin.firestore();

  const experienceList = await db
    .collection(collections.EXPERIENCE)
    .listDocuments();

  const paths = experienceList.map((doc) => ({ params: { id: doc.id } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const db = admin.firestore();

  const experienceDoc = await db
    .collection(collections.EXPERIENCE)
    .doc(params.id)
    .get();

  const experience = parseDoc(experienceDoc);

  return { props: { experience } };
}
