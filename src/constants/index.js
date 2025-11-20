import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Button from "../components/Button";
import GithubStats from "../components/GithubStats";
import Logo from '../assets/Logo/Mosscript.png'
import Logo2 from "../assets/Logo/Logo2.png";

import Lazarev from '../assets/Projects/lazarev.png'
import iPhone from '../assets/Projects/iphone.png'
import Brainwave from '../assets/Projects/brainwave.png'
import Carrental from '../assets/Projects/carrental.png'
import EvoTrends from '../assets/Projects/evotrends.png'
import EvoVault from '../assets/Projects/evovault.png'
import Metaverse from '../assets/Projects/metaverse.png'
import McD from "../assets/Projects/McD.png";
import Bugatti from '../assets/Projects/bugatti.png'
import Promptopia from '../assets/Projects/promptopia.png'
import Slider from '../assets/Projects/slider.png'
import SolarSystem from '../assets/Projects/solarsystem.png'
import Cyperfiction from '../assets/Projects/cyperfiction.png'
import Win2Win from '../assets/Projects/Win2Win.png'
import GeneTalk from '../assets/Projects/GeneTalk.png'

import Canva from '../assets/Skills/Canva.jpeg'
import ContextAPI from '../assets/Skills/ContextAPI.png'
import Express from '../assets/Skills/Expressjs.png'
import Figma from '../assets/Skills/Figma.png'
import Github from '../assets/Skills/Github.png'
import MongoDB from '../assets/Skills/MongoDb.png'
import Gsap from '../assets/Skills/Gsap.jpeg'
import Node from '../assets/Skills/Nodejs.png'
import React from '../assets/Skills/React.png'
import Redux from '../assets/Skills/Redux.png'
import Tailwind from '../assets/Skills/Tailwind.png'
import Mysql from '../assets/Skills/Mysql.png'
import Netlify from '../assets/Skills/Netlify.png'
import Postman from '../assets/Skills/Postman.png'
import Python from '../assets/Skills/Python.png'
import Threejs from '../assets/Skills/Three.png'
import Typescript from '../assets/Skills/Typescript.png'
import Vercel from '../assets/Skills/Vercel.png'
import VSCode from '../assets/Skills/VSCode.jpeg'
import Next from '../assets/Skills/Next.png'
import ReactNative from '../assets/Skills/ReactNative.png'
import RestFulApi from '../assets/Skills/RestfulAPI.png'
import SocketIO from '../assets/Skills/SocketIO.png'
import Sketch from '../assets/Skills/Sketches.jpg'



//  constants

const skills = [
  {
    name: "React.js",
    icon: React,
    description:
      "The brain of my frontend — dynamic, composable, ruthless with DOM.",
    level: 92,
    color: "#61DBFB",
  },
  {
    name: "Next.js",
    icon: Next,
    description:
      "Server meets client — routing, SSR, and reactivity all in one strike.",
    level: 83,
    color: "#000000",
  },
  {
    name: "GSAP + ScrollTrigger",
    icon: Gsap,
    description: "Where motion meets madness — my UI breathes and reacts.",
    level: 89,
    color: "#88CE02",
  },
  {
    name: "Three.js",
      icon: Threejs,
    description: "3D in the browser — geometry, shaders, and visual power.",
    level: 70,
    color: "#000000",
  },
  {
    name: "Socket.IO",
    icon: SocketIO,
    description:
      "Real-time sync — presence, status, and interaction in motion.",
    level: 84,
    color: "#010101",
  },
  {
    name: "Tailwind CSS",
    icon: Tailwind,
    description:
      "Utility-first and chaos-proof — designs built at light speed.",
    level: 88,
    color: "#38BDF8",
  },
  {
    name: "MongoDB",
    icon: MongoDB,
    description: "Document-based and dynamic — I structure data like stories.",
    level: 80,
    color: "#4DB33D",
  },
  {
    name: "MySQL",
    icon: Mysql,
    description: "Relational. Structured. When the data needs discipline.",
    level: 71,
    color: "#00618A",
  },
  {
    name: "Express.js",
    icon: Express,
    description: "The minimalist beast behind my APIs and routes.",
    level: 77,
    color: "#303030",
  },
  {
    name: "Node.js",
    icon: Node,
    description:
      "The core of my backend — event-driven, non-blocking, powerful.",
    level: 79,
    color: "#339933",
  },
  {
    name: "Redux.js",
    icon: Redux,
    description: "Centralized state — predictable, controlled, and scalable.",
    level: 82,
    color: "#764ABC",
  },
  {
    name: "Context API",
    icon: ContextAPI,
    description: "Simpler state flows — unhooking prop chains like a ninja.",
    level: 81,
    color: "#61DAFB",
  },
  {
    name: "React Native",
    icon: ReactNative,
    description:
      "Mobile dev with React powers — apps without platform borders.",
    level: 68,
    color: "#61DAFB",
  },
  {
    name: "Python",
icon: Python,
    description: "Scripting, logic, automation — precise, clean, and deadly.",
    level: 74,
    color: "#FFD43B",
  },
  {
    name: "TypeScript",
    icon: Typescript,
    description: "Typed and strict — making JS less unpredictable.",
    level: 71,
    color: "#3178C6",
  },
  {
    name: "RESTful APIs",
    icon: RestFulApi,
    description:
      "Structure and standards — the contract between front and back.",
    level: 79,
    color: "#FF6B6B",
  },
  {
    name: "Git & GitHub",
    icon: Github,
    description: "Version control isn’t a tool — it’s a survival skill.",
    level: 81,
    color: "#F05032",
  },
  {
    name: "Postman",
    icon: Postman,
    description: "Where I test my endpoints and catch bugs mid-flight.",
    level: 78,
    color: "#FF6C37",
  },
  {
    name: "VS Code",
    icon: VSCode,
    description: "My forge — extensions, themes, and a billion tabs open.",
    level: 90,
    color: "#007ACC",
  },
  {
    name: "Vercel",
    icon: Vercel,
    description: "Click. Deploy. Done. Frictionless hosting for frontend fire.",
    level: 86,
    color: "#000000",
  },
  {
    name: "Netlify",
    icon: Netlify,
    description: "Instant deploys and serverless vibes — like magic.",
    level: 75,
    color: "#00C7B7",
  },
  {
    name: "Figma",
    icon: Figma,
    description: "Design systems, wireframes, and pixel-level precision.",
    level: 73,
    color: "#F24E1E",
  },
  {
    name: "Canva",
    icon: Canva,
    description: "Quick visuals, killer presentation — aesthetic at speed.",
    level: 77,
    color: "#00C4CC",
  },
  {
    name: "Sketching",
    icon: Sketch,
    description: "Where ideas are born — raw, emotional, unfiltered creation.",
    level: 91,
    color: "#6A0DAD",
  },
];


export {
    Navbar,
    Hero,
    Skills,
    About,
    Projects,
    Contact,
    Footer,
    Button,
    GithubStats ,
    Cyperfiction,
    McD,
    Lazarev,
    iPhone,
    Brainwave,
    Carrental,
    EvoTrends,
    Metaverse,
    Win2Win,
    EvoVault,
    Bugatti,
    Promptopia,
    Slider,
    SolarSystem,
    GeneTalk,
    skills,
    Logo,
    Logo2
}
