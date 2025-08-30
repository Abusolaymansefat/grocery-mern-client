import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import slidericon from "../../assets/slider-icon.png";
import banner1 from "../../assets/banner.jpg";
import banner2 from "../../assets/download.jpg";
import banner3 from "../../assets/slider-1.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel() {
  const slides = [
    {
      id: 1,
      image: banner1,
      title: "Organic Vegetables",
      subtitle: "100% Healthy & Affordable",
      desc: "Small Changes Big Difference",
      layout: "left",
    },
    {
      id: 2,
      image: banner2,
      title: "Fresh Fruits",
      subtitle: "Nature’s Goodness",
      desc: "Eat Fresh, Live Better",
      layout: "right",
    },
    {
      id: 3,
      image: banner3,
      title: "Healthy Lifestyle",
      subtitle: "Farm to Table",
      desc: "Choose Organic, Choose Health",
      layout: "left",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative h-[90vh] flex items-center justify-center text-center sm:text-left"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content */}
              <div
                className={`relative z-10 px-6 flex flex-col sm:flex-row items-center sm:items-start justify-center w-full max-w-6xl gap-6 ${
                  slide.layout === "left" ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="flex-1 text-white text-center sm:text-left">
                  <img
                    src={slidericon}
                    alt="slider"
                    className="mx-auto sm:mx-0 mb-4"
                  />
                  <h3 className="text-2xl">{slide.subtitle}</h3>
                  <h1 className="text-5xl font-bold tracking-tight text-[#48B828] sm:text-7xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg font-medium text-gray-200 sm:text-xl">
                    {slide.desc}
                  </p>
                  <div className="mt-6">
                    <NavLink
                      to="/get-started"
                      className="rounded-md bg-[#48B828] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2d8515]"
                    >
                      Shop now
                    </NavLink>
                  </div>
                </div>
                {/* Optional: small image on the side */}
                <div className="flex-1 hidden sm:block">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
