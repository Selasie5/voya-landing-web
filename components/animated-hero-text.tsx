"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 3.35,
      staggerChildren: 0.18,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function AnimatedHeroText() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={containerVariants}
      initial={shouldReduceMotion ? false : "hidden"}
      animate="visible"
    >
      <motion.h1
        variants={textVariants}
        className="font-season-mix max-w-4xl text-balance text-3xl font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Adventure begins with a plan and people worth traveling with
      </motion.h1>

      <motion.p
        variants={textVariants}
        className="font-season-sans mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base md:mt-6"
      >
        From daydream to departure, Voya builds the itinerary, works out the
        budget, and makes splitting the cost painless
      </motion.p>
    </motion.div>
  );
}
