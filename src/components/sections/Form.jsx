import Paragraphs from "../sectionElements/Paragraphs";
import SectionArea from "../sectionElements/SectionArea";
import SectionTitles from "../sectionElements/SectionTitles";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionHeader from "../sectionElements/SectionHeader";
import imgPoints from "../../assets/imgs/about/points.png";
import HowItWorksCard from "../cards/HowItWorksCard";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import WhatsappForm from "../interactives/WhatsappForm";

export default function Form() {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  return (
    <SectionArea className="bg-bgSectionDark " paddingtop={false}>
      {/* <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color=""
      /> */}
      {/* <SectionShapeDiv shapeDivArrow shapeColor="text-white"/> */}
      <SectionWrapper className="flex flex-col desktop1:flex-row-reverse gap-[40px] desktop2:gap-0 desktop1:justify-between  desktop1:items-start">
        <MotionDivDownToUp className="flex-col w-full desktop1:w-[415px] desktop2:w-[485px] flex justify-center items-center ">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            miniTitle={content.texts.contactForm.minitag}
            sectionHeaderTitle={content.texts.contactForm.title}
            sectionHeaderSubtitle={content.texts.contactForm.subtitle}
            color=""
            type=""
            miniTitleBgColor={false}
          />
          <WhatsappForm />
        </MotionDivDownToUp>
        {/* //centralizar textos dos dois sectionheaders */}

        <MotionDivDownToUp className="w-full flex-col desktop1:w-[415px] desktop2:w-[485px] flex justify-center">
          <SectionHeader
            className="text-center desktop1:flex desktop1:w-full"
            // miniTitle={content.texts.formandlocation.miniTag}
            sectionHeaderTitle={content.texts.maps.title}
            sectionHeaderSubtitle={content.texts.maps.subtitle}
            color=""
            type=""
            miniTitleBgColor={false}
          />
          <div className="relative w-full h-auto bg-no-repeat bg-cover shadow-custom-opacity shadow-darker/25 desktop1:bg-center tablet1:w-full rounded-xl">
            {/* <p className="font-bold mt-[32px] mb-[16px]">
              Nos encontre no Google Maps
            </p> */}
            <div className="opacity-90">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3038891068445!2d-53.460854324083016!3d-24.955773414298356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f3d41255163be7%3A0xa84988c1eb304712!2sAv.%20Brasil%2C%206269%20-%20Centro%2C%20Cascavel%20-%20PR%2C%2085801-000!5e0!3m2!1spt-BR!2sbr!4v1741716896129!5m2!1spt-BR!2sbr"
                width="100%"
                height=""
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[10px] h-[350px] desktop1:h-[420px]"
              />

            </div>
            {/* <img
              alt="Imagem de efeito pontilhado"
              src={imgPoints}
              className="absolute opacity-30 right-[-10px] top-[20px] desktop1:right-[-40px] desktop1:top-[40px]"
            ></img> */}
          </div>
        </MotionDivDownToUp>
      </SectionWrapper>
    </SectionArea>
  );
}
