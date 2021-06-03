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

export default function Skill({ skill }) {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="custom-container py-4 space-y-4"
    >
      <h2 className="page-title mt-6">{skill.name}</h2>
      <div className="flex flex-row flex-wrap -m-2">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className={`mx-2 my-0.5 text-${skill.color}-600 bg-${skill.color}-50 font-bold`}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-600">{skill.description}</p>
    </motion.main>
  );
}

import admin from "helpers/firebaseAdmin";
import collections from "constants/collections";

export async function getStaticPaths() {
  const db = admin.firestore();

  const skillsQuery = await db.collection(collections.SKILLS).listDocuments();
  const paths = skillsQuery.map((doc) => ({ params: { id: doc.id } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const db = admin.firestore();

  const skillDoc = await db.collection(collections.SKILLS).doc(params.id).get();
  const skill = { id: skillDoc.id, ...skillDoc.data() };

  return { props: { skill } };
}
