
import Hero from "./component/hero";
import Contact from "./component/contact";
import Projects from "./component/projects";
import About from "./component/about";
import Skill from "./component/skill";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
   </div>
  );
}
