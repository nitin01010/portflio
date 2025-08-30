import React from "react";

const Experience = () => {
  return (
    <div id="workExprence" className="w-full mt-10 p-2 m-auto">
      <h2 className="text-3xl font-bold text-white border-b-2 border-gray-700 pb-2">
        Work Experience
      </h2>

      {/* NeetSupport */}
      <div className="flex flex-col sm:flex-row gap-1 text-white p-2 mt-8">
        <div className="w-full sm:w-auto">
          <p className="text-lg text-gray-400 font-semibold">2024 - 2025</p>
        </div>
        <div className="sm:ml-10 -mt-2">
          <h3 className="text-2xl font-semibold">Frontend Developer (Contract)</h3>
          <p className="text-gray-400 py-2">NeetSupport.com • Full-time</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Built complete frontend with React.js focusing on responsive UI.</li>
            <li>Developed reusable components & integrated APIs.</li>
            <li>Implemented OTP verification, real-time chat, and popup alerts.</li>
            <li>Collaborated with backend team using Git for version control.</li>
          </ul>
        </div>
      </div>

      {/* iQuanta */}
      <div className="flex flex-col sm:flex-row gap-1 text-white p-2 mt-8">
        <div className="w-full sm:w-auto">
          <p className="text-lg text-gray-400 font-semibold">2023 - 2024</p>
        </div>
        <div className="sm:ml-10 -mt-2">
          <h3 className="text-2xl font-semibold">MERN Stack Developer</h3>
          <p className="text-gray-400 py-2">iQuanta.in • Full-time</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Developed education platform frontend for 4L+ students.</li>
            <li>Worked with React, Redux, Next.js, TailwindCSS, MUI & Chakra UI.</li>
            <li>Built reusable components, integrated APIs & fixed UI bugs.</li>
            <li>Handled Git conflicts & collaborated with team for smooth delivery.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
