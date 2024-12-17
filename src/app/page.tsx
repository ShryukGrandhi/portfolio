"use client";
import { useTheme } from "next-themes";
import { Mail, Linkedin, Code, Brain, Award, School, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sticky Navbar */}
      <div className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Shryuk Grandhi</h2>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-800 dark:text-gray-100 flex items-center"
          >
            {theme === "dark" ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
            {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 dark:from-gray-700 dark:to-gray-900">
        <div className="container mx-auto px-6 py-20">
          <motion.h1
            className="text-4xl font-bold mb-4 text-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Shryuk Grandhi
          </motion.h1>
          <p className="text-2xl mb-6 text-gray-100">AI Researcher | Software Developer | Entrepreneur</p>
          <div className="flex space-x-4">
            <a
              href="mailto:shryukgrandhi@gmail.com"
              className="bg-white text-teal-800 px-6 py-3 rounded-lg flex items-center hover:bg-gray-100 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/shryuk-grandhi-52057531b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-800 px-6 py-3 rounded-lg flex items-center hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl">
          AI researcher and developer with experience in machine learning, robotics, and software development.
          Founded a successful tutoring company and contributed to published AI research. Passionate about using
          technology for positive social impact while maintaining academic excellence.
        </p>

        {/* Fun Facts */}
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Fun Facts About Me 🚀</h3>
          <div className="flex space-x-4">
            <div className="bg-teal-100 dark:bg-gray-700 px-4 py-2 rounded shadow">
              🛠️ Helped in my grandfather's steel shop in India.
            </div>
            <div className="bg-teal-100 dark:bg-gray-700 px-4 py-2 rounded shadow">
              🪩 Hosted a Dandiya Night with 150+ attendees.
            </div>
            <div className="bg-teal-100 dark:bg-gray-700 px-4 py-2 rounded shadow">
              📈 Built a stock predictor powered by AI.
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-16">
        <motion.h2
          className="text-3xl font-bold mb-8 flex items-center text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Code className="mr-2" />
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Driver Attention Detection</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Developed 95% accurate distraction alert algorithms during the Inspirit AI Program.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">Python</span>
              <span className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full">AI</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        <p>© {new Date().getFullYear()} Shryuk Grandhi. All Rights Reserved.</p>
      </div>
    </div>
  );
}
