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

import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../components/interactives/BackToTopButton";

export default function Index() {
  return (
    <div>
      <Navbar LightMode={false} />
      <Hero appDownloadButtons={false} />
      <Features
        defaultFeature={false}
        button={false}
        modalWithCards={false}
        paragraphs={true}
        sixCards={false}
        paragraphsModal={false}
      />
      <About modal={true} />
      {/* <AboutInstagram
        socialPrint={true}
        instagram={true}
        facebook={false}
        linkedin={true}
        x={false}
        test={true}
      /> */}
      <Cta />
      <Steps />
      <Faq />
      <FooterSocial
        addres={false}
        instagram={false}
        facebook={false}
        linkedin={false}
        x={false}
        obs={false}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </div>
  );
}
