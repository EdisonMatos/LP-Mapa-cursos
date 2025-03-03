import FeatureImgOnBgCard from "../cards/FeatureImgOnBgCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import content from "../../content/content";

export default function FeaturesImage() {
  return (
    <SectionArea id="service" className="bg-quinary pt-[1440px] phone2:pt-[1500px] phone3:pt-[1600px] tablet1:pt-[1770px] desktop1:pt-[500px] desktop2:pt-[570px]">
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
            title="Casas"
            description="Descubra a casa dos seus sonhos!"
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card2.img}
            title="Apartamentos"
            description="Praticidade em nossos apartamentos sofisticados."
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card3.img}
            title="Terrenos"
            description="Construa a realidade que você deseja em nossos terrenos bem localizados."
          />
          <FeatureImgOnBgCard
            bgImg={content.texts.features.card4.img}
            title="Pontos Comerciais"
            description="Posicione seu negócio para o sucesso!"
          />
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
