import styles from "../css/About.module.css";

function About() {
  return (
    <div className={styles.container} id="About">
      <h1 className={styles.title}>About</h1>
      <p className={styles.description}>
     Started coding in Feb 2024. Built stuff, broke stuff, learned fast.
Now vibing with frontend, backend, APIs, SSR/CSR, proxies & more.
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
