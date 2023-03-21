import ProjectBlock from "./ProjectBlock";
import ProjectBlockReverse from "./ProjectBlockReverse";
import SectionTitles from "./SectionTitles";

import DangerNet from "../assets/projects/project-dangernet.webp";
import EventPlatform from "../assets/projects/project-eventplatform.webp";
import Calculator from "../assets/projects/project-calculator.webp";
import Nordician2 from "../assets/projects/project-nordician2.webp";
import EdgeLine from "../assets/projects/project-edgeline.webp";

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
          linkURL={"https://nordician2.vercel.app"}
          imgURL={Nordician2}
          title={"Nordician"}
          description={
            "Olá viajante, bem vinda(o) ao site Nordician. Aqui forneço diversos artigos para quem busca por informações sobre a cultura nórdica. Contendo artigos sobre o mundo real, e sobre o mundo místico."
          }
        />
        <ProjectBlock
          linkURL={"https://giovanniclopes.github.com/edgeline"}
          imgURL={EdgeLine}
          title={"EdgeLine"}
          description={"Protótipo de website de vendas de HQs."}
        />
        <ProjectBlockReverse
          linkURL={"https://giovanniclopes.github.com/dangernet"}
          imgURL={DangerNet}
          title={"Danger Net"}
          description={
            "Aqui você irá descobrir os mistérios e as verdades pro trás da grande internet."
          }
        />
      </div>
    </section>
  );
}
