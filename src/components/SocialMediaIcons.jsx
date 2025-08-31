import React from "react";
import { Github, Linkedin, Instagram, Youtube, Globe } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { id: 1, name: "Github", icon: <Github size={20} />, url: "https://github.com/nitin01010" },
  { id: 2, name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/nitin0202/" },
  { id: 4, name: "YouTube", icon: <Youtube size={20} />, url: "https://www.youtube.com/@Nitindevtech" },
  { id: 5, name: "Portfolio", icon: <Globe size={20} />, url: "https://nitindev.tech/" },
];

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      {socialLinks.map((item, index) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            className="w-10 h-10 flex justify-center items-center rounded-full border border-gray-400 text-white hover:bg-gray-900 transition"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.icon}
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
