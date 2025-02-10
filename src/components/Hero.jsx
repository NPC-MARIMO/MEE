import styles from "../css/Hero.module.css";
import GithubStats from "./GithubStats";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Hero() {
  const h3ref = useRef(null);
  const namespanref = useRef(null);
  const contriref = useRef(null);
  const starref = useRef(null);
  const reporef = useRef(null);
  const imageRef = useRef(null); // Ref for image animation
  const descriptionspanrefs = useRef([]); // Array of refs for description words

  let heroDescription =
    "I'm a self-taught MERN Full-Stack Developer, who's passionate about creating creative projects";
  let heroDescriptionSpan = heroDescription.split(" ");

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(h3ref.current, { ease: "power4.out", opacity: 0, y: 100 }, "a")
      .from(namespanref.current, { opacity: 0, y: 100 }, "a")
      .from(descriptionspanrefs.current, { opacity: 0, y: 50, stagger: 0.03 })
      .from(contriref.current, { opacity: 0, y: 10 }, "s")
      .from(reporef.current, { opacity: 0, y: 10, delay: 0.35 }, "s")
      .from(starref.current, { opacity: 0, y: 10, delay: 0.7 }, "s")
      // Image animation (fade-in & scale-up)
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
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
            {heroDescriptionSpan.map((word, index) => (
              <span
                key={index}
                ref={(el) => (descriptionspanrefs.current[index] = el)}
                style={{ display: "inline-block", marginRight: "5px" }}
              >
                {word}
              </span>
            ))}
          </p>

          <div className={styles.container}>
            <div className={styles.stats}>
              <div ref={contriref}>
                <div></div>
                <h3>247 Github Contribution</h3>
              </div>
              <div ref={reporef}>
                <div></div>
                <h3>61 Repositories</h3>
              </div>
              <div ref={starref}>
                <div></div>
                <h3>10 Stars</h3>
              </div>
            </div>
          </div>
        </div>
        <div ref={imageRef} className={styles.circle}>
          {/* Animated Profile Image */}
          <img
            src="https://i.pinimg.com/736x/63/38/6c/63386c858d65101ad5ab1dca14cc4b77.jpg"
            alt="Profile"
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
