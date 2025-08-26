import { Button, Logo, Logo2 } from "../constants";
import styles from "../css/Navbar.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navlinks = ["Me", "About", "Project", "Contact"];
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const logoref = useRef(null);
  const ulref = useRef(null);
  const buttonref = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(
      logoref.current,
      {
        duration: 1,
        ease: "power4.out",
        scale: 0,
        opacity: 0,
      },
      "a"
    )
      .from(
        ulref.current,
        {
          width: 0,
          scale: 0,
        },
        "a"
      )
      .from(buttonref.current, {
        opacity : 0,
        duration : 1
      },'a');
  });

  return (
    <nav className={styles.container}>
      <div className={styles.leftsmall}>
        <img
          style={{ width: 55, height: 55, inset: "0", borderRadius: "50%" }}
          src={Logo2}
          alt=""
        />
      </div>
      <div className={styles.left}>
        <div ref={logoref} className={styles.logo}>
          <img
            style={{ width: 75, height: 75, borderRadius: "50%" }}
            src={Logo2}
            alt=""
          />
        </div>
        <ul ref={ulref}>
          {navlinks.map((link, index) => (
            <li key={index}>
              <a href={`#${link}`} onClick={(e) => handleClick(e, link)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.right}>
        <Button
          buttonref={buttonref}
          title="Commune"
          params="Contact"
          handleSendMail={(e) => handleClick(e, "Contact")}
        />
      </div>
    </nav>
  );
}

export default Navbar;
