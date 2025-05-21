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
            miniTitle={contentLp01.subscription.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={contentLp01.subscription.sectionHeader.title}
            sectionHeaderSubtitle={
              contentLp01.subscription.sectionHeader.subtitle
            }
            color=""
          />

          <SectionWrapper>
            <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
              <div className="flex flex-wrap items-start justify-center w-full gap-[40px]">
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-white rounded-xl w-full tablet1:w-[40%]">
                  <CardModal
                    title={cursosDataBase.inscricao.card1.title}
                    valor={cursosDataBase.inscricao.card1.valor}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  />
                  {modal && (
                    <Button
                      size="small"
                      label={cursosDataBase.inscricao.card1.buttonLabel}
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
                      icon={cursosDataBase.inscricao.card1.icon}
                    />
                  )}
                </MotionDivDownToUp>

                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-white rounded-xl w-full tablet1:w-[40%]">
                  <CardModal
                    title={cursosDataBase.inscricao.card2.title}
                    valor={cursosDataBase.inscricao.card2.valor}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  />
                  {modal && (
                    <Button
                      size="small"
                      label={cursosDataBase.inscricao.card2.buttonLabel}
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
                      icon={cursosDataBase.inscricao.card2.icon}
                    />
                  )}
                </MotionDivDownToUp>

                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px] bg-white rounded-xl w-full tablet1:w-[40%]">
                  <CardModal
                    title={cursosDataBase.inscricao.card3.title}
                    valor={cursosDataBase.inscricao.card3.valor}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                  />
                  {modal && (
                    <Button
                      size="small"
                      label={cursosDataBase.inscricao.card3.buttonLabel}
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
                      icon={cursosDataBase.inscricao.card3.icon}
                    />
                  )}
                </MotionDivDownToUp>
              </div>
            </div>
            <div className="w-full">
              <p className="text-white text-paragraph2 desktop2:text-paragraph4 mt-[26px] tablet1:mt-[40px] desktop1:mt-[72px] text-center">{cursosDataBase.inscricao.paragrafoRodape}</p>
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
