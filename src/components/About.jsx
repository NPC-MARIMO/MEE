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
    if (window.innerWidth < 1000) {
      // Do not run any animation if screen width is less than 1000px
      return;
    }
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
             I started my development journey in February 2024 with no formal mentor or structured path. Curiosity and persistence pushed me forward as I experimented, broke things, and rebuilt them with a clearer understanding each time. Those early failures shaped my discipline and approach to engineering, and they continue to guide how I learn, solve problems, and build today.
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
             My motivation comes from growth, not pressure. Every project and setback has pushed me to improve my skills and sharpen my problem-solving approach. As I learn, I make it a point to share insights with other developers because knowledge only becomes more valuable when it circulates.
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
                  The Mortal Beneath the Coder
                </h2>
                <div className={styles.titleUnderline}></div>
              </div>
              <div className={styles.emoji}>🌕</div>
            </div>
            <p className={styles.description}>
              Outside of development, I spend time studying chess strategy, sketching, and exploring anime stories that spark creativity. These pursuits help me stay grounded and give me fresh perspectives that I bring back into my work.
              
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
