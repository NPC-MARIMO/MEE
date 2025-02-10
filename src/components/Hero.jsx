import styles from "../css/Hero.module.css";
import GithubStats from "./GithubStats";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
  const h3ref = useRef(null);
  const namespanref = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(
      h3ref.current,
      {
        ease: "power4.out",
        opacity: 0,
        y: 100,
      },
      "a"
    ).from(
      namespanref.current,
      {
        ease: "power4.out",
        opacity: 0,
        y: 100,
        delay: 0.5,
      },
      "a"
    );
  });

  return (
    <div className={styles.me} id="Me">
      <div className={styles.first}>
        <div>
          <h3 ref={h3ref} className={styles.title}>
            Hi, I am <span ref={namespanref}> Shivang Pandey </span>
          </h3>

          <p className={styles.description}>
            I'm a self taught MERN Full-Stack Developer, who's passionate about
            creating creative projects
          </p>
          <div className={styles.container}>
            
            <div className={styles.stats}>
              <div>
                <div></div>
                <h3>247 Github Contribution</h3>
              </div>
              <div>
                <div></div>
                <h3>61 Repositories</h3>
              </div>
              <div>
                <div></div>
                <h3>10 Stars</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.circle}>
              <img
                src="https://i.pinimg.com/736x/63/38/6c/63386c858d65101ad5ab1dca14cc4b77.jpg"
                alt=""
              />
            </div>
      </div>
      <div className={styles.githubcontri}>
        <GithubStats />
      </div>
    </div>
  );
}

export default Hero;
