import { useState } from "react";
import styles from "../css/Projects.module.css";
import Button from "./Button";
import { Brainwave, Bugatti, Carrental, EvoTrends, iPhone, Lazarev, Metaverse, Promptopia, Slider, SolarSystem } from "../constants";

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    
    {
      title: "Metaverse",
      idx: 1,
      description: "A Next.js project focuses on frontend and animations using Framer Motion",
      imageUrl: Metaverse,
      date: "dd/mm/yyyy",
      link: "https://hello-i-m-me.netlify.app/"
    },
    {
      title: "Lazarev",
      idx: 2,
      description: "I Found this website on Awwwards.com so I decided to make it myself, this is created using HTML, CSS and JS",
      imageUrl: Lazarev,
      date: "dd/mm/yyyy",
      link: "https://mosshead-lazarev.vercel.app/"
    },
    {
      title: "iPhone",
      idx: 3,
      description: "I made this iPhone website in my learning phase of React.js and Three.js with GSAP animation",
      imageUrl: iPhone,
      date: "dd/mm/yyyy",
      link: "https://i-phone-chi.vercel.app/"
    },
    {
      title: "Brainwave",
      idx: 4,
      description: "This is Built using React.js and Framer Motion for animations ",
      imageUrl: Brainwave,
      date: "dd/mm/yyyy",
      link: "https://my-brainwave.vercel.app/"
    },
    {
      title: "Carrental",
      idx: 5,
      description: "One of my Next.js projects using Tailwind CSS, its only frontend tho",
      imageUrl: Carrental,
      date: "dd/mm/yyyy",
      link: "https://evo-carrental.vercel.app/"
    },
    {
      title: "Bugatti",
      idx: 6,
      description: "I created this for learning GSAP in React.js",
      imageUrl: Bugatti,
      date: "dd/mm/yyyy",
      link: "https://evo-bugatti.vercel.app/"
    },
    {
      title: "Promptopia",
      idx: 7,
      description: "Next.js full stack project where we can share our prompts and read others",
      imageUrl: Promptopia,
      date: "dd/mm/yyyy",
      link: "https://evo-m-promptopia.vercel.app/"
    },
    {
      title: "Slider",
      idx: 8,
      description: "A 3d looking slider created using HTML and CSS only",
      imageUrl: Slider,
      date: "dd/mm/yyyy",
      link: "https://one-peice-evo-slider.vercel.app/"
    },
    {
      title: "Solar System",
      idx: 9,
      description: "When I was learning Three.js I created this Solar System",
      imageUrl: SolarSystem,
      date: "dd/mm/yyyy",
      link: "https://solar-system-murex-ten.vercel.app/"
    },
    {
      title: "Evo Trends",
      idx: 10,
      description: "This is a MERN full-stack project where we can buy and sell products",
      imageUrl: EvoTrends,
      date: "dd/mm/yyyy",
      link: "https://evo-trends-ecms.vercel.app/"
    },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className={styles.container} id="Project">
      <h3 className={styles.title}>Projects</h3>
      <p className={styles.description}>
        Following projects showcases my skills and experience through real world
        examples of my work. It reflects my ability to solve complex problems,
        work with different technologies.
      </p> 
      <div>
        {displayedProjects.map((project) => (
          <div key={project.idx} className={styles.project}>
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
      <div
        onClick={() => setShowAllProjects(!showAllProjects)}
        className={styles.buttoncontainer}
      >
        <Button title={showAllProjects ? "View Less" : "View More"} />
      </div>
    </div>
  );
}

export default Projects;