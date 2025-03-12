import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCursoAnterior1 from "../../assets/imgs/hero/cursoAnteriorHero1.webp";
import imgCursoAnterior2 from "../../assets/imgs/hero/cursoAnteriorHero2.webp";
import imgCursoAnterior3 from "../../assets/imgs/hero/cursoAnteriorHero3.webp";

export default function CursosMinistrados() {
  return (
    <div>
      <SectionArea className="bg-bgSectionDark">
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="Cursos Anteriores"
            sectionHeaderTitle="Cursos Ministrados"
            sectionHeaderSubtitle="Saiba quais cursos tivemos em nossa unidade de cursos para não perder nenhuma oportunidade"
            color=""
          />
          <MotionDivDownToUp>
            <div className="flex justify-center w-full">
              <div className="flex flex-col w-full gap-8 ">
                <div className="flex flex-col tablet1:flex-row tablet1:items-start items-center gap-4 desktop1:flex-row desktop1:items-start desktop1:justify-evenly">
                  <CardHeroCursos
                    imageUrl={imgCursoAnterior1}
                    title="Improbidade e Controle de Contas"
                    date="Data teste"
                    description="Garanta a transparência e evite irregularidades financeiras."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior2}
                    title="Licitações e Contratação"
                    date="Data teste"
                    description="Garanta eficiência e legalidade nas contratações públicas."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior3}
                    title="Lei Orgânica Municipal"
                    date="Data teste"
                    description="Garanta eficiência e legalidade nas contratações públicas."
                    button={false}
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
