"use client";
import React from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import Link from "next/link";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Card = ({ img, title, description, id, stack }) => {
  return (
    <Tilt
      className="hidden md:flex md:items-center md:justify-center"
      options={defaultOptions}
      style={{ height: 770, width: 530 }}
    >
      <div className="h-[85%] p-1 w-[85%] shadow-2xl shadow-indigo-500/40 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-rose-500/40 rounded-lg ">
        <div className="h-full flex flex-col items-center w-full bg-slate-300">
          <div className="w-full h-[40%] flex  items-center justify-center">
            <Image
              src={img}
              width={300}
              className="w-full h-full rounded-sm  translate-y-[37x] "
              height={200}
            />
          </div>
          <div className="w-[20%] h-[3px] rounded-full mt-3 bg-gradient-to-r from-indigo-500/70 via-purple-500/50 to-rose-500/40 " />
          <h2 className="text-2xl maxh-10 bg-gradient-to-r mt-2 font-bold text-center text-transparent from-violet-500 to-rose-400 bg-clip-text">
            {title}
          </h2>
          <p className="ml-4 text-md maxh-20 b mt-6 text-left text-gray-600">
            {description}
          </p>
          <div className="flex flex-col mt-2 items-center ">
            <h2 className="text-lg mb-2 text-gray-700">Stack</h2>
            <div className="flex justify-between items-center gap-2">
              {stack.map((s) => (
                <span
                  id={id}
                  className="p-2 hover:bg-rose-400/40 cursor-pointer rounded-xl"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex justify-between gap-24 mt-10 items-center">
              <Link
                href={""}
                className="p-2 pl-4 pr-4 hover:bg-indigo-500/60 brightness-110 bg-indigo-500/90 shadow-lg shadow-indigo-500/50 text-slate-100 rounded-xl"
              >
                Code
              </Link>
              <Link
                href={""}
                className="p-2 pl-4 pr-4 hover:bg-indigo-500/60 brightness-110 bg-indigo-500/90 shadow-lg shadow-indigo-500/50 text-slate-100 rounded-xl"
              >
                Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <>
      <div id="projects" className="w-full">
        <div className="w-full h-16">
          <h1 className="text-center bg-gradient-to-r from-blue-600 to-indigo-300 h-full text-transparent text-4xl font-sans font-bold bg-clip-text text-g">
            
            Projects
          </h1>
        </div>
        <div className="w-full mt-10 md:h-screen">
          <div className="grid grid-cols-1 gap-10 md:ml-[5%] items-center md:grid-cols-3">
          
            <Card
              img={"/../public/assets/Estore.jpg"}
              id={1}
              stack={["MongoDb", "React", "NodeJs", "Express"]}
              title={"Ecomerce app with admin panel"}
              description={
                "This is an ecommcerce platform project with admin panel, fully customizable content with features like payment gateway, wishlist, search bar, recommendations etc."
              }
            />

            <Card
              img={"/../public/assets/Estore.jpg"}
              id={2}
              stack={["MongoDb", "React", "NodeJs", "Express"]}
              title={"2nd"}
              description={
                "This is an ecommcerce platform project with admin panel, fully customizable content with features like payment gateway, wishlist, search bar, recommendations etc."
              }
            />

            
           <Card
              img={"/../public/assets/Estore.jpg"}
              id={2}
              stack={["MongoDb", "React", "NodeJs", "Express"]}
              title={"2nd"}
              description={
                "This is an ecommcerce platform project with admin panel, fully customizable content with features like payment gateway, wishlist, search bar, recommendations etc."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
