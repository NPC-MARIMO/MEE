import { About, Contact, Experience, Footer, Hero, Navbar, Projects, Skills } from "./constants";
import './App.css';
function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container" >
          <Hero/>
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
