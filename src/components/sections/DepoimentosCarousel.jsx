import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "antd";
import "../../index.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import imgTestimonial1 from "../../assets/imgs/testimonials/depoiment1.png";
import imgTestimonial2 from "../../assets/imgs/testimonials/depoiment2.png";
import imgTestimonial3 from "../../assets/imgs/testimonials/depoiment3.png";

const Depoimentos = () => {
  const responsiveOptions = [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const defaultSettings = {
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  //função para as telas acima de 3000px
  const currentSettings = () => {
    const width = window.innerWidth;
    if (width > 3000) return defaultSettings;
    return (
      responsiveOptions.find((option) => width <= option.breakpoint)
        ?.settings || defaultSettings
    );
  };

  const carouselRef = useRef(null); // Referência para o carrossel
  const autoplaySpeed = 25000;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 100 / (autoplaySpeed / 100)
      );
    }, 20);
    return () => clearInterval(interval);
  }, [autoplaySpeed]);

  useEffect(() => {
    if (progress >= 100) {
      carouselRef.current.next();
      setProgress(0);
    }
  }, [progress]);

  const handleBeforeChange = () => {
    setProgress(0);
  };

  // Funções para controlar as setas
  const goToPrevSlide = () => {
    carouselRef.current.prev();
  };

  const goToNextSlide = () => {
    carouselRef.current.next();
  };

  return (
    <div className="bg-bgSectionDark">
      <div className="w-[90%] m-auto py-[64px] desktop1:py-[96px] max-w-[1215px]">
        <div className="carousel-container" style={{ position: "relative" }}>
          <div
            onClick={goToPrevSlide}
            style={{
              position: "absolute",
              top: "40%",
              left: "-10px",
              transform: "translateY(-50%)",
              fontSize: "32px",
              color: "#fff",
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            <LeftOutlined />
          </div>

          <div
            onClick={goToNextSlide}
            style={{
              position: "absolute",
              top: "40%",
              right: "-10px",
              transform: "translateY(-50%)",
              fontSize: "32px",
              color: "#fff",
              zIndex: 10,
              cursor: "pointer",
            }}
          >
            <RightOutlined />
          </div>

          <Carousel
            ref={carouselRef}
            dots={true}
            {...currentSettings()}
            responsive={responsiveOptions}
            beforeChange={handleBeforeChange}
            autoplay={false}
            className="mb-[80px]"
          >
            <div className="carousel-item">
              <img src={imgTestimonial1} alt="Testimonial 1" />
            </div>
            <div className="carousel-item">
              <img src={imgTestimonial2} alt="Testimonial 2" />
            </div>
            <div className="carousel-item">
              <img src={imgTestimonial3} alt="Testimonial 3" />
            </div>
          </Carousel>

          {/* Barra de progresso */}
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;
