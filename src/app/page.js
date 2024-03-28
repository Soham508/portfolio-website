import Image from "next/image";
import Head from "next/head";
import Navbar from "./components/navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 scroll-smooth w-full">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
