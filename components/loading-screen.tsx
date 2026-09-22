"use client";

import { useEffect, useState } from "react";
import { Island } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";

type LoaderPhase = "visible" | "exiting" | "hidden";

export function LoadingScreen() {
  const [phase, setPhase] = useState<LoaderPhase>("visible");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const holdDuration = shouldReduceMotion ? 500 : 2400;
    const exitDuration = shouldReduceMotion ? 120 : 1120;
    const exitTimeout = window.setTimeout(
      () => setPhase("exiting"),
      holdDuration,
    );
    const hideTimeout = window.setTimeout(
      () => setPhase("hidden"),
      holdDuration + exitDuration,
    );

    return () => {
      window.clearTimeout(exitTimeout);
      window.clearTimeout(hideTimeout);
    };
  }, [shouldReduceMotion]);

  if (phase === "hidden") return null;

  const isExiting = phase === "exiting";
  const panelTarget = isExiting && !shouldReduceMotion ? "-100%" : "0%";
  const wipeEase = [0.76, 0, 0.24, 1] as const;

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden"
      role="status"
      aria-live="polite"
      animate={{ opacity: isExiting && shouldReduceMotion ? 0 : 1 }}
      transition={{ duration: shouldReduceMotion ? 0.12 : 0 }}
    >
      <motion.div
        className="bg-loader-peach absolute inset-0 z-0 will-change-transform"
        initial={false}
        animate={{ x: panelTarget }}
        transition={{ duration: 0.82, delay: 0.24, ease: wipeEase }}
        aria-hidden="true"
      />
      <motion.div
        className="bg-burnt-orange absolute inset-0 z-10 will-change-transform"
        initial={false}
        animate={{ x: panelTarget }}
        transition={{ duration: 0.82, delay: 0.12, ease: wipeEase }}
        aria-hidden="true"
      />
      <motion.div
        className="mesh-gradient absolute inset-0 z-20 will-change-transform"
        initial={false}
        animate={{ x: panelTarget }}
        transition={{ duration: 0.82, ease: wipeEase }}
        aria-hidden="true"
      />

      <span className="sr-only">Loading Voya</span>

      <motion.div
        className="relative z-30 flex items-center text-white will-change-transform"
        initial={false}
        animate={{ x: panelTarget }}
        transition={{ duration: 0.82, ease: wipeEase }}
      >
        <motion.span
          className="relative z-10 block"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, scale: 0.25, filter: "blur(4px)" }
          }
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          aria-hidden="true"
        >
          <Island size={58} weight="fill" />
        </motion.span>

        <span className="relative z-0 -ml-9 overflow-hidden pl-11">
          <motion.span
            className="font-season-mix block text-5xl font-medium tracking-[-0.04em]"
            initial={shouldReduceMotion ? false : { x: "-110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              x: {
                delay: shouldReduceMotion ? 0 : 0.42,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                delay: shouldReduceMotion ? 0 : 0.5,
                duration: shouldReduceMotion ? 0 : 0.08,
                ease: "easeOut",
              },
            }}
          >
            voya
          </motion.span>
        </span>
      </motion.div>
    </motion.div>
  );
}
