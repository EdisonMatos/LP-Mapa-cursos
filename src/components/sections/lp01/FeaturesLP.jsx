import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";
import { contentCursos } from "../../../content/contentCursos";
import { cursosDataBase } from "../../../content/contentCursos";

export default function FeaturesLP({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentCursos.cursosProgramados.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={
              contentCursos.cursosProgramados.sectionHeader.title
            }
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={cursosDataBase.curso.curso1.landingPage.programacao.card1.icon}
              title={cursosDataBase.curso.curso1.landingPage.programacao.card1.titulo}
              description={cursosDataBase.curso.curso1.landingPage.programacao.card1.subtitulo}
              className="w-full tablet1:w-[60%]"
            />
            <FeatureCardLP
              icon={contentCursos.cursosProgramados.card2.icon}
              title={contentCursos.cursosProgramados.card2.title}
              description={contentCursos.cursosProgramados.card2.description}
              className="w-full tablet1:w-[60%]"
            />
            <FeatureCardLP
              icon={contentCursos.cursosProgramados.card3.icon}
              title={contentCursos.cursosProgramados.card3.title}
              description={contentCursos.cursosProgramados.card3.description}
              className="w-full tablet1:w-[60%]"
            />
            <FeatureCardLP
              icon={contentCursos.cursosProgramados.card4.icon}
              title={contentCursos.cursosProgramados.card4.title}
              description={contentCursos.cursosProgramados.card4.description}
              className="w-full tablet1:w-[60%]"
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
