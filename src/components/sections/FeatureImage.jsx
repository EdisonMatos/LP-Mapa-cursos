import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";

export default function FeaturesImage() {
  return (
    <SectionArea id="service" className="bg-quinary pt-[1650px] phone2:pt-[1680px] phone3:pt-[1780px] tablet1:pt-[1950px] desktop1:pt-[600px] desktop2:pt-[650px]">
      <SectionHeader
        className="text-center"
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        color="dark"
      />
      <SectionWrapper>
        <div className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px]">
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card1.img}
            title={content.texts.features.card1.title}
            description={content.texts.features.card1.subtitle}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card2.img}
            title={content.texts.features.card2.title}
            description={content.texts.features.card2.subtitle}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card3.img}
            title={content.texts.features.card3.title}
            description={content.texts.features.card3.subtitle}
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card4.img}
            title={content.texts.features.card4.title}
            description={content.texts.features.card4.subtitle}
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
