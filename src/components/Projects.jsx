import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../css/Projects.module.css";
import Button from "./Button";
import { Brainwave, Bugatti, Carrental, EvoTrends, iPhone, Lazarev, Metaverse, Promptopia, Slider, SolarSystem } from "../constants";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    { title: "Metaverse", idx: 1, description: "A Next.js project focusing on frontend and animations using Framer Motion", imageUrl: Metaverse, date: "dd/mm/yyyy", link: "https://hello-i-m-me.netlify.app/" },
    { title: "Lazarev", idx: 2, description: "A recreation of a website from Awwwards.com using HTML, CSS, and JS", imageUrl: Lazarev, date: "dd/mm/yyyy", link: "https://mosshead-lazarev.vercel.app/" },
    { title: "iPhone", idx: 3, description: "Built while learning React.js and Three.js with GSAP animations", imageUrl: iPhone, date: "dd/mm/yyyy", link: "https://i-phone-chi.vercel.app/" },
    { title: "Brainwave", idx: 4, description: "Created using React.js and Framer Motion for animations", imageUrl: Brainwave, date: "dd/mm/yyyy", link: "https://my-brainwave.vercel.app/" },
    { title: "Carrental", idx: 5, description: "A Next.js frontend project using Tailwind CSS", imageUrl: Carrental, date: "dd/mm/yyyy", link: "https://evo-carrental.vercel.app/" },
    { title: "Bugatti", idx: 6, description: "Built to practice GSAP animations in React.js", imageUrl: Bugatti, date: "dd/mm/yyyy", link: "https://evo-bugatti.vercel.app/" },
    { title: "Promptopia", idx: 7, description: "A Next.js full-stack app where users can share and read prompts", imageUrl: Promptopia, date: "dd/mm/yyyy", link: "https://evo-m-promptopia.vercel.app/" },
    { title: "Slider", idx: 8, description: "A 3D slider effect created using just HTML & CSS", imageUrl: Slider, date: "dd/mm/yyyy", link: "https://one-peice-evo-slider.vercel.app/" },
    { title: "Solar System", idx: 9, description: "A Three.js project simulating the solar system", imageUrl: SolarSystem, date: "dd/mm/yyyy", link: "https://solar-system-murex-ten.vercel.app/" },
    { title: "Evo Trends", idx: 10, description: "A MERN full-stack project for buying and selling products", imageUrl: EvoTrends, date: "dd/mm/yyyy", link: "https://evo-trends-ecms.vercel.app/" },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 60%",
            markers: false, // Debugging markers (set to true if needed)
          },
        });

        tl.from(titleRef.current, { opacity: 0, y: -30, duration: 1 })
          .from(
            projectsRef.current,
            { opacity: 0, y: 50, stagger: 0.2, duration: 0.8 },
            "-=0.5"
          );
      }, containerRef);

      return () => ctx.revert(); // Cleanup animations when state changes
    },
    [showAllProjects] // ✅ Runs animation every time showAllProjects changes
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
