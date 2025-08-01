import { useEffect, useState } from "react";
import ContributionGraph from "./ContributionGraph";

const GithubStats = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("Window width:", window.innerWidth);
      setWidth(window.innerWidth);
    };

    // Log initial width
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {/* Other Stats */}
      {width > 800? (
        <div
          style={{
            padding: "20px",
            backgroundColor: "#0d1117",
            color: "#c9d1d9",
          }}
        >
          <ContributionGraph />
        </div>
      ) : null}
    </div>
  );
};

export default GithubStats;
