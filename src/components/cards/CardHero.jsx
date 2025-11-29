import { useNavigate } from "react-router-dom";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import Button from "../interactives/Button";

export default function CardHeroCursos({
  imageUrl,
  title,
  date,
  hora,
  className = "", // Adicionando className como propriedade
  description,
  buttonLink,
  buttonColor,
  labelButton,
  onClick,
  button = true, // Define true como padrão
}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    window.open(buttonLink, "_blank");
    if (onClick) {
      onClick();
    }
  };

  return (
    <MotionDivDownToUp className="flex justify-center w-fit m-auto">
      <div
        className={`w-[90%] tablet1:max-w-[300px] desktop2:max-w-[360px] bg-white flex p-5 shadow-xl rounded-[10px] justify-start items-start ${className}`}
      >
        <div className="flex flex-col gap-4 w-full desktop2:p-[4px]">
          <img className="rounded-[10px]" src={imageUrl} alt={title} />
          <div className="flex flex-col w-full h-full">
            <p className="text-black/50 text-paragraph2">
              {date} {hora}
            </p>
            <h1 className="text-title1 leading-[27px] font-medium mt-[2px] mb-[12px]">
              {title}
            </h1>
            <p className="text-paragraph2 desktop2:text-paragraph3 mb-[8px] text-black/60 leading-[18px] desktop1:leading-[21px]">
              {description}
            </p>

            {button && ( // Só renderiza o botão se button for true
              <div className="flex">
                <Button
                  target="_blank"
                  removeAnchor={true}
                  label={labelButton}
                  color={buttonColor}
                  className="text-white"
                  size="small"
                  onClick={handleButtonClick}
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
            )}
          </div>
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
