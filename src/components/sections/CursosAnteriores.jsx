import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import CardHeroCursos from "../cards/CardHero";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import cursosContent from "../../content/contentCursos";
import contentCursos from "../../content/contentCursos";

export default function CursosMinistrados() {
  return (
    <div>
      <SectionArea className="bg-bgSectionDark">
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle={cursosContent.texts.cursosMinistrados.miniTag}
            sectionHeaderTitle={cursosContent.texts.cursosMinistrados.title}
            sectionHeaderSubtitle={cursosContent.texts.cursosMinistrados.subtitle}
            color=""
          />
          <MotionDivDownToUp>
            <div className="flex justify-center w-full">
              <div className="flex flex-col w-full gap-8 ">
                <div className="flex flex-col items-center gap-4 tablet1:flex-row tablet1:items-start desktop1:flex-row desktop1:items-start desktop1:justify-evenly">
                  <CardHeroCursos
                    imageUrl={contentCursos.texts.cursosMinistrados.card1.imageUrl}
                    title={contentCursos.texts.cursosMinistrados.card1.title}
                    date={contentCursos.texts.cursosMinistrados.card1.date}
                    description={contentCursos.texts.cursosMinistrados.card1.description}
                    button={false}
                  />

                  <CardHeroCursos
                     imageUrl={contentCursos.texts.cursosMinistrados.card2.imageUrl}
                     title={contentCursos.texts.cursosMinistrados.card2.title}
                     date={contentCursos.texts.cursosMinistrados.card2.date}
                     description={contentCursos.texts.cursosMinistrados.card2.description}
                    button={false}
                  />

                  <CardHeroCursos
                     imageUrl={contentCursos.texts.cursosMinistrados.card3.imageUrl}
                     title={contentCursos.texts.cursosMinistrados.card3.title}
                     date={contentCursos.texts.cursosMinistrados.card3.date}
                     description={contentCursos.texts.cursosMinistrados.card3.description}
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
