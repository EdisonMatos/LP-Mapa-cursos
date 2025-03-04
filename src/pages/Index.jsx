import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import About from "../components/sections/About";
import AboutInstagram from "../components/sections/AboutInstagram";
import Cta from "../components/sections/Cta";
import Steps from "../components/sections/Steps";
import Maps from "../components/sections/Maps";
import Faq from "../components/sections/Faq";
import FooterSocial from "../components/sections/FooterSocial";
import DefaultModals from "../components/sections/DefaultModals";
import Depoimentos from "../components/sections/DepoimentosCarousel";
import Form from "../components/sections/Form";

import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../components/interactives/BackToTopButton";

export default function Index() {
  return (
    <div>
      <Navbar LightMode={false} />
      <Hero appDownloadButtons={false} />
      <Features
        defaultFeature={false}
        imageFeatures={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      <About modal={true} />
      <Depoimentos />
      <AboutInstagram
        socialPrint={true}
        instagram={true}
        facebook={false}
        linkedin={true}
        x={false}
        test={true}
      />
      <Cta />
      <Steps />
      <Form />
      <Faq />
      <FooterSocial
        addres={true}
        instagram={true}
        facebook={false}
        linkedin={true}
        x={false}
        obs={false}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
