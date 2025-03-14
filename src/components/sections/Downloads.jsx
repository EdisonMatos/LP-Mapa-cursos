import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { FaWhatsapp } from "react-icons/fa";
import DocumentButtonFeatureCard from "../cards/CardDocuments";
import Doc from "../../assets/imgs/docs/docs.png";

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
            miniTitle="Downloads"
            sectionHeaderTitle="Faça o Upload dos arquivos"
            sectionHeaderSubtitle="Tenha acesso aos arquivos utilizados nas aulas para acompanhar em tempo real com o instrutor."
            color="dark"
          />

          <div className="flex flex-wrap gap-4 justify-center w-full ">
            <DocumentButtonFeatureCard
              img={Doc}
              title="Título do Card"
              paragraph="Este é um parágrafo de exemplo dentro do card."
              className="w-full desktop1:w-auto"
            />
            <DocumentButtonFeatureCard
              img={Doc}
              title="Título do Card"
              paragraph="Este é um parágrafo de exemplo dentro do card."
              className="w-full desktop1:w-auto"
            />
            <DocumentButtonFeatureCard
              img={Doc}
              title="Título do Card"
              paragraph="Este é um parágrafo de exemplo dentro do card."
              className="w-full desktop1:w-auto"
            />
            <DocumentButtonFeatureCard
              img={Doc}
              title="Título do Card"
              paragraph="Este é um parágrafo de exemplo dentro do card."
              className="w-full desktop1:w-auto"
            />
            <DocumentButtonFeatureCard
              img={Doc}
              title="Título do Card"
              paragraph="Este é um parágrafo de exemplo dentro do card."
              className="w-full desktop1:w-auto"
            />
            <DocumentButtonFeatureCard
              img={Doc}
              title="Título do Card"
              paragraph="Este é um parágrafo de exemplo dentro do card."
              className="w-full desktop1:w-auto"
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
