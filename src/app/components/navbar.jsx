"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "./../../../public/logo.png";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-lg z-[100]">
      <div className="flex items-center w-full h-full  px-2 2xl:px-16 max-md:justify-between ">
        <button className="">
          <Image
            src={logo}
            alt="/"
            height={50}
            width={70}
            className="opacity-80 shadow-2lx rounded-lg hover:scale-110 duration-500 cursor-pointer"
          />
        </button>
        <div className="md:flex">
          <ul className="md:flex md:top-2 md:gap-x-28 md:right-[35%] md:fixed  max-md:hidden">
            <Link href="#home">
              <li className=" m-3 uppercase fixed text-sm hover:scale-105 duration-500 hover:bg-indigo-100 p-3 bg-indigo-500 text-slate-200  hover:text-indigo-500 hover:border-2 hover:border-indigo-500  rounded-lg">
                Home
              </li>
            </Link>

            <Link href="#about">
              <li className=" m-3 uppercase fixed text-sm hover:scale-105 duration-500 bg-indigo-500 p-3 text-slate-200 hover:bg-indigo-100 hover:text-indigo-500 hover:border-2 hover:border-indigo-500 rounded-lg">
                About
              </li>
            </Link>

            <Link href="#skills">
              <li className=" m-3 uppercase fixed text-sm hover:scale-105 duration-500 bg-indigo-500 p-3 hover:bg-indigo-100 text-slate-200 hover:text-indigo-500 hover:border-2 hover:border-indigo-500 rounded-lg">
                Skills
              </li>
            </Link>

            <Link href="#projects">
              <li className=" m-3 uppercase fixed text-sm hover:scale-105 duration-500 hover:bg-indigo-100 bg-indigo-500 p-3 text-slate-200 hover:text-indigo-500 hover:border-2 hover:border-indigo-500 rounded-lg">
                Projects
              </li>
            </Link>

            <Link href="#contact">
              <li className=" m-3 ml-10 uppercase fixed text-sm hover:scale-105 duration-500 hover:bg-indigo-100 p-3 bg-indigo-500 text-slate-200  hover:text-indigo-500 hover:border-2 hover:border-indigo-500 rounded-lg">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer shadow-3xl rounded-lg bg-slate-300 p-3"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/*For mobile devices */}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  className="rounded-xl"
                  src="/../public/assets/logo.png"
                  width="87"
                  height="35"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href="/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
