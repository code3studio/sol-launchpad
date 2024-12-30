import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link"; // Import Link from next for navigation

const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-b from-background to-slate-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-12 text-2xl font-bold text-center text-teal-400 glitch-text sm:text-3xl">
          Connect with Us
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0 }}
                >
                  <Link
                    href="https://github.com/SolGPTAI/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-teal-400 hover:text-teal-600"
                  >
                    GitHub
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link
                    href="https://solgptai.gitbook.io/solgptai-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-teal-400 hover:text-teal-600"
                  >
                    GitBook
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link
                    href="https://x.com/AISolGPT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-teal-400 hover:text-teal-600"
                  >
                    Twitter
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    href="https://t.me/solgptai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-teal-400 hover:text-teal-600"
                  >
                    Telegram
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="bg-slate-800 py-4 mt-12 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} SolGPTAI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
