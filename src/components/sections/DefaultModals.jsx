import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ServicesModal from "./ServicesModal";
import SectionShapeDiv from "../sectionElements/SectionShapeDiv";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import contentLp01 from "../../content/contentLp01";
import CardModal from "../cards/CardModal";
import WhatsappForm from "../interactives/WhatsappForm";
import "../../index.css";
import FormCard1 from "../interactives/FormsCards/FormCard1";
import FormCard2 from "../interactives/FormsCards/Form2";
import FormCard3 from "../interactives/FormsCards/FormCard3";
import { contentCursos } from "../../content/contentCursos";
import { cursosDataBase } from "../../content/contentCursos";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function DefaultModals({ modal = "true" }) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };
  return (
    <div
      className="bg-scroll bg-black bg-center bg-cover desktop1:bg-fixed bg-opacity-80"
      style={{
        backgroundImage: `url(${contentLp01.about.bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black bg-opacity-80">
        <SectionArea id="service">
          <SectionShapeDiv
            shapeDivArrow={false}
            shapeColor="text-bgSectionDark"
            paddingbot={false}
          />
          <SectionHeader
            miniTitle={contentCursos.subscription.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentCursos.subscription.sectionHeader.title}
            sectionHeaderSubtitle={
              contentCursos.subscription.sectionHeader.subtitle
            }
            color=""
          />

          <SectionWrapper>
            <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
              <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-white rounded-xl w-full tablet1:w-[40%]">
                  <CardModal
                    title={cursosDataBase.curso.curso1.landingPage.inscricao.card1.title}
                    valor={cursosDataBase.curso.curso1.landingPage.inscricao.card1.valor}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  />
                  {modal && (
                    <Button
                      size="small"
                      label={cursosDataBase.curso.curso1.landingPage.inscricao.card1.buttonLabel}
                      onClick={() =>
                        onClick(
                          <div>
                            <h1 className="text-title3">
                              Preencha o Formulário
                            </h1>
                            <br />
                            <div className="w-full ">
                              <FormCard1 className="w-full h-full" />
                            </div>
                          </div>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>

                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-white rounded-xl w-full tablet1:w-[40%]">
                  <CardModal
                    title=""
                    valor=""
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  />
                  {modal && (
                    <Button
                      size="small"
                      label=""
                      onClick={() =>
                        onClick(
                          <div>
                            <h1 className="text-title3">
                              Preencha o Formulário
                            </h1>
                            <br />
                            <div className="w-full ">
                              <FormCard2 className="w-full h-full" />
                            </div>
                          </div>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>

                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-white rounded-xl w-full tablet1:w-[40%]">
                  <CardModal
                    title=""
                    valor=""
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  />
                  {modal && (
                    <Button
                      size="small"
                      label=""
                      onClick={() =>
                        onClick(
                          <div>
                            <h1 className="text-title3">
                              Preencha o Formulário
                            </h1>
                            <br />
                            <div className="w-full ">
                              <FormCard3 className="w-full h-full" />
                            </div>
                          </div>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>
              </div>
            </div>
            <div className="w-full">
              <p>{contentCursos.subscription.paragraphs}</p>
            </div>
          </SectionWrapper>
        </SectionArea>

        <Dialog
          className="font-secondFont"
          header={modalTitle}
          visible={visible}
          onHide={() => setVisible(false)}
          style={{ width: "50vw" }}
          breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
        ></Dialog>
      </div>
    </div>
  );
}
