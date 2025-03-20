import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCurso1 from "../../assets/imgs/hero/cursoHero1.webp";
import imgCurso2 from "../../assets/imgs/hero/cursoHero2.webp";
import imgCurso3 from "../../assets/imgs/hero/cursoHero3.webp";

export default function ProximosCursos() {
  return (
    <div>
      <SectionArea className="bg-bgSectionDark">
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="Cursos"
            sectionHeaderTitle="Próximos Cursos"
            sectionHeaderSubtitle="Acompanhe nossa agenda de cursos para não perder nenhuma oportunidade"
            color=""
          />
          <MotionDivDownToUp>
            <div className="flex justify-center w-full">
              <div className="flex flex-col w-full gap-8 ">
                <div className="flex flex-col tablet1:flex-row tablet1:items-start items-center gap-4 desktop1:flex-row desktop1:items-start desktop1:justify-evenly">
                  <CardHeroCursos
                    imageUrl={imgCurso1}
                    title="Improbidade e Controle de Contas"
                    date={content.texts.features.card1.date}
                    description="Garanta a transparência e evite irregularidades financeiras."
                    buttonLink="/curso-improbidade-22-04"
                    labelButton="Saiba mais"
                    className=""
                  />

                  <CardHeroCursos
                    imageUrl={imgCurso2}
                    title="Licitações e Contratação"
                    date={content.texts.features.card2.date}
                    description="Garanta eficiência e legalidade nas contratações públicas."
                    labelButton="Em breve!"
                    buttonColor="bg-black/30"
                    className=""
                  />

                  <CardHeroCursos
                    imageUrl={imgCurso3}
                    title="A integração dos poderes na Gestão Pública"
                    date={content.texts.features.card3.date}
                    description="Fortaleça a governança com colaboração entre os poderes."
                    labelButton="Em breve!"
                    buttonColor="bg-black/30"
                    className=""
                  />
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
