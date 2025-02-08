import styles from "../css/Button.module.css";
import gsap from "gsap";
import { useRef } from "react";

function Button({ title }) {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(circleRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };


  const handleMouseLeave = () => {
    gsap.to(circleRef.current, {
      scale: 0,
      duration: 0.4,
      ease: "power2.in",
    });
  };

  return (
    <div
      className={styles.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
      <p className={styles.buttonText}>{title}</p>
      <div ref={circleRef} className={styles.buttoncircle}></div>
    </div>
  );
}

export default Button;
