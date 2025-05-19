import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCurso1 from "../../assets/imgs/hero/cursoHero1.webp";
import imgCurso2 from "../../assets/imgs/hero/cursoHero2.webp";
import imgCurso3 from "../../assets/imgs/hero/cursoHero3.webp";
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
                    buttonLink={cursosDataBase.curso.curso1.rota}
                    labelButton={cursosDataBase.curso.curso1.labelButton}
                    className=""
                  />

                  <CardHeroCursos
                    imageUrl={imgCurso3}
                    title={content.texts.proximosCursos.card2.title}
                    date={content.texts.features.card3.date}
                    description={content.texts.proximosCursos.card2.description}
                    labelButton="Em breve!"
                    buttonColor="bg-black/30"
                    className=""
                  />

                  <CardHeroCursos
                    imageUrl={imgCurso2}
                    title={content.texts.proximosCursos.card3.title}
                    date={content.texts.features.card2.date}
                    description={content.texts.proximosCursos.card3.description}
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
