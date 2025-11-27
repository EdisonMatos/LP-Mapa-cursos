import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCursoAnterior1 from "../../assets/imgs/cursos/cursoAnteriorHero1.webp";
import imgCursoAnterior2 from "../../assets/imgs/cursos/cursoAnteriorHero2.webp";
import imgCursoAnterior3 from "../../assets/imgs/cursos/cursoAnteriorHero3.webp";

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
                    imageUrl={imgCursoAnterior1}
                    title="Prefeituras: Concurso público e PSS"
                    date="15 a 17 de Outubro de 2025"
                    description="O estudo preliminar e os critérios legais para abertura dos procedimentos de contratação de funcionários."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior2}
                    title="Violência nas escolas: Desafios pedagógicos"
                    date="22 a 24 de Outubro de 2025"
                    description="A condução da gestão de crise e soluções para problemas de segurança pública que envolvam crianças e adolescentes na rede municipal."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior3}
                    title="Reformas administrativas municipais"
                    date="29 a 31 de Outubro de 2025"
                    description="A necessidade de atualização do ordenamento jurídico municipal diante dos avanços tecnológicos dos ambientes de trabalho e da gestão de serviços públicos."
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
