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
        Client <span className="text-cyan-500">Testimonials</span>
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-400">
        What people say about working with me
      </p>
    </motion.div>
  );
};

export default Header;
