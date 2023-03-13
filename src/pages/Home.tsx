import { Header } from "../components/Header";
import Skills from "../components/Skills";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  return (
    <div className="h-max mb-5">
      <Header />
      <main className="mt-60 mbl:mt-48">
        <WelcomeSection />
        <Skills />
      </main>
    </div>
  );
}
