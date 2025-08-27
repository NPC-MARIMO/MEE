import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "../css/Skills.module.css";
import Button from "./Button";
import { skills } from "../constants";
import SkillCard from "./SkillCard";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRefs = useRef([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (window.innerWidth < 1000) {
      // Do not run any animation if screen width is less than 1000px
      return;
    }

    categoryRefs.current = [];
    skillRefs.current = [];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: isMobile ? "top 90%" : "top 80%",
        end: isMobile ? "bottom 10%" : "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
        scrub: false,
        fastScrollEnd: isMobile,
        preventOverlaps: true,
      },
    });

    if (titleRef.current) {
      tl.from(titleRef.current, {
        opacity: 0,
        y: isMobile ? 20 : 30,
        duration: isMobile ? 0.4 : 0.6,
        ease: "power2.out",
      });
    }

    const validCategoryRefs = categoryRefs.current.filter(Boolean);
    if (validCategoryRefs.length > 0) {
      tl.from(
        validCategoryRefs,
        {
          opacity: 0,
          y: isMobile ? 15 : 20,
          duration: isMobile ? 0.3 : 0.5,
          stagger: isMobile ? 0.05 : 0.1,
          ease: "power2.out",
        },
        isMobile ? "-=0.2" : "-=0.3"
      );
    }

    const validSkillRefs = skillRefs.current.filter(Boolean);
    if (validSkillRefs.length > 0) {
      tl.from(
        validSkillRefs,
        {
          opacity: 0,
          y: isMobile ? 15 : 20,
          duration: isMobile ? 0.3 : 0.5,
          stagger: isMobile ? 0.03 : 0.05,
          ease: "power2.out",
        },
        isMobile ? "-=0.1" : "-=0.2"
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeCategory, showAll, isMobile]);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Determine how many skills to show initially based on mobile or desktop
  const initialSkillCount = isMobile ? 3 : 5;
  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(
        0,
        Math.min(initialSkillCount, filteredSkills.length)
      );

  const hasMoreSkills = filteredSkills.length > initialSkillCount;

  const handleToggleShow = () => {
    setShowAll((prev) => !prev);
    // Scroll to the skills section after a slight delay to allow state update
    setTimeout(() => {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  };

  return (
    <div className={styles.skillContainer} id="Skills" ref={containerRef}>
      <h1 className={styles.title} ref={titleRef}>
        Skills & Expertise
      </h1>

      {/* Add category filter buttons if you have categories */}

      <div className={styles.skillsGrid}>
        {displayedSkills.map((skill, index) => (
          <SkillCard
            key={index}
            skill={skill}
            index={index}
            ref={(el) => (skillRefs.current[index] = el)}
          />
        ))}
      </div>

      {hasMoreSkills && (
        <div className={styles.viewAllButtonContainer}>
          <Button
            title={showAll ? "Curtail" : ` Unveil`}
            onClick={handleToggleShow}
            style={{ marginTop: "30px", width: 100 }}
          />
        </div>
      )}
    </div>
  );
}

export default Skills;
