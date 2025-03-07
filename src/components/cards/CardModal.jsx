import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Button from "../interactives/Button";

export default function CardModal(props) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };
  const { icon, title, valor, paragraph, className, children } = props;

  return (
    <div className="">
      <div
        className={`max-w-[350px] min-h-[150px] p-0 flex flex-col items-center desktop1:p-0 ${className}`}
      >
        {/* <div className="h-[64px] w-[64px] mb-[24px] rounded-md flex justify-center items-center text-primary">
          {icon}
        </div> */}
        <h1 className="h-auto font-bold font-mainFont text-title1 text-center mb-[16px] text-primary">
          {title}
        </h1>{" "}
        <p className="text-center text-black opacity-70 font-mainFont w-[90%] pb-4">
          {paragraph}
        </p>
        <h4 className="h-auto font-bold font-mainFont text-title1 text-center mb-[16px] text-primary">
          {valor}
        </h4>
        
        {children}
      </div>
      <Dialog
        className="font-secondFont"
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
      >
        <h3>{modalSubtitle}</h3>
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </div>
  );
}
