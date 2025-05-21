import contentLp01 from "../../../content/contentLp01";
import SectionArea from "../../sectionElements/SectionArea";
import SectionHeader from "../../sectionElements/SectionHeader";
import SectionWrapper from "../../sectionElements/SectionWrapper";
import FeatureCardLP from "./FeatureCardLP";
import { cursosDataBase, landingPageInfos } from "../../../content/contentCursos";

export default function WhyUs({}) {
  return (
    <>
      <SectionArea>
        <SectionWrapper>
          <SectionHeader
            miniTitle={landingPageInfos.whyUs.sectionHeader.miniTag}
            className="text-center"
            sectionHeaderTitle={landingPageInfos.whyUs.sectionHeader.title}
            color="dark"
          />
          <div className="w-full flex flex-wrap justify-evenly gap-y-[32px]">
            <FeatureCardLP
              icon={landingPageInfos.whyUs.cards.card1.icon}
              title={landingPageInfos.whyUs.cards.card1.title}
              description={landingPageInfos.whyUs.cards.card1.description}
              className="w-full tablet1:w-[45%]"
            />
            <FeatureCardLP
              icon={landingPageInfos.whyUs.cards.card2.icon}
              title={landingPageInfos.whyUs.cards.card2.title}
              description={landingPageInfos.whyUs.cards.card2.description}
              className="w-full tablet1:w-[45%]"
            />
            <FeatureCardLP
              icon={landingPageInfos.whyUs.cards.card3.icon}
              title={landingPageInfos.whyUs.cards.card3.title}
              description={landingPageInfos.whyUs.cards.card3.description}
              className="w-full tablet1:w-[45%]"
            />
            <FeatureCardLP
              icon={landingPageInfos.whyUs.cards.card4.icon}
              title={landingPageInfos.whyUs.cards.card4.title}
              description={landingPageInfos.whyUs.cards.card4.description}
              className="w-full tablet1:w-[45%]"
            />
          </div>
        </SectionWrapper>
      </SectionArea>
    </>
  );
}
