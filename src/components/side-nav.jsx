"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, MessageSquare, Mail } from "lucide-react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "projects", icon: Briefcase, label: "Work" },
  { id: "testimonials", icon: MessageSquare, label: "Testimonials" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function SideNav({ activeSection, setActiveSection }) {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-950 fixed sm:left-0 left-0 bottom-0 sm:top-0 z-50 sm:h-screen h-16 w-full sm:w-16 md:w-20  border-t sm:border-t-0 sm:border-r border-gray-800 flex sm:flex-col flex-row items-center justify-around sm:justify-start sm:py-8 py-0 sm:gap-8 gap-0"
    >
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <motion.button
            key={item.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onClick={() => setActiveSection(item.id)}
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`p-2 sm:p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-cyan-500 text-black"
                  : "bg-gray-900 text-gray-600 hover:text-gray-300"
              }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="hidden sm:block absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-card border border-border px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none"
            >
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          </motion.button>
        );
      })}

      <div className="hidden sm:block mt-auto h-1 w-1 rounded-full bg-primary animate-pulse" />
    </motion.nav>
  );
}
