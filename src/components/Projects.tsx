import DangerNet from "../assets/projects/project-dangernet.webp";
import EventPlatform from "../assets/projects/project-eventplatform.webp";
import Calculator from "../assets/projects/project-calculator.webp";
import ProjectBlock from "./ProjectBlock";
import ProjectBlockReverse from "./ProjectBlockReverse";
import SectionTitles from "./SectionTitles";

export default function Projects() {
  return (
    <section id="projects" className="projects m-12 mt-32">
      <div className="flex items-center justify-center my-5 mb-12">
        <SectionTitles title="Projects" />
      </div>
      <div className="flex flex-col gap-32">
        <ProjectBlock
          linkURL={"https://event-platform-roan-delta.vercel.app"}
          imgURL={EventPlatform}
          title={"Event Platform"}
          description={
            "Projeto no qual ganhei experiência com ReactJS, TypeScript, GraphQL e TailwindCSS"
          }
        />
        <ProjectBlockReverse
          linkURL={"https://giovanniclopes.github.com/dangernet"}
          imgURL={DangerNet}
          title={"Danger Net"}
          description={
            "Aqui você irá descobrir os mistérios e as verdades pro trás da grande internet."
          }
        />
        <ProjectBlock
          linkURL={"https://giovanniclopes.github.com/calculator"}
          imgURL={Calculator}
          title={"Calculator 2.0"}
          description={"Calculadora feita em HTML, CSS e JavaScript."}
        />
      </div>
    </section>
  );
}
