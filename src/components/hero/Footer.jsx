import React from "react";
import { motion } from "framer-motion";
import { itemVariants } from "./motion-variants";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
      <motion.div
        variants={itemVariants}
        className="flex gap-3 sm:gap-4 justify-center sm:justify-start"
      >
        {[
          { icon: Github, href: "https://github.com/AaKuGu", label: "GitHub" },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/aadarsh-gupta-09a514139/",
            label: "LinkedIn",
          },
          {
            icon: Mail,
            href: "mailto:prathamtogupta11@gmail.com",
            label: "Email",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 sm:p-3 rounded-lg bg-gray-950 hover:bg-cyan-500 hover:text-black transition-colors"
            aria-label={social.label}
          >
            <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Footer;
