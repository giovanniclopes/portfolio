import ProjectBlock from "./ProjectBlock";
import ProjectBlockReverse from "./ProjectBlockReverse";
import SectionTitles from "./SectionTitles";

import DangerNet from "../assets/projects/project-dangernet.webp";
import EventPlatform from "../assets/projects/project-eventplatform.webp";
import Nordician2 from "../assets/projects/project-nordician2.webp";
import EdgeLine from "../assets/projects/project-edgeline.webp";
import Vibrance from "../assets/projects/project-vibrance.webp";

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
            linkURL={
              "https://www.figma.com/proto/UFZMwTJIpG2yoSA7GgTFAD/Vibrance?page-id=0%3A1&node-id=1-3&viewport=819%2C316%2C0.15&scaling=min-zoom&starting-point-node-id=351%3A599"
            }
            imgURL={Vibrance}
            title={"Vibrance"}
            description={
              "Vibrance é um site fictício de vendas online, onde é possível comprar livros físicos e digitais."
            }
          />
        <ProjectBlockReverse
          linkURL={"https://giovanniclopes.github.io/dangernet/"}
          imgURL={DangerNet}
          title={"Danger Net"}
          description={
            "Aqui você irá descobrir os mistérios e as verdades pro trás da grande internet."
          }
        />
          <ProjectBlock
            linkURL={"https://giovanniclopes.github.io/EdgeLine/"}
            imgURL={EdgeLine}
            title={"EdgeLine"}
            description={"Protótipo de website de vendas de HQs."}
          />
      </div>

      <div className="flex flex-row items-center justify-end gap-4 mt-7">
        <a
          href="https://github.com/giovanniclopes?tab=repositories&type=source"
          target="_blank"
        >
          <div className="text-xl border-2 border-red-500 p-3 px-9 rounded cursor-pointer transition-all hover:bg-red-500">
            Ver todos os projetos...
          </div>
        </a>
      </div>
    </section>
  );
}
