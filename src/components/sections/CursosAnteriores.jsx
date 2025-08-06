import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgCursoAnterior1 from "../../assets/imgs/hero/cursoAnteriorHero1.jpg";
import imgCursoAnterior2 from "../../assets/imgs/hero/cursoAnteriorHero2.jpg";
import imgCursoAnterior3 from "../../assets/imgs/hero/cursoAnteriorHero3.jpg";

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
                    title="A escola e o conselho tutelar"
                    date="26 e 27 de Junho"
                    description="Atendimento, acolhimento e gerenciamos de crise de adolescentes, o elo que integra a rede de proteção e a garantia de direitos da criança e do adolescente."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior2}
                    title="1º Encontro (Decifra o Direito)"
                    date="09 a 11 de Julho"
                    description="Prefeitos, Vereadores e Servidores: conhecimento jurídico na prática."
                    button={false}
                  />

                  <CardHeroCursos
                    imageUrl={imgCursoAnterior3}
                    title="Integração Municipal ao Governo Federal"
                    date="06 a 08 de Agosto"
                    description="Projeções para arrecadação e recebimento de recursos federais."
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
