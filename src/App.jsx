import "./App.css";

import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <More />
    </>
  );
};

export default App;
