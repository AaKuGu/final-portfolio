"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "prathamtogupta11@gmail.com",
    action: "Send Email",
    href: "mailto:prathamtogupta11@gmail.com",
  },
  {
    icon: MessageSquare,
    title: "LinkedIn",
    description: "Connect professionally",
    action: "Message on LinkedIn",
    href: "https://www.linkedin.com/in/aadarsh-gupta-09a514139",
  },
  {
    icon: Calendar,
    title: "Schedule Call",
    description: "30-minute intro call",
    action: "Book a Meeting",
    href: "https://calendly.com/prathamtogupta11/new-meeting",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-24 sm:pb-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Let's <span className="text-cyan-500">Connect</span>
          </h2>
          <p className="text-gray-500 sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto px-4">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group"
              >
                <div className="bg-gray-900 border border-cyan-500/50 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 text-center h-full hover:border-primary/50 transition-colors">
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cyan-500/10 text-cyan-500 mb-3 sm:mb-4 group-hover:bg-cyan-500 group-hover:text-black transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                  </motion.div>

                  <h3 className="font-bold text-lg sm:text-xl mb-1.5 sm:mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 break-words">
                    {method.description}
                  </p>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full bg-transparent text-sm sm:text-base"
                  >
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.action}
                    </a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gray-900">
            <p className="text-xs sm:text-sm text-gray-500">
              Average response time:{" "}
              <span className="text-cyan-500 font-bold">2-4 hours</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
