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
      <SectionArea paddingtop={false} className="bg-bgSectionDark">
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
                    title="STF, Prefeituras e Câmaras"
                    date="04 de dezembro de 2024"
                    description="Os reflexos e os efeitos das decisões do Judiciário no Executivo e no Legislativo no encerramento de mandato."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior2}
                    title="Atividade Parlamentar"
                    date="26 de junho de 2024"
                    description="Estrutura  daAdministração Pública e a fiscalização do Legislativo."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior3}
                    title="A Escola e o Conselho Tutelar"
                    date="02 de fevereiro de 2025"
                    description="Um elo de integração na rede de proteção e garantia de direitos da criança e do adolescente."
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
