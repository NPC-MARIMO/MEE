import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

const ContributionGraph = () => {
  const [weeks, setWeeks] = useState([]);
  const weekRefs = useRef([]); // Array of refs for each week (row)

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        query {
          user(login: "${USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
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
        setWeeks(data.data.user.contributionsCollection.contributionCalendar.weeks);
      } catch (error) {
        console.error("Error fetching contribution data:", error);
      }
    };

    fetchContributions();
  }, []);

  useEffect(() => {
    if (weekRefs.current.length > 0) {
      gsap.fromTo(
        weekRefs.current,
        { opacity: 0,  },
        { opacity: 1,  stagger: 0.01, ease: "power2.out", duration: 0.3 }
      );
    }
  }, [weeks]);

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {weeks.map((week, weekIndex) => (
        <div 
          key={weekIndex} 
          ref={(el) => (weekRefs.current[weekIndex] = el)}
          style={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          {week.contributionDays.map((day, dayIndex) => (
            <div
              key={dayIndex}
              title={`${day.date}: ${day.contributionCount} contributions`}
              style={{
                width: window.innerWidth < 1000 ? "8px" : window.innerWidth < 1500 ? "12px" : "17px",
                height: window.innerWidth < 1000 ? "8px" : window.innerWidth < 1500 ? "12px" : "17px",
                backgroundColor: day.contributionCount > 0 ? day.color : "#161b22",
                borderRadius: "3px",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContributionGraph;
