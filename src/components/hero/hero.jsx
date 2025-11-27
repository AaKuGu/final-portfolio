"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants } from "./motion-variants";
import Intro from "./Intro";
import Tech_Stack from "./Tech_Stack";
import Footer from "./Footer";

const MotionButton = motion(Button);

export function Hero({ setActiveSection }) {
  return (
    <motion.section
      className="min-h-screen  flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-20 sm:pb-0 "
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(45, 154, 174, 0.2) 2px, transparent 0)`,
        backgroundSize: "20px 20px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl  w-fit "
      >
        <Intro />

        <Tech_Stack />

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start mb-6 sm:mb-8"
        >
          <MotionButton
            size="lg"
            className="gap-2 group w-full sm:w-auto bg-cyan-500 text-black hover:bg-cyan-500"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 group-hover:animate-bounce " />
              Download Resume
            </a>
          </MotionButton>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 group bg-transparent w-full sm:w-auto border-gray-700"
            onClick={() => {
              setActiveSection("projects");
              document
                .querySelector('[data-section="projects"]')
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="hidden sm:inline">
              View Projects & Testimonials
            </span>
            <span className="sm:hidden">View Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <Footer />
      </motion.div>
    </motion.section>
  );
}
