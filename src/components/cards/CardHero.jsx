import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function CardHeroCursos(props) {
  const {
    bgImg,
    title,
    description,
    buttonLabel,
    buttonLink,
    onClick,
    buttonColor,
    bgPosition,
    imageUrl,
  } = props;

  CardHeroCursos.propTypes = {
    bgImg: PropTypes.any,
    title: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
    bgPosition: PropTypes.any,
  };

  return (
    <MotionDivDownToUp className="flex flex-wrap justify-between w-full gap-[36px] tablet1:gap-[24px] tablet1:w-[47%] desktop1:w-[300px]">
      <div className=" w-full h-[530px] bg-white rounded-[3px] flex flex-col justify-end bg-bottom bg-no-repeat bg-cover">
        <div
          className="flex items-end w-full h-full bg-transparent"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <MotionDivDownToUp className="w-full h-[230px] justify-between bg-transparent p-[20px] flex flex-col">
            <p className="font-secondFont text-paragraph3 desktop1:text-paragraph3 text-black mb-[28px]">
              {description}
            </p>
            <div className="flex justify-between">
              <Button
                removeAnchor={true}
                label="Saiba mais"
                gap="gap-0"
                buttonLink={buttonLink}
                color={buttonColor}
                className="text-white"
                sizeFeatures="px-[22px] py-[5px] rounded-[2px]"
                size="small"
                onClick={onClick}
                // icon={
                //   <svg
                //     xmlns="http://www.w3.org/2000/svg"
                //     width="16"
                //     height="16"
                //     viewBox="0 0 24 24"
                //     fill="none"
                //     stroke="currentColor"
                //     strokeWidth="2"
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     className="lucide lucide-corner-down-right"
                //   >
                //     <polyline points="15 10 20 15 15 20" />
                //     <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                //   </svg>
                // }
              />

              <Button
                removeAnchor={true}
                label="Inscrição"
                buttonLink={buttonLink}
                gap="gap-0"
                sizeFeatures="px-[22px] py-[5px] rounded-[2px]"
                color={buttonColor}
                className="text-white"
                size="small"
                onClick={onClick}
                // icon={
                //   <svg
                //     xmlns="http://www.w3.org/2000/svg"
                //     width="16"
                //     height="16"
                //     viewBox="0 0 24 24"
                //     fill="none"
                //     stroke="currentColor"
                //     strokeWidth="2"
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     className="lucide lucide-corner-down-right"
                //   >
                //     <polyline points="15 10 20 15 15 20" />
                //     <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                //   </svg>
                // }
              />
            </div>
          </MotionDivDownToUp>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
