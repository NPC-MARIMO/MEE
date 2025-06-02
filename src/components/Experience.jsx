import styles from "../css/Experience.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const h3ref = useRef(null);

  const para1 = "Started coding in Feb 2024. Built stuff, broke stuff, learned fast.";
  const para2 = "Now vibing with frontend, backend, APIs, SSR/CSR, proxies & more.";

  const para1Words = para1.split(" ");
  const para2Words = para2.split(" ");

  const p1Refs = useRef([]);
  const p2Refs = useRef([]);

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024; // Assuming 1024px as the laptop breakpoint

    if (isLargeScreen) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h3ref.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        h3ref.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      )
        .fromTo(
          p1Refs.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: "power4.out" },
          "-=0.5"
        )
        .fromTo(
          p2Refs.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.03, ease: "power4.out" },
          "-=0.5"
        );
    }
  }, []);

  return (
    <div id="Experience" className={styles.container}>
      <h3 ref={h3ref} className={styles.title}>
        Experience
      </h3>
      <p className={styles.description}>
        {para1Words.map((word, index) => (
          <span
            key={index}
            ref={(el) => (p1Refs.current[index] = el)}
            style={{ display: "inline-block", marginRight: "5px" }}
          >
            {word}
          </span>
        ))}
      </p>
      <p className={styles.description}>
        {para2Words.map((word, index) => (
          <span
            key={index}
            ref={(el) => (p2Refs.current[index] = el)}
            style={{ display: "inline-block", marginRight: "5px" }}
          >
            {word}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Experience;
