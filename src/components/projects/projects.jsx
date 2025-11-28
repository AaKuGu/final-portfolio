"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "./constant";
import { containerVariants, itemVariants } from "./motion-variants";
import Header from "./Header";

export function Projects({ setActiveSection }) {
  return (
    <section
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #022937ff, #000000ff)`,
      }}
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-24 sm:pb-20"
    >
      <Header />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-6 sm:gap-8 md:gap-12"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="group"
          >
            <div className="border border-gray-700 rounded-xl sm:rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-48 sm:h-56 md:h-full overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-50" />
                </div>

                <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>
                    <motion.div variants={itemVariants} className="mb-3">
                      <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-cyan-800/50 text-cyan-500 text-xs sm:text-sm font-medium border border-cyan-300">
                        As {project.type}
                      </span>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-[5px] md:mb-2">
                      {project.testimonialUrl && (
                        <Button
                          asChild
                          className="flex-1 text-sm sm:text-base"
                          variant="secondary"
                          onClick={() => setActiveSection("testimonials")}
                        >
                          <div className={`cursor-pointer`}>
                            <ExternalLink className="mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Testimonial
                          </div>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          asChild
                          className="flex-1 text-sm sm:text-base border-white border-[1px]"
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Demo Video
                          </a>
                        </Button>
                      )}
                      {project.websiteUrl && (
                        <Button
                          asChild
                          className="flex-1 text-sm sm:text-base bg-cyan-500 text-black border hover:bg-cyan-500"
                          // variant="outline"
                        >
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Live Link
                          </a>
                        </Button>
                      )}
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gray-900 text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="text-center p-2 sm:p-3 bg-gray-900 rounded-lg"
                        >
                          <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">
                            Impact
                          </p>
                          <p className="font-bold text-[11px] sm:text-sm leading-tight">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
