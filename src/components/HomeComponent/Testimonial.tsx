import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import SmallerTestTube from "./SmallerTestTube";
const Testimonial: React.FC = () => {
  const kBackground = `    <svg width="502" height="760" viewBox="0 0 502 760" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M490.555 198.4C484.155 210.4 474.555 222 461.755 233.2C449.755 243.6 438.555 250 428.155 252.4C417.755 254.8 411.355 252.8 408.955 246.4C395.355 209.6 373.355 178.4 342.955 152.8C313.355 126.4 282.155 110.8 249.355 106C216.555 101.2 190.955 104 172.555 114.4C156.555 148 160.955 183.6 185.755 221.2C207.355 254 250.555 283.2 315.355 308.8C359.355 326.4 388.555 339.2 402.955 347.2C466.955 386.4 498.155 436.8 496.555 498.4C494.955 547.2 471.755 594 426.955 638.8C345.355 719.6 252.955 734.8 149.755 684.4C91.3547 655.6 43.3547 611.2 5.75469 551.2C2.55469 545.6 3.75469 536.8 9.35469 524.8C15.7547 512.8 24.9547 501.2 36.9547 490C48.9547 478.8 60.5547 471.2 71.7547 467.2C82.9547 463.2 90.1547 464 93.3547 469.6C136.555 537.6 191.755 583.6 258.955 607.6C302.155 622.8 340.955 624.8 375.355 613.6C386.555 609.6 393.355 606 395.755 602.8C406.155 585.2 408.155 562.4 401.755 534.4C390.555 483.2 346.155 442 268.555 410.8C265.355 409.2 256.155 405.6 240.955 400C197.755 383.2 168.955 369.2 154.555 358C81.7547 305.2 57.7547 242 82.5547 168.4C92.1547 138.8 108.155 112.4 130.555 89.2C187.355 30 248.955 5.19997 315.355 14.8C356.955 20.4 394.155 37.6 426.955 66.4C459.755 94.4 483.355 128.8 497.755 169.6C500.155 176 497.755 185.6 490.555 198.4Z" fill="#FCB9B9" fill-opacity="0.1"/>
    </svg>
    `;

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center">
        <button onClick={previous} className="text-3xl text-black">&lt;</button>
        <button onClick={next} className="text-3xl text-black">&gt;</button>
      </div>
    );
  };


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 200 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const sliderImageUrl = [
    {
      url: "data:image/jpeg;base64,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",
      description: 'Hello world'
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRvbwooYLVyPME3XwqUXENDXhbgMx3oUsN_g&usqp=CAU",
    },
    {
      url: "data:image/jpeg;base64,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",
    },
    {
      url: "data:image/jpeg;base64,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",
    },
  ];


  return (
    <>
      <div className="w-full mt-10 sm:mt-20 pb-10">
        <h1 className=" text-[1.2rem] sm:text-[2rem] font-bold text-center">
          Client Testimonials
        </h1>
      </div>

      <div
        className="w-[95%] m-auto flex bg-blue-50 rounded-lg py-10 lg:py-36"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            kBackground
          )}")`,

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      >
        <div className="w-[100%] lg:w-[50%] m-auto">
          <div className="w-[50%] sm:w-[60%]  m-auto">
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              arrows={false}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              customButtonGroup={<ButtonGroup />}>
              {sliderImageUrl.map((imageUrl, index) => {
                return (
                  <>
                    <img
                      src={imageUrl.url}
                      alt="image"
                      className="sm:h-[9rem] p-5 rounded-full "
                    />
                    {console.log(index)}
                  </>
                );
              })}
            </Carousel>
            <div className="flex justify-center flex-col items-center p-4">
              <h3 className="font-bold">K. E. BRICK</h3>
              <p className="w-48 text-center text-[11px]">
                Working with KSW TechZone was a game-changer for our business. Their dedication to delivering top-notch solutions is unparalleled.
              </p>
              <Link to='/contact' className="mt-10">
                <button className="py-2 px-3 bg-[#EFF569] rounded-md font-semibold hover:bg-yellow-300">Contact us</button>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-full lg:block lg:w-[50%]">
          <SmallerTestTube />
        </div>
      </div>
    </>
  );
};

export default Testimonial;
