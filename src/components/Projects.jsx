import styles from "../css/Projects.module.css";
import Button from "./Button";

function Projects() {
 
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Projects</h3>
      <p className={styles.description}>
        Following projects showcases my skills and experience through real world
        examples of my work. It reflects my ability to solve complex problems,
        work with different technologies.
      </p>
      <div>
        <div className={styles.project}>
          <div className={styles.projectimage}></div>
          <div>
            <h3 className={styles.projecttitle}>Project Name</h3>
            <p className={styles.projectdate}>DD/MM/YYYY</p>
            <p className={styles.projectdescription}>
              Technologies and other things about this project
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectimage}></div>
          <div>
            <h3 className={styles.projecttitle}>Project Name</h3>
            <p className={styles.projectdate}>DD/MM/YYYY</p>
            <p className={styles.projectdescription}>
              Technologies and other things about this project
            </p>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.projectimage}></div>
          <div>
            <h3 className={styles.projecttitle}>Project Name</h3>
            <p className={styles.projectdate}>DD/MM/YYYY</p>
            <p className={styles.projectdescription}>
              Technologies and other things about this project
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <Button title="View More" />
      </div>
    </div>
  );
}

export default Projects;
