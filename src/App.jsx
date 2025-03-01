import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./constants";
import "./App.css";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      setTimeout(() => {
        setStartAnimation(true);
      }); // Small delay to avoid animation overlap
    }, 3000);
  }, []);

  return (
    <>
      <main>
        <Navbar />
        <div className="container">
          {showLoading ? <Loading /> : <Hero startAnimation={startAnimation} />}
          <Experience />
          <Skills />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
