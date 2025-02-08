import { meta } from "@eslint/js";
import React, { useEffect, useState } from "react";

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME;


const ContributionGraph = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        query {
          user(login: "${USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
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
        const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
        const days = weeks.flatMap((week) => week.contributionDays);
        setContributions(days);
      } catch (error) {
        console.error("Error fetching contribution data:", error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(53, 17px)", gap: "4px" }}>
      {contributions.map((day, index) => (
        <div
          key={index}
          title={`${day.date}: ${day.contributionCount} contributions`}
          style={{
            width: "17px",
            height: "17px",
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
  );
};

export default ContributionGraph;
