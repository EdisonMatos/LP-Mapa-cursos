import PropTypes from "prop-types";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function CardHeroCursos(props) {
  const {
    bgImg,
    title,
    description,
    date,
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
    date: PropTypes.any,
    description: PropTypes.any,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string,
    buttonColor: PropTypes.any,
    onClick: PropTypes.func,
    bgPosition: PropTypes.any,
  };

  return (
    <MotionDivDownToUp className="flex justify-center w-full ">
      <div className="max-w-[350px] tablet1:max-w-[400px] desktop2:max-w-[320px] bg-white flex py-3 px-2 phone2:py-4 phone2:px-3 desktop1:py-3 desktop1:px-2 rounded-[10px]">
        <div className="flex flex-col gap-4 w-full desktop2:p-[4px]">
          <img className="rounded-[10px]" src={imageUrl} alt="" />
          {/* paragrafo */}
          <div className="flex flex-col w-full h-full ">
            <p className=" text-black/50 text-paragraph2">{date}</p>
            <h1 className="text-title1 leading-[27px] font-medium mt-[2px] mb-[12px] ">
              {title}
            </h1>
            <p className="text-paragraph2 desktop2:text-paragraph3 mb-[32px] text-black/60 leading-[18px] desktop1:leading-[21px]  ">
              {description}
            </p>

            <div className="flex ">
              <Button
                removeAnchor={true}
                label="Inscreva-se"
                buttonLink={buttonLink}
                color={buttonColor}
                className="text-white"
                size="small"
                onClick={onClick}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-corner-down-right"
                  >
                    <polyline points="15 10 20 15 15 20" />
                    <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
