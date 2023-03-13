import { Header } from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  return (
    <div className="h-max mb-5">
      <Header />
      <main className="mt-60 mbl:mt-48">
        <WelcomeSection />
      </main>
    </div>
  );
}
