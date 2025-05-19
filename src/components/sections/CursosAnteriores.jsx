import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCursoAnterior1 from "../../assets/imgs/hero/cursoAnteriorHero1.webp";
import imgCursoAnterior2 from "../../assets/imgs/hero/cursoAnteriorHero2.webp";
import imgCursoAnterior3 from "../../assets/imgs/hero/cursoAnteriorHero3.webp";
import { contentCursos } from "../../content/contentCursos";

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
                <div className="flex flex-col items-center gap-4 tablet1:flex-row tablet1:items-start desktop1:flex-row desktop1:items-start desktop1:justify-evenly">
                  <CardHeroCursos
                    imageUrl={
                      contentCursos.cursosMinistrados.curso1.img
                        .imgCursoAnterior1
                    }
                    title={contentCursos.cursosMinistrados.curso1.title}
                    date={contentCursos.cursosMinistrados.curso1.date}
                    description={
                      contentCursos.cursosMinistrados.curso1.description
                    }
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={
                      contentCursos.cursosMinistrados.curso2.img
                        .imgCursoAnterior2
                    }
                    title={contentCursos.cursosMinistrados.curso2.title}
                    date={contentCursos.cursosMinistrados.curso2.date}
                    description={
                      contentCursos.cursosMinistrados.curso2.description
                    }
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={
                      contentCursos.cursosMinistrados.curso3.img
                        .imgCursoAnterior3
                    }
                    title={contentCursos.cursosMinistrados.curso3.title}
                    date={contentCursos.cursosMinistrados.curso3.date}
                    description={
                      contentCursos.cursosMinistrados.curso3.description
                    }
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
