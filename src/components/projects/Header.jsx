import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 sm:mb-12 md:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
        Featured <span className="text-cyan-500">Work</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
        Results-driven projects with measurable impact
      </p>
    </motion.div>
  );
};

export default Header;
