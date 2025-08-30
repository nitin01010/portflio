import * as motion from "motion/react-client"
import { useRef } from "react"
import { Dot } from "lucide-react"

const Profile = () => {
  const constraintsRef = useRef(null)

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10">
      {/* 👇 Parent constraint wrapper */}
      <motion.div
        ref={constraintsRef}
        className="relative flex items-center justify-center w-[150px] md:w-[200px] h-[150px] md:h-[200px]"
      >
        <motion.img
          drag
          dragConstraints={constraintsRef} // ✅ restricts drag within this box
          dragElastic={0.2}
          src="https://avatars.githubusercontent.com/u/143220439?s=400&u=834617af58a4d2ca52a950a265593b91969a071f&v=4"
          className="border w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full object-cover cursor-grab"
          whileDrag={{ scale: 1.1 }} // 👌 adds smooth feedback
        />
      </motion.div>

      <div className="w-full md:w-[70%] font-bold text-center md:text-left">
        <h2 className="text-3xl py-5 text-white">
          Hey, I'm Nitin. <span className="text-gray-500"> I'm a Full Stack </span>
        </h2>
        <div className="flex flex-col sm:flex-row font-bold items-center justify-center md:justify-start gap-4">
          <p className="text-2xl text-gray-500">Software Developer.</p>
          <span className="flex items-center bg-green-600/20 h-[32px] px-4 rounded-full">
            <Dot className="text-green-600/20" />
            <p className="text-lg text-green-400">Open to work</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Profile