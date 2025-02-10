import styles from "../css/Skills.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const skills = [
    "MERN", "React.js", "Next.js", "Three.js", "MongoDB", "Express.js",
    "Node.js", "LR", "Github", "Git", "Redux.js", "Canva", "Figma",
    "RESTful API", "TailwindCSS", "React-Native", "TypeScript"
  ];

  const skillRefs = useRef([]);
  const h3Ref = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024; // Assuming 1024px as the laptop breakpoint

    if (isLargeScreen) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: h3Ref.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.fromTo(
        h3Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power4.out" }
      )
        .fromTo(
          logoRef.current,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
          "-=0.8"
        )
        .fromTo(
          skillRefs.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power4.out" },
          "-=0.5"
        );
    }
  }, []);

  return (
    <div className={styles.skillcontainer}>
      <h3 ref={h3Ref} className={styles.title}>Skills</h3>
      <div className={styles.skills}>
        <h1 ref={logoRef} className={styles.logo}>&lt;/&gt;</h1>
        <div className={styles.skill}>
          {skills.map((skill, index) => (
            <div
              key={skill}
              ref={(el) => (skillRefs.current[index] = el)}
              className={styles.sk}
              style={{  marginRight: "10px" }}
            >
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
