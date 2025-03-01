import { useState, useEffect, useRef } from "react";
import styles from "../css/Loading.module.css";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  const imgref = useRef(null)
  const loadingref = useRef([])
  const titlerefs = useRef([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) return null; // Remove the component from the DOM

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(imgref.current, {
      y: 150,
      duration: 0.7,
      ease: "power3.out",
    }).from(titlerefs.current,{
      x : -200,
      ease: "power3.out",
      duration : .7
    }).from(loadingref.current, {
      width: 0,
      ease: "power3.out",
      stagger : .5
    })
      
    
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div>
          <div className={styles.imagecontainer}>
            <img
              ref={imgref}
              className={styles.logo}
              src="https://raw.githubusercontent.com/NPC-MARIMO/mypf/refs/heads/main/src/assets/logo.png"
              alt=""
            />
          </div>
          <div className={styles.loadingtitlecontainer}>
            <h3 ref={ el => titlerefs.current[0] = el } className={styles.loadingtext}>Web & App</h3>
            <h3 ref={ el => titlerefs.current[1] = el } className={styles.loadingtext}>Developer</h3>
          </div>
        </div>
        <div ref={ el => loadingref.current[0] = el } className={styles.loadingcontainer}>
          <div ref={ el => loadingref.current[1] = el } className={styles.loading}></div>
        </div>
      </div>
    </div>
  );
}
