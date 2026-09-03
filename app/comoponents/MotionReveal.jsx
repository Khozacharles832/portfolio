"use client";

import { motion, useReducedMotion } from "motion/react";

const MotionReveal = ({ children, className = "", delay = 0, y = 24 }) => {
  const shouldReduceMotion = useReducedMotion();
  const hidden = shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y };
  const visible = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default MotionReveal;
