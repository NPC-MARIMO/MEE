import { useRef } from "react";
import styles from "../css/About.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Unsplash image URLs
const CODE_BG =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const GRIND_BG =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
const HUMAN_BG =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const sectionRefs = useRef([]);

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Section animations
    sectionRefs.current.forEach((section, index) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.2,
        ease: "back.out(1)",
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className={styles.container} id="About" ref={containerRef}>
      <h1 className={styles.title} ref={titleRef}>
        About
      </h1>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>

        <div className={`${styles.section} ${styles.section1}`} ref={addToRefs}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <div className={styles.titleWrapper}>
                <h2 className={styles.sectionTitle}>The Code Awakening</h2>
                <div className={styles.titleUnderline}></div>
              </div>
              <div className={styles.emoji}>🌑</div>
            </div>
            <p className={styles.description}>
              It all began in February 2024. No mentors. No compass. Just raw
              curiosity and caffeine. I built wonders. I broke them. And through
              the wreckage, I rose — fast, focused, and unafraid.
            </p>
            {/* <div className={styles.hoverReveal}> */}
              
              <div className={styles.hoverGlow}></div>
            {/* </div> */}
          </div>
        </div>

        <div className={`${styles.section} ${styles.section2}`} ref={addToRefs}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <div className={styles.titleWrapper}>
                <h2 className={styles.sectionTitle}>The Grind Eternal</h2>
                <div className={styles.titleUnderline}></div>
              </div>
              <div className={styles.emoji}>⚡</div>
            </div>
            <p className={styles.description}>
              I am driven not by deadlines but by the hunger to evolve. Every
              challenge is an invitation to level up. And every time I learn, I
              pass that flame forward. Because knowledge hoarded is power
              wasted.
            </p>
            {/* <div className={styles.hoverReveal}> */}
              
              <div className={styles.hoverGlow}></div>
            {/* </div> */}
          </div>
        </div>

        <div className={`${styles.section} ${styles.section3}`} ref={addToRefs}>
          <div className={styles.sectionContent}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <div className={styles.titleWrapper}>
                <h2 className={styles.sectionTitle}>
                  The Human Beneath the Dev
                </h2>
                <div className={styles.titleUnderline}></div>
              </div>
              <div className={styles.emoji}>🌕</div>
            </div>
            <p className={styles.description}>
              When the terminal sleeps, I don't. I'm lost in chess endgames,
              sketching ideas that refuse to be silent, or falling into anime
              sagas that remind me how to feel like a hero.
            </p>
            {/* <div className={styles.hoverReveal}> */}
              
              <div className={styles.hoverGlow}></div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
