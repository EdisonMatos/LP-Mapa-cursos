import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
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
                    imageUrl={
                      cursosDataBase.curso.curso1.imgs.imgCard.imgCurso1
                    }
                    title={cursosDataBase.curso.curso1.titulo}
                    date={cursosDataBase.curso.curso1.data}
                    hora={cursosDataBase.curso.curso1.hora}
                    description={cursosDataBase.curso.curso1.subtitulo}
                    buttonLink={cursosDataBase.curso.curso1.rota}
                    labelButton={cursosDataBase.curso.curso1.labelButton}
                    className=""
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={
                      cursosDataBase.curso.curso2.imgs.imgCard.imgCurso2
                    }
                    title={cursosDataBase.curso.curso2.titulo}
                    date={cursosDataBase.curso.curso2.data}
                    hora={cursosDataBase.curso.curso2.hora}
                    description={cursosDataBase.curso.curso2.subtitulo}
                    buttonLink={cursosDataBase.curso.curso2.rota}
                    labelButton={cursosDataBase.curso.curso2.labelButton}
                    className=""
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={
                      cursosDataBase.curso.curso3.imgs.imgCard.imgCurso3
                    }
                    title={cursosDataBase.curso.curso3.titulo}
                    date={cursosDataBase.curso.curso3.data}
                    hora={cursosDataBase.curso.curso3.hora}
                    description={cursosDataBase.curso.curso3.subtitulo}
                    buttonLink={cursosDataBase.curso.curso3.rota}
                    labelButton={cursosDataBase.curso.curso3.labelButton}
                    className=""
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
