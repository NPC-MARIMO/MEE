import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "../css/Skills.module.css";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skills = [
    { name: "MERN", category: "stack" },
    { name: "React.js", category: "frontend" },
    { name: "Embedded js", category: "frontend" },
    { name: "Electron js", category: "desktop" },
    { name: "Next.js", category: "frontend" },
    { name: "Three.js", category: "threeD" },
    { name: "MongoDB", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "Express.js", category: "backend" },
    { name: "Node.js", category: "backend" },
    { name: "GitHub", category: "tools" },
    { name: "Git", category: "tools" },
    { name: "Postman", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "Vercel", category: "tools" },
    { name: "Netlify", category: "tools" },
    { name: "Redux.js", category: "state" },
    { name: "Context API", category: "state" },
    { name: "Canva", category: "design" },
    { name: "Figma", category: "design" },
    { name: "RESTful API", category: "backend" },
    { name: "TailwindCSS", category: "frontend" },
    { name: "React-Native", category: "mobile" },
    { name: "TypeScript", category: "language" },
    { name: "Python", category: "language" },
  ];

  const getSkillIcon = (skillName) => {
    const icons = {
      MERN: "🔄",
      "React.js": "⚛️",
      "Next.js": "➡️",
      "Three.js": "🧊",
      MongoDB: "🍃",
      "Express.js": "🚂",
      "Node.js": "🟢",
      GitHub: "🐙",
      Git: "🔀",
      "Redux.js": "🗃️",
      Canva: "🎨",
      Figma: "✏️",
      "RESTful API": "🔗",
      TailwindCSS: "🎐",
      "React-Native": "📱",
      TypeScript: "📘",
    };
    return icons[skillName] || "💻";
  };

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "desktop", name: "Desktop" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools" },
    { id: "design", name: "Design" },
    { id: "threeD", name: "3D" },
    { id: "mobile", name: "Mobile" },
    { id: "language", name: "Languages" },
    { id: "state", name: "State Mgmt" },
    { id: "stack", name: "Full Stack" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false); // 👈 track View All/Hide toggle
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRefs = useRef([]);
  const skillRefs = useRef([]);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    categoryRefs.current = [];
    skillRefs.current = [];

    // Get screen width for responsive settings
    // const isMobile = window.innerWidth <= 768; // This line is now redundant
    // const isTablet = window.innerWidth <= 1024; // This line is now redundant

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: isMobile ? "top 90%" : "top 80%",
        end: isMobile ? "bottom 10%" : "bottom 20%",
        toggleActions: "play none none reverse",
        // Add responsive settings
        markers: false,
        scrub: false,
        // Adjust for mobile performance
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

    const validCategoryRefs = categoryRefs.current.filter((ref) => ref);
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

    // Only animate skills if they exist and are visible
    const validSkillRefs = skillRefs.current.filter((ref) => ref);
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
  }, [activeCategory, showAll, isMobile]); // Add isMobile to dependencies

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Ensure we always show skills, but limit to 10 when not showing all
  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, Math.min(10, filteredSkills.length));
  
  // Only show button if there are more than 10 skills
  const hasMoreSkills = filteredSkills.length > 10;

  const handleToggleShow = () => {
    setShowAll((prev) => !prev);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setShowAll(false); // reset to default 10 when category changes
  };

  return (
    <div className={styles.skillContainer} id="Skills" ref={containerRef}>
      <h1 className={styles.title} ref={titleRef}>
        Skills & Expertise
      </h1>

      <div className={styles.categoryFilter}>
        {categories.map((category, index) => (
          <button
            key={category.id}
            ref={(el) => (categoryRefs.current[index] = el)}
            className={`${styles.categoryPill} ${
              activeCategory === category.id ? styles.active : ""
            }`}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.skillsGrid}>
        {displayedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            ref={(el) => (skillRefs.current[index] = el)}
            className={`${styles.skillCard} ${
              styles[`category-${skill.category}`]
            }`}
            data-category={skill.category}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                duration: 0.3,
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                duration: 0.3,
              });
            }}
          >
            <div className={styles.skillGlow}></div>
            <div className={styles.skillHalo}></div>
            <div className={styles.skillContent}>
              <div className={styles.skillIcon}>{getSkillIcon(skill.name)}</div>
              <span className={styles.skillName}>{skill.name}</span>
              <div className={styles.skillProgress}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${Math.min(90 + Math.random() * 10, 100)}%`,
                  }}
                ></div>
              </div>
              <div className={styles.skillParticles}></div>
            </div>
          </div>
        ))}
      </div>

      {hasMoreSkills && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title={showAll ? "Hide" : "View All"} // 👈 toggle button text
            handleSendMail={handleToggleShow}
            style={{ marginTop: "30px", width: 110 }}
          />
        </div>
      )}
    </div>
  );
}

export default Skills;
