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
    <MotionDivDownToUp className="flex w-full h-[100%] justify-center ">
      <div className="max-w-[350px] tablet1:max-w-[400px] desktop2:max-w-[300px] bg-white flex  p-2 rounded-md">
        <div className="flex flex-col gap-6 w-full justify-between">
            <img className="rounded-md" src={imageUrl} alt="" />
          {/* paragrafo */}
          <p className="">{description}</p>

          {/* botões */}

          <div className="flex justify-between  ">
            <Button
              removeAnchor={true}
              label="Saiba mais"
              gap="gap-0"
              buttonLink={buttonLink}
              color={buttonColor}
              className="text-white"
              sizeFeatures="px-[10px] phone2:px-[20px] phone3:px-[30px] tablet1:px-[40px] desktop1:px-[15px] desktop2:px-[22px] py-[5px] rounded-[2px]"
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
              sizeFeatures="px-[15px] phone2:px-[25px] phone3:px-[35px] tablet1:px-[45px] desktop1:px-[20px] desktop2:px-[27px] py-[5px] rounded-[2px]"
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
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
