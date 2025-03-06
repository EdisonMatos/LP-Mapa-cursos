import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import imgVideoMockup from "../../assets/imgs/hero/videomockup.jpg";
import MotionDivRightToLeft from "../animation/MotionDivRightToLeft";
import MotionDivLeftToRight from "../animation/MotionDivLeftToRight";
import CardHeroCursos from "../cards/CardHero";
import imgCurso1 from "../../assets/imgs/hero/cursoHero1.webp";
import imgCurso2 from "../../assets/imgs/hero/cursoHero2.webp";
import imgCurso3 from "../../assets/imgs/hero/cursoHero3.webp";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

export default function Hero({ appDownloadButtons }) {
  return (
    <div
      className="w-full bg-center bg-cover font-mainFont"
      id="home"
      style={{
        backgroundImage: `url(${content.texts.hero.bgImg})`,
      }}
    >
      <div className="relative z-10 flex w-full bg-black bg-opacity-0 items-left">
        <div className="w-full text-secondary justify-evenly">
          <div className="h-[125px] desktop3:h-[140px]" />
          <div className="flex flex-col-reverse gap-[40px]  desktop1:flex-row desktop1:justify-between mx-auto w-[90%] max-w-[1000px] items-center pb-[64px] pt-[40px] desktop1:pt-[68px] desktop1:pb-[96px]">
            <div className="flex  flex-col w-full desktop1:w-[60%] desktop1:mr-[20px]">
              {/* <MotionDivDownToUp>
                <div className="flex justify-center w-auto text-center desktop1:justify-start desktop1:text-left font-secondFont text-paragraph4">
                  <p className="mb-[16px] bg-bgSectionDark text-white bg-opacity-100 rounded-md px-[16px] py-[6px] inline-block text-paragraph2">
                    {content.texts.hero.miniTag}
                  </p>
                </div>
              </MotionDivDownToUp> */}
              <MotionDivDownToUp>
                <div className="text-lighter flex justify-center desktop1:justify-start font-bold leading-[40px] phone3:leading-[42px] tablet1:leading-[70px] desktop1:leading-[60px] desktop2:leading-[65px] text-center desktop1:text-left text-title4 phone2:text-title5 phone3:text-title5 tablet1:text-title7 [text-shadow:_2px_3px_0_rgb(0_0_0_/_50%)]">
                  <h1 className="">{content.texts.hero.title}</h1>
                </div>
              </MotionDivDownToUp>
              <MotionDivDownToUp>
                <div className="flex justify-center w-full text-center desktop1:text-left desktop1:justify-start font-secondFont text-paragraph4 phone3:text-paragraph5">
                  <p className="text-lighter mb-[32px] opacity-100 ">
                    {content.texts.hero.subtitle}
                  </p>
                </div>
              </MotionDivDownToUp>
              <div className="w-full phone2:w-full tablet2:w-auto">
                {/* <div className="flex justify-center w-full desktop1:justify-start mb-[32px]">
                  <Button
                    aria-label={content.texts.hero.ctaButtonAriaLabel}
                    label={content.texts.hero.ctaButtonText}
                    buttonLink={whatsappContactLink}
                    animation
                    className="w-[100%] text-white"
                    icon={<FaWhatsapp size={24} />}
                  />
                </div> */}
                <MotionDivDownToUp>
                  <div className="flex justify-center desktop1:justify-start">
                    <div className="flex flex-col items-center desktop1:flex-row text-primary">
                      {content.texts.hero.obsHero.icon}
                      <p className="text-white opacity-100 ml-[10px] text-center mt-[12px] desktop1:mt-0">
                        {content.texts.hero.obsHero.text}
                      </p>
                    </div>
                  </div>
                </MotionDivDownToUp>
                {appDownloadButtons && (
                  <MotionDivDownToUp>
                    <div className="flex flex-col items-center desktop1:items-start">
                      <p className="mb-[20px] mt-[60px] text-lighter opacity-80 text-center">
                        {content.texts.hero.app.description}
                      </p>
                      <div className="">
                        {" "}
                        <div className="flex items-start gap-[20px]">
                          <a
                            href={content.texts.hero.app.imgs.appStore.link}
                            target="_blank"
                            className="transition hover:scale-110 opacity-80 invert"
                          >
                            <img
                              src={content.texts.hero.app.imgs.appStore.img}
                              alt={content.texts.hero.app.imgs.appStore.alt}
                              className=""
                            />
                          </a>
                          <a
                            href={content.texts.hero.app.imgs.playStore.link}
                            target="_blank"
                            className="transition hover:scale-110 opacity-80 invert"
                          >
                            <img
                              src={content.texts.hero.app.imgs.playStore.img}
                              alt={content.texts.hero.app.imgs.playStore.alt}
                              className=""
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </MotionDivDownToUp>
                )}
              </div>
            </div>
            <div className="flex justify-center w-[90%] tablet1:w-[450px] desktop1:w-[42%] desktop2:w-[42.8%]">
              <MotionDivDownToUp className="relative flex justify-end w-full ">
                {/* <div
                  className="bg-top rounded-xl w-full h-[350px] tablet1:h-[380px] desktop1:h-[500px] desktop1:w-[500px] bg-cover bg-no-repeat shadow-custom-opacity shadow-black/30"
                  style={{
                    backgroundImage: `url(${content.texts.hero.heroImg})`,
                    backgroundSize: "",
                  }}
                ></div> */}
              </MotionDivDownToUp>
            </div>
          </div>
          <MotionDivDownToUp>
            <div className="h-[200px] relative flex justify-center">
              <div className="bg-bgSectionDark flex justify-between rounded-2xl h-fit w-[90%] max-w-[1215px] relative top-[-50px] p-[30px]">
                {/* <div className="w-[40%] flex flex-col  text-white">
                  <span className="font-bold leading-10 text-title5">
                    {" "}
                    <MotionDivLeftToRight>Nossos Cursos</MotionDivLeftToRight>
                  </span>
                  <br />
                  <br />
                  <MotionDivLeftToRight>
                    Fundado com o propósito de qualificar agentes públicos e
                    fortalecer a administração pública, o Mapa Cursos se tornou
                    referência na capacitação de profissionais que atuam
                    diretamente na gestão e na governança do país.{" "}
                  </MotionDivLeftToRight>
                  <br />
                  <MotionDivLeftToRight>
                    Com sede em Cascavel - PR, a instituição já tem anos de
                    experiência no mercado de ensino e presta assessoria e
                    treinamento para servidores efetivos e comissionados,
                    vereadores, prefeitos, secretários, procuradores e
                    assessores políticos.
                  </MotionDivLeftToRight>
                  <Button
                    aria-label={content.texts.hero.ctaButtonAriaLabel}
                    label={content.texts.hero.ctaButtonText}
                    buttonLink={whatsappContactLink}
                    animation
                    className="w-[100%] text-white mt-[30px] "
                    icon={<FaWhatsapp size={24} />}
                  />
                </div>
                <div className="w-[50%] h-fit ">
                  <MotionDivRightToLeft>
                    <img
                      className="w-full rounded-2xl"
                      src={imgVideoMockup}
                    ></img>
                  </MotionDivRightToLeft>
                </div> */}
                <div className="w-full flex flex-col gap-8 ">
                  <h1 className="flex text-title1 tablet1:text-title4 text-center text-white font-mainFont justify-center">
                    Próximos Cursos
                  </h1>
                  <div className="flex flex-col desktop1:flex-row items-center gap-8 desktop1:justify-evenly">
                    <CardHeroCursos
                      imageUrl={imgCurso1}
                      title={content.texts.features.card1.title}
                      date={content.texts.features.card1.date}
                      description="Capacitar os agentes públicos para um melhor controle e desenvolvimento da função pública, buscando a eficiência e modernização da gestão pública municipal."
                      className=""
                    />

                    <CardHeroCursos
                      imageUrl={imgCurso2}
                      title={content.texts.features.card2.title}
                      date={content.texts.features.card2.date}
                      description="Capacitar os profissionais no entendimento e na gestão eficiente dos processos relacionados à remuneração de servidores públicos."
                      className=""
                    />

                    <CardHeroCursos
                      imageUrl={imgCurso3}
                      title={content.texts.features.card3.title}
                      date={content.texts.features.card3.date}
                      description="O curso visa demonstrar as regras de utilização do Fundeb, as regras de formação e origem do recurso, além do correto cumprimento dos índices."
                      className=""
                    />
                  </div>
                  <div>
                    <a className="flex justify-center text-white text-p" href="">Ver todos os Cursos</a>
                  </div>
                </div>
              </div>
            </div>
          </MotionDivDownToUp>
        </div>
      </div>
    </div>
  );
}
