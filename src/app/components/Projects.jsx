"use client";
import React from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import Link from "next/link";
import blogPic from "./../../../public/blog.png";
import chatAppPic from "./../../../public/chatApp.jpg";
import EstorePic from "./../../../public/Estore.jpg";
import globePic from "./../../../public/globe.jpg";

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

const Card = ({ img, title, description, id, stack, codeLink }) => {
  return (
    <Tilt
      className="hidden md:flex md:items-center md:justify-center"
      options={defaultOptions}
      style={{ height: 770, width: 530 }}
    >
      <div className="h-[85%] p-1 w-[90%] md:w-[400px] shadow-2xl shadow-indigo-500/40 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-rose-500/40 rounded-lg ">
        <div className="h-full flex flex-col items-center w-full bg-slate-300">
          <div className="w-full h-[40%] flex  items-center justify-center">
            <Image
              alt={title}
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
          <div className="flex fixed bottom-32 flex-col mt-2 items-center ">
            <h2 className="text-lg mb-2 text-gray-700">Stack</h2>
            <div className="flex justify-between items-center gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  id={id}
                  className="p-2 hover:bg-rose-400/40 cursor-pointer rounded-xl"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex fixed bottom-20 justify-between gap-24 items-center">
              <Link
                href={codeLink}
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
      <div id="projects" className="w-full overflow-auto">
        <div className="w-full h-16">
          <h1 className="text-center bg-gradient-to-r from-blue-600 to-indigo-300 h-full text-transparent text-4xl font-sans font-bold bg-clip-text text-g">
            Projects
          </h1>
        </div>
        <div className="w-full mt-10 md:h-screen overflow-x-auto">
          <div className="flex flex-row md:ml-[5%] space-x-4 overflow-x-auto items-center">
            <Card
              img={EstorePic}
              id={1}
              stack={["MongoDb", "React", "NodeJs", "Express"]}
              title={"Ecomerce app with admin panel"}
              description={
                "This is an ecommcerce platform project with admin panel, fully customizable content with features like payment gateway, wishlist, search bar, recommendations etc."
              }
              codeLink={
                "https://github.com/Soham508/Ecommerce-app-with-admin-panel"
              }
            />

            <Card
              img={globePic}
              id={2}
              stack={["MongoDb", "NextJs", "Tailwind"]}
              title={"World ranks"}
              description={
                "This is an information platform mainly concerned of geographical and econonimical data for different countries"
              }
              codeLink={"https://github.com/Soham508/World-ranks"}
            />

            <Card
              img={chatAppPic}
              id={3}
              stack={["Socket.io", "HTML", "CSS"]}
              title={"Raw chat app"}
              description={
                "This is an chat app that is purely written with html, css and javascript with web sockets technology. It does not store chat data, multiples users can join a single room for annonymous chat"
              }
              codeLink={"https://github.com/Soham508/RawStack-chat-app"}
            />

            <Card
              img={blogPic}
              id={4}
              stack={["postgres", "Express", "React", "Firebase"]}
              title={"BlogVista"}
              description={
                "This is an blog posting app currently under development"
              }
              codeLink={"https://github.com/Soham508/BlogVista"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
