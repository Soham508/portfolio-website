"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import developerPic from "./../../../public/developer.png";

const About = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div
          onMouseMove={(e) => {
            setX(e.pageX / 200);
            setY(e.pageY / 280);
            console.log(x, y);
          }}
          className={`w-0.8 h-auto -translate-x-[15px] md:h-max md:translate-y-20 m-4 pt-2 pb-2 shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300 ml-10`}
        >
          <Image src={developerPic} height={110} width={350} alt="/" id="IMG" />
        </div>
      </div>
    </div>
  );
};

export default About;
