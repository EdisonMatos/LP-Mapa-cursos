import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { contentCursos } from "../../content/contentCursos";
import { cursosDataBase } from "../../content/contentCursos";

export default function ProximosCursos() {
  return (
    <div>
      <SectionArea className="bg-white squares">
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="Cursos"
            sectionHeaderTitle="Próximos Cursos"
            sectionHeaderSubtitle="Acompanhe nossa agenda de cursos para não perder nenhuma oportunidade"
            color="dark"
          />
          <MotionDivDownToUp>
            <div className="flex justify-center w-full">
              <div className="flex flex-col w-full gap-8 ">
                <div className="flex flex-col items-center gap-4 tablet1:flex-row tablet1:items-start desktop1:flex-row desktop1:items-start desktop1:justify-evenly">
                  <CardHeroCursos
                    imageUrl={cursosDataBase.curso.curso1.imgs.imgCard.imgCurso1}
                    title={cursosDataBase.curso.curso1.titulo}
                    date={cursosDataBase.curso.curso1.data}
                    description={cursosDataBase.curso.curso1.subtitulo}
                    buttonLink="/curso-improbidade-22-04"
                    labelButton={cursosDataBase.curso.curso1.labelButton}
                    className=""
                  />

                  {/* <CardHeroCursos
                    imageUrl={contentCursos.proximosCursos.curso2.img.imgCurso2}
                    title={contentCursos.proximosCursos.curso2.title}
                    date={contentCursos.proximosCursos.curso2.date}
                    description={
                      contentCursos.proximosCursos.curso2.description
                    }
                    labelButton={
                      contentCursos.proximosCursos.curso2.labelButton
                    }
                    buttonColor="bg-black/30"
                    className=""
                  /> */}

                  {/* <CardHeroCursos
                    imageUrl={contentCursos.proximosCursos.curso3.img.imgCurso3}
                    title={contentCursos.proximosCursos.curso3.title}
                    date={contentCursos.proximosCursos.curso3.date}
                    description={
                      contentCursos.proximosCursos.curso3.description
                    }
                    labelButton={
                      contentCursos.proximosCursos.curso2.labelButton
                    }
                    buttonColor="bg-black/30"
                    className=""
                  /> */}
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
