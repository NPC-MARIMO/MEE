import styles from "../css/Hero.module.css";
import GithubStats from "./GithubStats";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

function Hero() {
  const h3ref = useRef(null);
  const namespanref = useRef(null);
  const contriref = useRef(null);
  const starref = useRef(null);
  const reporef = useRef(null);
  const imageRef = useRef(null);
  const descriptionspanrefs = useRef([]);
  const taglineRef = useRef(null); // Add ref for the tagline

  const [isLaptop, setIsLaptop] = useState(window.innerWidth > 1024);
  const [githubStats, setGithubStats] = useState({
    contributions: 0,
    repos: 0,
    stars: 0,
    avatarUrl: "",
  });

  useEffect(() => {
    const fetchGithubStats = async () => {
      const query = `
        query {
          user(login: "${USERNAME}") {
            avatarUrl
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
            }
            repositories(ownerAffiliations: OWNER, first: 100) {
              totalCount
            }
            starredRepositories {
              totalCount
            }
          }
        }
      `;

      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GITHUB_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        setGithubStats({
          contributions:
            data.data.user.contributionsCollection.contributionCalendar
              .totalContributions,
          repos: data.data.user.repositories.totalCount,
          stars: data.data.user.starredRepositories.totalCount,
          avatarUrl: data.data.user.avatarUrl,
        });
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGithubStats();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (window.innerWidth < 1000) {
      // Do not run any animation if screen width is less than 1000px
      return;
    }
    if (isLaptop) {
      const tl = gsap.timeline();
      tl.from(h3ref.current, { ease: "power4.out", opacity: 0, y: 100 }, "a")
        .from(namespanref.current, { opacity: 0, y: 100 }, "a")
        .from(
          taglineRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "a+=0.2"
        )
        .from(descriptionspanrefs.current, {
          opacity: 0,
          y: 50,
          stagger: 0.03,
        })
        .from(contriref.current, { opacity: 0, y: 10 }, "s")
        .from(reporef.current, { opacity: 0, y: 10, delay: 0.35 }, "s")
        .from(starref.current, { opacity: 0, y: 10, delay: 0.7 }, "s")
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
          "a"
        );
    } else {
      // Mobile animations
      const tl = gsap.timeline();
      tl.from(h3ref.current, {
        ease: "power3.out",
        opacity: 0,
        y: 50,
        duration: 0.6,
      })
        .from(
          namespanref.current,
          {
            opacity: 0,
            y: 50,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          taglineRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          descriptionspanrefs.current,
          {
            opacity: 0,
            y: 30,
            stagger: 0.02,
            duration: 0.5,
          },
          "-=0.1"
        )
        .from(
          contriref.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
          },
          "-=0.1"
        )
        .from(
          reporef.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
          },
          "-=0.2"
        )
        .from(
          starref.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.4,
          },
          "-=0.2"
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
    }
  }, [isLaptop]);

  const getExactYearsDifference = (dateString) => {
    const givenDate = new Date(dateString);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - givenDate.getFullYear();
    const monthDiff = currentDate.getMonth() - givenDate.getMonth();
    const dayDiff = currentDate.getDate() - givenDate.getDate();

    // Adjust if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--;
    }

    return years;
  };

  const myAge = getExactYearsDifference("2006-08-09");

  return (
    <div className={styles.me} id="Me">
      <div className={styles.first}>
        <div>
          <h3 ref={h3ref} className={styles.title}>
            Hi, I am <span ref={namespanref}> Shivang Pandey </span>
          </h3>

          <p ref={taglineRef} className={styles.description}>
            {" "}
            - Cold and Minimal
          </p>

          <p className={styles.description}>
            {`🌕 I’m a self-taught full-stack developer working with the MERN stack and practical AI/ML. I build reliable, scalable applications with clear structure and deliberate design, and I use tools like NumPy, Pandas, TensorFlow, and scikit-learn to create data-driven solutions. My workflow is disciplined, and I’m always refining my engineering practices to deliver efficient, meaningful work.`
              .split(" ")
              .map((word, index) => (
                <span
                  key={index}
                  ref={(el) => (descriptionspanrefs.current[index] = el)}
                  style={{ display: "inline-block", marginRight: "5px" }}
                >
                  {word}
                </span>
              ))}
          </p>

          <div className={styles.container}>
            <div className={styles.stats}>
              <div ref={contriref}>
                <div></div>
                <h3>{githubStats.contributions} GitHub Contributions</h3>
              </div>
              <div ref={reporef}>
                <div></div>
                <h3>{githubStats.repos} Repositories</h3>
              </div>
              <div ref={starref}>
                <div></div>
                <h3>{githubStats.stars} Stars</h3>
              </div>
            </div>
          </div>
        </div>
        <div ref={imageRef} className={styles.circle}>
          <img src={githubStats.avatarUrl} alt="Profile" />
        </div>
      </div>
      <div className={styles.githubcontri}>
        <GithubStats />
      </div>
    </div>
  );
}

export default Hero;
