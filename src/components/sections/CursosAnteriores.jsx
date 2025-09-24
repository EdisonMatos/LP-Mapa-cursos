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
                <div className="flex flex-col items-center gap-4 tablet1:flex-row tablet1:items-start desktop1:flex-row desktop1:items-start desktop1:justify-evenly">
                  <CardHeroCursos
                    imageUrl={imgCursoAnterior1}
                    title="Execução Fiscal Municipal e Conciliação"
                    date="13 a 15 de Agosto"
                    description="A utilização dos juizados especiais da Fazenda Pública para o aumento e captação de receitas para as Prefeituras."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior2}
                    title="Processo Administrativo Disciplinar"
                    date="27 a 29 de Agosto"
                    description="As diretrizes e a uniformização da legislação municipal e federal na condução dos processos disciplinares."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior3}
                    title="Habitação e Moradia: Referência de Destaque"
                    date="17 a 19 de Setembro"
                    description="Capacitação com especialista na área em políticas eficazes de habitação e de moradia [ara populações em risco social."
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
