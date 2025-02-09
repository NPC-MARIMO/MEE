import styles from "../css/Button.module.css";
import gsap from "gsap";
import { useRef } from "react";

function Button({ title, style, handleSendMail}) {
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
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
    >
      <button onClick={handleSendMail} className={styles.buttonText}>{title}</button>
      <div ref={circleRef} className={styles.buttoncircle}></div>
    </div>
  );
}

export default Button;
