import styles from "../css/About.module.css";

function About() {
  return (
    <div className={styles.container} id="About">
      <h1 className={styles.title}>About</h1>
      <p className={styles.description}>
      I’m a skilled Full-Stack Web & App Developer with expertise in JavaScript and frameworks like React.js, Next.js, and Three.js. I’m also a web designer
      </p>
      <p style={{ marginTop: 30 }} className={styles.description}>
        I’m a strong-willed person dedicated to my work and always looking for
        the opportunities to learn and develop my skills and sharing knowledge.
      </p>
      <p style={{ marginTop: 30 }} className={styles.description}>
      I love coding, but outside of that, I enjoy playing tactical games like chess, sketching, and watching anime{" "}
      </p>
    </div>
  );
}

export default About;
