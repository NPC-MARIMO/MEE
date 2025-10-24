import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./constants";
import "./App.css";
import Loading from "./components/Loading";
import JSONLD from "./components/JSONLD"; // <-- import here
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
      {/* JSON-LD goes here at top level */}
      <JSONLD />

      <main>
        <Navbar />
        <div className="container">
          <Hero />
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
