import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import { FaWhatsapp } from "react-icons/fa";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Structure() {
  return (
    <div>
      <SectionArea className="squares">
        <SectionShapeDiv
          shapeDivArrow={false}
          paddingbot={false}
          shapeColor="text-bgSectionDark"
        />
        <SectionWrapper>
          <SectionHeader
            className="text-center"
            miniTitle="NOSSA ESTRUTURA"
            sectionHeaderTitle="Conheça o espaço onde grandes resultados acontecem"
            sectionHeaderSubtitle="Infraestrutura planejada para oferecer conforto, agilidade e excelência em cada atendimento."
            color="dark"
          />
          <iframe
            width="90%"
            height="315"
            src="https://www.youtube.com/embed/IP-fNMy09gs"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="rounded-md"
          ></iframe>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}
