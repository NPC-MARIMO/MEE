import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./skill-card.module.css";

export default function SkillCard({ skill, index }) {
  const cardRef = useRef(null);
  const progressRef = useRef(null);
  const iconRef = useRef(null);
  const particlesRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 100,
          rotationX: -15,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.1,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: `${skill.level}%`,
          duration: 1.5,
          delay: index * 0.1 + 0.5,
          ease: "power2.out",
        }
      );

      gsap.to(iconRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.1,
      });

      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle) => {
          gsap.to(particle, {
            y: -20,
            x: Math.random() * 40 - 20,
            opacity: 0,
            duration: 2 + Math.random(),
            repeat: -1,
            delay: Math.random() * 2,
            ease: "power2.out",
          });
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, [skill.level, index]);

  const handleMouseEnter = () => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        scale: 1.05,
        rotationY: 5,
        z: 50,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(iconRef.current, {
        scale: 1.2,
        rotation: 360,
        duration: 0.5,
        ease: "back.out(1.7)",
      });

      gsap.to(glowRef.current, {
        opacity: 1,
        scale: 1.2,
        duration: 0.3,
      });

      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, i) => {
          gsap.to(particle, {
            scale: Math.random() * 0.5 + 0.5,
            opacity: 1,
            duration: 0.3,
            delay: i * 0.05,
          });
        });
      }
    }, cardRef);
  };

  const handleMouseLeave = () => {
    const ctx = gsap.context(() => {
      gsap.to(cardRef.current, {
        scale: 1,
        rotationY: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(iconRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
      });

      gsap.to(glowRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.3,
      });
    }, cardRef);
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ "--skill-color": skill.color }}
    >
      <div ref={glowRef} className={styles.glow}></div>

      <div ref={particlesRef} className={styles.particles}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>

      <div className={styles.cardInner}>
        <div className={styles.header}>
          <div ref={iconRef} className={styles.icon}>
            <img style={{width: "100%", height: "100%", borderRadius: "15px", objectFit: "cover"}} src={skill.icon} alt={skill.name} />
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>{skill.name}</h3>
            <p className={styles.description}>{skill.description}</p>
          </div>
        </div>

     

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>Proficiency</span>
            <span className={styles.statValue}>
              {skill.level >= 90
                ? "Expert"
                : skill.level >= 75
                ? "Advanced"
                : "Intermediate"}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.border}></div>
    </div>
  );
}
