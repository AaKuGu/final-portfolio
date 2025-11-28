"use client";

import { SideNav } from "@/components/side-nav";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/projects";
import { Testimonials } from "@/components/testimonials/testimonials";
import { Contact } from "@/components/contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-black text-white/90">
      <SideNav
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="ml-0 md:ml-20 py-2 ">
        <AnimatePresence mode="wait">
          {activeSection === "hero" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero setActiveSection={setActiveSection} />
            </motion.div>
          )}

          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Projects setActiveSection={setActiveSection} />
            </motion.div>
          )}

          {activeSection === "testimonials" && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Testimonials />
            </motion.div>
          )}

          {activeSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
