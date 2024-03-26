import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[#28293E]">
      <section className="h-[100vh]  container mx-auto">
        {/* first for Nav */}
        <div>
          <Navbar></Navbar>
        </div>

        {/* second  */}

        <div className="flex justify-between px-6 py-28 flex-wrap">
          <div>
            <p className="text-red-400 mb-4">AYUSH JHA</p>
            <h1 className="text-7xl font-semibold mb-4 text-white">The Simple,</h1>
            <h1 className="text-7xl font-semibold mb-4 text-white">Clean Design</h1>
            <p className="text-white mb-4 w-[400px]">
              Agency provides a full service range including technical skills,
              design, business understanding.
            </p>
            <button className="border text-white py-2 px-3">SEE MY WORK</button>
          </div>

          <div>
            <img src="/images/pic.png" className="w-[350px]" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
