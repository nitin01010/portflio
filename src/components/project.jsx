import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, SquareArrowOutUpRight, Youtube } from "lucide-react";

const Project = () => {
  return (
    <motion.div
      id="project"
      className="w-full mt-10 p-2 m-auto relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        Projects
      </h2>

      {/* Floating Icon */}
      <motion.div
        className="absolute flex items-center justify-center bg-gray-700 cursor-pointer -right-4 md:-right-14 top-10 w-[40px] h-[40px] rounded-full z-10"
        whileHover={{ scale: 1.1, rotate: 15 }}
      >
        <SquareArrowOutUpRight size={18} color="white" />
      </motion.div>

      {/* Project Card */}
      <motion.div
        className="w-full border rounded-md mt-5 text-gray-600 p-4 shadow-md relative z-0"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Thumbnail */}
        <img
          className="w-full rounded-md"
          src="https://i.ytimg.com/vi/TIu_KrdWO1M/maxresdefault.jpg"
          alt="YouTube Clone Project"
        />

        {/* Project Title */}
        <h4 className="text-white mt-5 text-lg font-semibold">YouTube Clone</h4>

        {/* Project Points */}
        <ul className="list-disc list-inside text-gray-400 mt-3 text-base space-y-2">
          <li>Built with MERN stack featuring full CRUD functionality</li>
          <li>Video upload, playback, and fully responsive UI</li>
          <li>Includes authentication and real-time commenting</li>
          <li>Completed during an internship project (Internshala)</li>
        </ul>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row font-semibold justify-between gap-4">
          <motion.a
            href="https://youtubekajudva.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe size={16} /> LIVE DEMO
          </motion.a>

          <motion.a
            href="https://github.com/nitin01010"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} /> SOURCE CODE
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@Nitindevtech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-[264px] h-[36px] border border-gray-400 hover:bg-gray-900 cursor-pointer flex gap-2 justify-center items-center text-white rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Youtube size={16} /> WATCH VIDEO
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
