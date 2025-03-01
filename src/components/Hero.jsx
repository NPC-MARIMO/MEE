import styles from "../css/Hero.module.css";
import GithubStats from "./GithubStats";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

function Hero({ startAnimation }) {
  const h3ref = useRef(null);
  const namespanref = useRef(null);
  const contriref = useRef(null);
  const starref = useRef(null);
  const reporef = useRef(null);
  const imageRef = useRef(null);
  const descriptionspanrefs = useRef([]);

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
    if (isLaptop) {
      if (startAnimation) {
        const tl = gsap.timeline();
        tl.from(h3ref.current, { ease: "power4.out", opacity: 0, y: 100 }, "a")
          .from(namespanref.current, { opacity: 0, y: 100 }, "a")
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
      }
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

  const myAge = getExactYearsDifference("2007-08-09");

  return (
    <div className={styles.me} id="Me">
      <div className={styles.first}>
        <div>
          <h3 ref={h3ref} className={styles.title}>
            Hi, I am <span ref={namespanref}> Shivang Pandey </span>
          </h3>

          <p className={styles.description}>
            {`I'm a self-taught MERN Full-Stack Developer, who's passionate about building creative projects, And I'm ${myAge} years old.`
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
