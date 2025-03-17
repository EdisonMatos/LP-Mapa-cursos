import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { FaWhatsapp } from "react-icons/fa";
import DocumentButtonFeatureCard from "../cards/CardDocuments";
import Doc from "../../assets/imgs/docs/docs.png";
import negativaTrabalhista from "../../assets/imgs/pdfs/negativaTrabalhista.pdf";
import negativaTCU from "../../assets/imgs/pdfs/negativaTCU.pdf";
import negativaPrefeituraCascavel from "../../assets/imgs/pdfs/negativaPrefeituraCascavel.pdf";
import negativaParana from "../../assets/imgs/pdfs/negativaParana.pdf";
import negativaFGTS from "../../assets/imgs/pdfs/negativaFGTS.pdf";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function DownloadArchives() {
  return (
    <div>
      <SectionArea className="bg-neutral-100">
        <SectionShapeDiv
          shapeDivArrow={false}
          paddingbot={false}
          shapeColor="text-bgSectionDark"
        />
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="DOWNLOADS"
            sectionHeaderTitle="Acessos Documentais"
            sectionHeaderSubtitle="Acesse e baixe facilmente os documentos oficiais de negativa com total transparência e praticidade."
            color="dark"
          />

          <div className="flex flex-wrap gap-4 justify-center w-full ">
            <DocumentButtonFeatureCard
              img={Doc}
              title="Negativa Trabalhista"
              paragraph="Confirma a ausência de pendências trabalhistas registradas em nome."
              link={negativaTrabalhista}
              className="w-full desktop1:w-auto"
            />
            <DocumentButtonFeatureCard
              img={Doc}
              title="Negativa TCU"
              paragraph="Atesta que não existem pendências com o TCU."
              link={negativaTCU}
              className="w-full desktop1:w-auto"
            />
            {/* <DocumentButtonFeatureCard
              img={Doc}
              title="Negativa Receita Federal"
              paragraph="Comprova que não há débitos com a Receita Federal."
              className="w-full desktop1:w-auto"
            /> */}
            <DocumentButtonFeatureCard
              img={Doc}
              title="Negativa Prefeitura Cascavel"
              paragraph="Confirma que não há pendências com a Prefeitura de Cascavel."
              link={negativaPrefeituraCascavel}
              className="w-full desktop1:w-auto"
            />
            <DocumentButtonFeatureCard
              img={Doc}
              title="Negativa Prefeitura Paraná"
              paragraph="Atesta que não existem pendências com a Prefeitura do Paraná."
              linl={negativaParana}
              className="w-full desktop1:w-auto"
            />
            {/* <DocumentButtonFeatureCard
              img={Doc}
              title="Negativa Menores Empregados"
              paragraph="Comprova que não há irregularidades no emprego de menores."
              className="w-full desktop1:w-auto"
            /> */}
            <DocumentButtonFeatureCard
              img={Doc}
              title="Negativa FGTS"
              paragraph="Confirma a regularidade do FGTS sem pendências registradas."
              link={negativaFGTS}
              className="w-full desktop1:w-auto"
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
