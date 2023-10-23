

import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I&#39;m{" "}
            <span className="py-2 bg-gradient-to-r from-blue-600 to-indigo-400 inline-block text-transparent bg-clip-text">
              Soham{" "}
            </span>
          </h1>
          <h1 className="py-2 text-gray-700">I am a fullstack developer </h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on developing full stack applications with modern
            interface and cutting edge modern backend technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {
      //  <div class="flex  top-0 justify-center -space-x-14">
      //    <div class="mix-blend-multiply rounded-full h-28 w-80 flex items-center justify-center bg-blue-400/70 ...">
      //      {" "}
      //      <span className="font-semibold text-xl text-center font-serif text-blue-500 ">
      //        {" "}
      //        Web developer
      //      </span>{" "}
      //    </div>
      //    <div class="mix-blend-multiply rounded-full h-28 w-80 flex items-center justify-center bg-yellow-400/70 ...">
      //      <span className="font-semibold text-xl text-center font-serif text-yellow-500 ">
      //        {" "}
      //        Web developer
      //      </span>
      //    </div>
      //    <div class="mix-blend-multiply rounded-full h-28 w-80 flex items-center justify-center bg-red-400/70 ...">
      //      {" "}
      //      <span className="font-semibold text-xl text-center font-serif text-red-500 ">
      //        {" "}
      //        Web developer
      //      </span>
      //    </div>
      //    <div class="mix-blend-multiply rounded-full h-28 w-80 flex items-center justify-center bg-pink-400/70 ...">
      //      <span className="font-semibold text-xl text-center font-serif text-pink-500 ">
      //        {" "}
      //        Web developer
      //      </span>
      //    </div>
      //    <div class="mix-blend-multiply rounded-full h-28 w-80 flex items-center justify-center bg-violet-400/70 ...">
      //      <span className="font-semibold text-xl text-center font-serif text-violet-500 ">
      //        {" "}
      //        Web developer
      //      </span>
      //    </div>
      //  </div>
      }
    </div>
  );
};

export default Main;