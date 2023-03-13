import About from "../components/About";
import { Header } from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  return (
    <div className="h-max mb-5">
      <Header />
      <main className="flex flex-col justify-center items-center mt-60 mbl:mt-48">
        <WelcomeSection />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

// add animation to the titles of each section
// use the same animation as the skill blocks