"use client";
import Image from "next/image";
import Slider from "react-slick";

function ImageSlider() {
  const settings = {
    className: "center",
    // centerMode: true,
    centerPadding: "90px",
    slidesToShow: 1,
    speed: 400,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container mb-8">
      <Slider {...settings}>
        <div>
          <Image
            src={"/img/2.jpg"}
            alt="image 1"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/img/2.jpg"}
            alt="image 1"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/img/2.jpg"}
            alt="image 1"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={"/img/2.jpg"}
            alt="image 1"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: "2rem" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginLeft: "2rem", zIndex: "2" }}
      onClick={onClick}
    />
  );
}
