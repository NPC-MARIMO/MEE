import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/Projects.module.css";
import Button from "./Button";
import {
  Brainwave,
  Bugatti,
  Carrental,
  GeneTalk,
  Cyperfiction,
  EvoTrends,
  EvoVault,
  iPhone,
  Lazarev,
  McD,
  Metaverse,
  Promptopia,
  Slider,
  SolarSystem,
} from "../constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1024);

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectsRef = useRef([]);
  const buttonRef = useRef(null);

  
const projects = [
  {
    title: "Metaverse",
    idx: 1,
    description:
      "A Next.js project focusing on frontend and animations using Framer Motion",
    imageUrl: Metaverse,
    date: "November 2024",
    link: "https://hello-i-m-me.netlify.app/",
  },
  {
    title: "Evo-Vault",
    idx: 2,
    description:
      "A Platform where users can create Families and share Memories with their loved ones",
    imageUrl: EvoVault,
    date: "June 2025",
    link: "https://evo-vault-theta.vercel.app/",
  },
   {
    title: "GeneTalk",
    idx: 3,
    description: "An AI based cross species communication platform where you can understand Animal feelings. ",
    imageUrl: GeneTalk,
    date: "November 2025",
    link: "https://genetalk.netlify.app/",
  },
  {
    title: "iPhone",
    idx: 4,
    description:
      "A React.js and Three.js project featuring GSAP animations, built as part of my learning journey",
    imageUrl: iPhone,
    date: "September 2024",
    link: "https://i-phone-chi.vercel.app/",
  },
  {
    title: "Brainwave",
    idx: 5,
    description: "Created using React.js and Framer Motion for animations",
    imageUrl: Brainwave,
    date: "September 2024",
    link: "https://my-brainwave.vercel.app/",
  },
  {
    title: "Carrental",
    idx: 6,
    description: "A Next.js frontend project using Tailwind CSS",
    imageUrl: Carrental,
    date: "November 2024",
    link: "https://evo-carrental.vercel.app/",
  },
  {
    title: "Bugatti",
    idx: 7,
    description: "A GSAP-powered animation project built in React.js.",
    imageUrl: Bugatti,
    date: "October 2024",
    link: "https://evo-bugatti.vercel.app/",
  },
  {
    title: "Promptopia",
    idx: 8,
    description:
      "A Next.js full-stack app where users can share and read prompts",
    imageUrl: Promptopia,
    date: "November 2024",
    link: "https://evo-m-promptopia.vercel.app/",
  },
  {
    title: "Slider",
    idx: 9,
    description: "A 3D slider effect created using just HTML & CSS",
    imageUrl: Slider,
    date: "October 2024",
    link: "https://one-peice-evo-slider.vercel.app/",
  },
  {
    title: "Solar System",
    idx: 10,
    description:
      "A Three.js simulation of the solar system with interactive elements",
    imageUrl: SolarSystem,
    date: "September 2024",
    link: "https://solar-system-murex-ten.vercel.app/",
  },
  {
    title: "Evo Trends",
    idx: 11,
    description:
      "A MERN-based e-commerce platform for buying and selling products",
    imageUrl: EvoTrends,
    date: "November - December 2024",
    link: "https://evo-trends-ecms.vercel.app/",
  },
  {
    title: "Cyperfiction",
    idx: 12,
    description: "An Animated project using HTML, CSS and JS ",
    imageUrl: Cyperfiction,
    date: "August 2024",
    link: "https://cyperfiction-by-mosshead.vercel.app/",
  },
  {
    title: "Mc Donald Clone",
    idx: 13,
    description: "Creative loading animation and hero section using HTML, CSS, JS ",
    imageUrl: McD,
    date: "August 2024",
    link: "https://mc-d-chi.vercel.app/",
  },
  {
    title: "Lazarev",
    idx: 14,
    description:
      "A pixel-perfect recreation of an award-winning website using HTML, CSS, and JavaScript.",
    imageUrl: Lazarev,
    date: "April 2024",
    link: "https://mosshead-lazarev.vercel.app/",
  }
  
];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (window.innerWidth < 1000) {
      // Do not run any animation if screen width is less than 1000px
      return;
    }
    if (isLaptop) {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from([subtitleRef.current, descriptionRef.current], {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.2)",
      });

      projectsRef.current.forEach((project, index) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.2)",
        });
      });

      gsap.from(buttonRef.current, {
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, [showAllProjects, isLaptop]);

  return (
    <div className={styles.container} id="Project" ref={containerRef}>
      <h1 className={styles.title} ref={titleRef}>
        Projects
      </h1>

      <h2 className={styles.subtitle} ref={subtitleRef}>
        🌒 “Not just projects, but proof of what I can build and how I build it.”
      </h2>

      <p className={styles.description} ref={descriptionRef}>
       These projects represent the core of my work as a developer. Each one is built through consistent iteration, late-night problem solving, and a focus on clean architecture. They aren’t simple demos; they reflect how I approach real-world challenges, apply my technical skills, and push myself toward stronger, more scalable solutions.
      </p>

      <div className={styles.projectsGrid}>
        {displayedProjects.map((project, index) => (
          <div
            key={project.idx}
            className={styles.projectCard}
            ref={(el) => (projectsRef.current[index] = el)}
          >
            <div className={styles.projectImageContainer}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectOverlay}>
                  <span className={styles.viewProject}>Behold</span>
                </div>
              </a>
            </div>

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDate}>{project.date}</p>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={styles.buttonContainer}
        ref={buttonRef}
        onClick={() => setShowAllProjects(!showAllProjects)}
      >
        <Button title={showAllProjects ? "Curtail" : "Unveil"} />
      </div>
    </div>
  );
}

export default Projects;
