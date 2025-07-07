import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/Projects.module.css";
import Button from "./Button";
import { Brainwave, Bugatti, Carrental, Cyperfiction, EvoTrends, EvoVault, iPhone, Lazarev, Metaverse, Promptopia, Slider, SolarSystem } from "../constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1024); // Check screen size

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef([]);

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
      title: "Lazarev",
      idx: 3,
      description:
        "A pixel-perfect recreation of an award-winning website using HTML, CSS, and JavaScript.",
      imageUrl: Lazarev,
      date: "April 2024",
      link: "https://mosshead-lazarev.vercel.app/",
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
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      if (isLaptop) { // ✅ Run animations only on laptop-sized screens
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "bottom 60%",
              markers: false,
            },
          });

          tl.from(titleRef.current, { opacity: 0, y: -30, duration: 1 })
            .from(
              projectsRef.current,
              { opacity: 0, y: 50, stagger: 0.2, duration: 0.8 },
              "-=0.5"
            );
        }, containerRef);

        return () => ctx.revert();
      }
    },
    [showAllProjects, isLaptop] // ✅ Re-run when screen size or project state changes
  );

  return (
    <div className={styles.container} id="Project" ref={containerRef}>
      <h3 className={styles.title} ref={titleRef}>Projects</h3>
      <p className={styles.description}>
        Following projects showcase my skills and experience through real-world
        examples of my work. They reflect my ability to solve complex problems
        and work with different technologies.
      </p> 
      <div>
        {displayedProjects.map((project, index) => (
          <div key={project.idx} className={styles.project} ref={(el) => (projectsRef.current[index] = el)}>
            <div className={styles.projectimage}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.imageUrl} alt={project.title} />
                </a>
              ) : (
                <img src={project.imageUrl} alt={project.title} />
              )}
            </div>
            <div>
              <h3 className={styles.projecttitle}>{project.title}</h3>
              <p className={styles.projectdate}>{project.date}</p>
              <p className={styles.projectdescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div onClick={() => setShowAllProjects(!showAllProjects)} className={styles.buttoncontainer}>
        <Button title={showAllProjects ? "View Less" : "View More"} />
      </div>
    </div>
  );
}

export default Projects;
  