import styles from "../css/Projects.module.css";
import Button from "./Button";

function Projects() {

  const Projects = [
    {
      title: "Lazarev",
      description: "This is a description",
      imageUrl: "https://raw.githubusercontent.com/NPC-MARIMO/mypf/refs/heads/main/src/assets/lazarev.png",
      date : "dd/mm/yyyy"
    },
    {
      title: "iPhone",
      description: "This is a description",
      imageUrl: "https://raw.githubusercontent.com/NPC-MARIMO/mypf/refs/heads/main/src/assets/iphone.png",
      date : "dd/mm/yyyy"
    },
    {
      title: "Brainwave",
      description: "This is a description",
      imageUrl: "https://raw.githubusercontent.com/NPC-MARIMO/mypf/refs/heads/main/src/assets/brainwave.png",
      date : "dd/mm/yyyy"
    }
  ]
 
  return (
    <div className={styles.container} id="Project">
      <h3 className={styles.title}>Projects</h3>
      <p className={styles.description}>
        Following projects showcases my skills and experience through real world
        examples of my work. It reflects my ability to solve complex problems,
        work with different technologies.
      </p>
      <div>
       {
        Projects && Projects.length > 0 &&
        Projects.map((project) => (
          <div className={styles.project}>
          <div className={styles.projectimage}>
            <img src={project.imageUrl} alt="" />
          </div>
          <div>
            <h3 className={styles.projecttitle}>{project.title}</h3>
            <p className={styles.projectdate}>{project.date}</p>
            <p className={styles.projectdescription}>
              {project.description}
            </p>
          </div>
        </div>
        ))
       }
      </div>
      <div className={styles.buttoncontainer}>
        <Button title="View More" />
      </div>
    </div>
  );
}

export default Projects;
