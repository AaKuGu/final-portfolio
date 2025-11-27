"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "./constant";
import { containerVariants, itemVariants } from "./motion-variants";
import Header from "./Header";
import Footer from "./Footer";

export function Testimonials() {
  return (
    <section
      style={{
        backgroundImage: `radial-gradient(circle at 100% 100%, #022937ff, #000000ff)`,
      }}
      className="min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-24 sm:pb-20"
    >
      <Header />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 "
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group"
          >
            <motion.div
              className="absolute -top-4 -right-4 text-primary/10"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 12 }}
            >
              <Quote className="w-32 h-32" />
            </motion.div>
            <div className="bg-gray-900 border border-gray-700 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 h-full hover:border-gray-700/50 transition-colors relative overflow-hidden">
              <motion.div
                className="absolute -top-4 -right-4 text-cyan-500/10"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 12 }}
              >
                <Quote className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32" />
              </motion.div>

              <div className="relative z-10">
                <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 text-white/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-cyan-500 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base text-white truncate">
                      {testimonial.author}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {testimonial.role}
                    </p>
                    <p className="text-[10px] sm:text-xs text-cyan-500 truncate">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() =>
                    window.open(testimonial.videoUrl || "#", "_blank")
                  }
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  View Video Testimonial
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </section>
  );
}
