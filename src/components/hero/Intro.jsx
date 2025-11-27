import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariants } from "./motion-variants";

const Intro = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12">
      <motion.div variants={itemVariants} className="relative flex-shrink-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-4 ring-cyan-500/40">
          <Image
            src="/me2.jpg"
            alt="Profile"
            width={180}
            height={180}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>

      <div className="flex-1 text-center sm:text-left">
        <motion.div variants={itemVariants} className="mb-3">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-cyan-800/50 text-cyan-500 text-xs sm:text-sm font-medium border border-cyan-300">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3"
        >
          Full-Stack Developer
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-2 sm:gap-3 text-sm sm:text-base text-gray-500 mb-3 sm:mb-4 justify-center sm:justify-start"
        >
          <span>23 years old</span>
          <span>•</span>
          <span>LPU 2024 Graduate</span>
          <span className="hidden xs:inline">•</span>
          <span className="hidden xs:inline">7.1 CGPA</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-white/90 font-medium mb-1 sm:mb-2"
        >
          Full 1 Year Experience with Real Clients
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4"
        >
          Waterpark Owner • Wholesaler Business • Freelance Projects
        </motion.p>
      </div>
    </div>
  );
};

export default Intro;
