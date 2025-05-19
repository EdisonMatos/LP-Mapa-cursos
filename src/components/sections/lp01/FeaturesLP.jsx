import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";
import { cursosDataBase } from "../../../content/contentCursos";

export default function FeaturesLP({ className }) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={contentLp01.features.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentLp01.features.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={cursosDataBase.landingPage.programacao.card1.icon}
              title={cursosDataBase.landingPage.programacao.card1.titulo}
              description={
                cursosDataBase.landingPage.programacao.card1.subtitulo
              }
              className="w-full tablet1:w-[60%]"
            />
            <FeatureCardLP
              icon={cursosDataBase.landingPage.programacao.card2.icon}
              title={cursosDataBase.landingPage.programacao.card2.titulo}
              description={
                cursosDataBase.landingPage.programacao.card2.subtitulo
              }
              className="w-full tablet1:w-[60%]"
            />
            <FeatureCardLP
              icon={cursosDataBase.landingPage.programacao.card3.icon}
              title={cursosDataBase.landingPage.programacao.card3.titulo}
              description={
                cursosDataBase.landingPage.programacao.card3.subtitulo
              }
              className="w-full tablet1:w-[60%]"
            />
            <FeatureCardLP
              icon={cursosDataBase.landingPage.programacao.card4.icon}
              title={cursosDataBase.landingPage.programacao.card4.titulo}
              description={
                cursosDataBase.landingPage.programacao.card4.subtitulo
              }
              className="w-full tablet1:w-[60%]"
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
