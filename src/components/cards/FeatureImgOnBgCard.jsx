import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";

export default function FeatureImgOnBgCard(props) {
  const { bgImg, title, description } = props;

  FeatureImgOnBgCard.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
  };

  return (
    <MotionDivDownToUp className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] tablet1:w-[47%] desktop1:w-[22%]">
      <div
        className="w-full h-[464px] rounded-2xl flex flex-col justify-end bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="flex items-end w-full h-full bg-black bg-opacity-10 rounded-2xl">
          <MotionDivDownToUp className="w-full h-auto bg-white rounded-2xl mx-[10px] mb-[10px] p-[20px] flex flex-col">
            <h1 className="text-title1 leading-[20px] font-medium font-mainFont mb-[12px]">
              {title}
            </h1>
            <p className="text-paragraph2 font-mainFont desktop2:text-paragraph3 text-black/40 leading-[18px] desktop1:leading-[18px]">
              {description}
            </p>
          </MotionDivDownToUp>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
