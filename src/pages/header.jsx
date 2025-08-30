
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, useScroll } from "framer-motion"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <div className="relative">
      {/* Scroll progress bar */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#ff0088",
          zIndex: 50,
        }}
      />

      {/* Header Bar */}
      <div className="flex items-center justify-between p-2 text-white w-full m-auto h-[70px] md:w-[60%] relative z-40">
        <h1 className="text-2xl font-bold text-gray-400 px-4">Nitindev.tech</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            <a href="#workExperience">
              <li className="cursor-pointer hover:text-white text-gray-400">
                Work Experience
              </li>
            </a>
            <a href="#project">
              <li className="cursor-pointer hover:text-white text-gray-400">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="cursor-pointer hover:text-white text-gray-400">
                Contact
              </li>
            </a>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="block md:hidden mr-2 mt-1 p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Animated Mobile Sidebar */}
      <motion.nav
        ref={containerRef}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        className="fixed inset-0 z-30 md:hidden"
      >
        {/* background animation */}
        <motion.div
          className="absolute inset-0 bg-black"
          variants={sidebarVariants}
        />

        {/* content over background */}
        <div className="relative z-50">
          <motion.ul
            className="list-none p-8 mt-20"
            variants={navVariants}
          >
            {[
              { href: "#workExperience", label: "Work Experience" },
              { href: "#project", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mb-6 cursor-pointer text-2xl font-bold text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <a href={item.href}>{item.label}</a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>
    </div>
  )
}

/* ---------- Variants ---------- */
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
}

/* ---------- util hook ---------- */
function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function measure() {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [ref])

  return dimensions
}
