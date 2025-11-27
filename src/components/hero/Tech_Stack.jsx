// import React from "react";
// import { motion } from "framer-motion";

// const Tech_Stack = () => {
//   return (
//     <motion.div className="mb-8 sm:mb-12">
//       <h2 className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 uppercase tracking-wider text-center sm:text-left">
//         Tech Stack
//       </h2>
//       <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
//         {[
//           "MongoDB",
//           "Express.js",
//           "React",
//           "Node.js",
//           "Next.js",
//           "Redux",
//           "Zustand",
//           "Framer Motion",
//           "Tailwind CSS",
//         ].map((skill, index) => (
//           <motion.span
//             key={skill}
//             custom={index}
//             whileHover={{ scale: 1.05, y: -2 }}
//             className="relative px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900 rounded-lg text-xs sm:text-sm font-medium border border-gray-600 hover:border-gray-600/50 transition-colors"
//           >
//             <span
//               className={`absolute inset-x-0 bottom-[-1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto`}
//             ></span>
//             {skill}
//           </motion.span>
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default Tech_Stack;

import React from "react";
import { motion } from "framer-motion";

// Container variant for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // delay between each child animation
    },
  },
};

// Item variant for each skill badge
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Tech_Stack = () => {
  return (
    <motion.div
      className="mb-8 sm:mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 uppercase tracking-wider text-center sm:text-left">
        Tech Stack
      </h2>
      <motion.div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {[
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "Next.js",
          "Redux",
          "Zustand",
          "Framer Motion",
          "Tailwind CSS",
        ].map((skill, index) => (
          <motion.span
            key={skill}
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -2 }}
            className="relative px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-900 rounded-lg text-xs sm:text-sm font-medium border border-gray-600 hover:border-gray-600/50 transition-colors"
          >
            <span
              className={`absolute inset-x-0 bottom-[-1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[2px] w-3/4 mx-auto`}
            ></span>
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tech_Stack;
