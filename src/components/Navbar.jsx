import { useGSAP } from "@gsap/react";
import { Button } from "../constants";
import styles from "../css/Navbar.module.css";
import gsap from "gsap";
import { useRef } from "react";

function Navbar() {
  const navlinks = ["Me", "Experience", "About", "Project", "Contact"];
  const liRefs = useRef([]); // Store refs in an array

  const animate = (index) => {
    const [li1, li2] = liRefs.current[index]; // Get refs for the hovered link
    useGSAP(() => {
      let tl = gsap.timeline();
      tl.to(li1, {
        transform: "rotateX(0deg)",
        duration: 0.4,
      }).to(
        li2,
        {
          transform: "rotateX(-90deg)",
          duration: 0.4,
        },
        "<" // Synchronize both animations
      );
    });
  };

  return (
    <nav className={styles.container}>
      <div className={styles.leftsmall} ></div>
      <div className={styles.left}>
        <div className={styles.logo}></div>
        <ul>
          {navlinks.map((link, index) => {
            liRefs.current[index] = liRefs.current[index] || [
              useRef(null),
              useRef(null),
            ];
            return (
              <li key={index} onMouseEnter={() => animate(index)}>
                <span ref={liRefs.current[index][0]}>{link}</span>
                <span ref={liRefs.current[index][1]}>{link}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.right}>
        <Button title="Let's Talk" />
      </div>
    </nav>
  );
}

export default Navbar;
