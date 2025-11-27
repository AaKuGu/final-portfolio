import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-10 sm:mt-12 md:mt-16 text-center"
    >
      <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">
        <p className="text-xs sm:text-sm md:text-base text-cyan-500 font-medium">
          ⭐ 5+ Freelancing Projects • On Time Delivery • 100% Satisfaction
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
