import styles from "../css/About.module.css";

function About() {
  return (
    <div className={styles.container} id="About">
      <h1 className={styles.title}>About</h1>
      <p className={styles.description}>
     I’m a Full-Stack Web & App Developer with a focus on JavaScript, React.js, Next.js, and Three.js. Also a web designer with an eye for sleek UI.
      </p>
      <p style={{ marginTop: 30 }} className={styles.description}>
        I’m driven, always leveling up my skills, and love sharing knowledge along the way.
      </p>
      <p style={{ marginTop: 30 }} className={styles.description}>
     When I’m not coding, you’ll find me deep into chess, sketching, or bingeing anime.
      </p>
    </div>
  );
}

export default About;
