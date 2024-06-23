import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function WeProvides() {
  const svgBackground = `<svg width="303" height="363" viewBox="0 0 303 363" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 151.5C0 67.8289 67.8289 0 151.5 0H303V363H11C4.92487 363 0 358.075 0 352V151.5Z" fill="url(#paint0_linear_8_167)"/>
    <defs>
    <linearGradient id="paint0_linear_8_167" x1="-62" y1="437.5" x2="299.5" y2="2.09604e-06" gradientUnits="userSpaceOnUse">
    <stop offset="0.00819229" stop-color="#43D1DA"/>
    <stop offset="1" stop-color="#FF649C" stop-opacity="0"/>
    </linearGradient>
    </defs>
    </svg>
    `;

  const kBackground = `    <svg width="778" height="1206" viewBox="0 0 778 1206" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M97.9414 102C98.9414 90 105.441 75.9999 117.441 59.9999C129.441 43.9999 141.941 31.9999 154.941 23.9999C167.941 14.9999 178.441 9.49993 186.441 7.49996C204.441 2.49996 212.941 7.99995 211.941 23.9999L156.441 649.5L687.441 49.5C700.441 34.5 714.441 23 729.441 14.9999C745.441 5.99995 757.441 3.49995 765.441 7.49996C773.441 10.5 775.441 19 771.441 33C767.441 45.9999 758.441 60.4999 744.441 76.5L411.441 453L753.441 1093.5C757.441 1100.5 755.441 1112 747.441 1128C739.441 1143 727.941 1157 712.941 1170C697.941 1184 683.441 1193 669.441 1197C655.441 1202 646.441 1200.5 642.441 1192.5L309.441 568.5L147.441 751.5L115.941 1104C114.941 1115 108.441 1128.5 96.4414 1144.5C84.4414 1160.5 71.9414 1173 58.9414 1182C45.9414 1191 35.4414 1196.5 27.4414 1198.5C9.44141 1203.5 0.941408 1198 1.94141 1182L97.9414 102Z" fill="#FCB9B9" fill-opacity="0.1"/>
    </svg>`;


  const [leftSvg, setLeftSvg] = useState('');
  const [rightSvg, setRightSvg] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue =
        document.documentElement.scrollTop + document.body.scrollTop;

      if (scrollValue < 1100) {
        setLeftSvg('');
        setRightSvg('');
      }
      else {
        setLeftSvg('M281,71.25 C281,71.25 165,334.875 165,334.875');
        setRightSvg("M281,71.25 C281,71.5 165,400 165,400")
      }

      const pathLeft = document.getElementById("pathLeft") as SVGPathElement | null;
      const pathRight = document.getElementById("pathRight") as SVGPathElement | null;
      1
      if (pathLeft && pathRight && scrollValue >= 1100 && scrollValue <= 1300) {
        const pathLengthLeft = pathLeft.getTotalLength();
        pathLeft.style.strokeDasharray = pathLengthLeft.toString();
        pathLeft.style.strokeDashoffset = pathLengthLeft.toString();

        const pathLengthRight = pathRight.getTotalLength();
        pathRight.style.strokeDasharray = pathLengthRight.toString();
        pathRight.style.strokeDashoffset = pathLengthRight.toString();

        const scrollPercentage = ((scrollValue - 1100) / (1300 - 1100)) * 100;

        const drawLengthLeft = (pathLengthLeft * scrollPercentage) / 100;
        const drawLengthRight = (pathLengthRight * scrollPercentage) / 100;

        pathLeft.style.strokeDashoffset = (pathLengthLeft - drawLengthLeft).toString();
        pathRight.style.strokeDashoffset = (pathLengthRight - drawLengthRight).toString();
      } else if (pathLeft && pathRight && scrollValue >= 1300) {
        pathLeft.style.strokeDasharray = "1107.42px";
        pathLeft.style.strokeDashoffset = "0px";

        pathRight.style.strokeDasharray = "1107.42px";
        pathRight.style.strokeDashoffset = "0px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="w-full mt-10 sm:mt-20">
        <h1 className=" text-[1.2rem] sm:text-[2rem] font-bold text-center">
          We Provides
        </h1>
      </div>

      <div
        className=" w-full sm:w-[80%] md:w-full lg:w-[80%] m-auto p-10 grid grid-cols-1 lg:gap-0 md:grid-cols-2 place-items-center sm:mt-16 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            kBackground
          )}")`,
        }}
      >
        <div className="desktop:order-1 order-2">
          <div className="w-72 h-72   relative top-4 ">
            <div>
              <div className="w-16 h-16 bg-blue-300 rounded-full absolute left-[40%] p-3">
                <Link to='#'><img src="/public/weProvidesIcon/global.png" alt="" /></Link>
              </div>
            </div>
            <div>
              <div className="w-16 h-16 bg-gray-300 rounded-full absolute left-0 top-24 p-3">
                <Link to='#'><img src="/public/weProvidesIcon/react.png" alt="" /></Link>
              </div>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-300 rounded-full absolute left-32 top-28 p-3">
                <Link to='#'><img src="/public/weProvidesIcon/react.png" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:order-2 order-1 p-8 ">
          <div
            className="sm:w-[65vh]   sm:h-72 w-[80vw] h-52 pr-2  flex justify-center flex-col sm:items-start small:items-center   bg-contain bg-right bg-no-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
                svgBackground
              )}")`,
            }}
          >
            <h1 className="text-[1.2rem] sm:text-[1.5rem] font-medium">Web Devlopment</h1>
            <p className="text-[0.8rem] sm:text-[1rem] text-justify">
              Unleash the potential of your business with our cutting-edge web development solutions. Our expert developers craft dynamic and responsive websites that captivate your audience.
            </p>
          </div>
        </div>

        <div className="order-3 md:pl-8 lg:pl-0">
          <div className="sm:w-[65vh] sm:h-72 w-[80vw] h-52  md:pl-6 lg:pl-0   flex justify-center flex-col  sm:items-start small:items-center">
            <h1 className="text-[1.2rem] sm:text-[1.5rem] font-medium">
              Digital Marketing & Social Media Handling
            </h1>
            <p className="text-[0.8rem] sm:text-[1rem] text-justify">
              Digital marketing promotes products online through various channels. Social media handling involves managing and leveraging platforms like Facebook, Instagram and others for effective online engagement.
            </p>
          </div>
        </div>

        <div className="order-4">
          <div className="w-72 h-72  relative">
            <div className="w-72 h-44 pt-6  border-2  flex justify-around  ">
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4 ">
                  <Link to='#'>
                    <img src="/weProvidesIcon/instagram.png" alt="icon" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4 ">
                  <Link to='#'>
                    <img src="/weProvidesIcon/facebook.png" alt="icon" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4 ">
                  <Link to='#'>
                    <img src="/weProvidesIcon/twitter.png" alt="icon" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4 ">
                  <Link to='#'>
                    <img src="/weProvidesIcon/facebook.png" alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-56 h-20  border-2 border-black  flex justify-around items-center absolute top-[6rem] left-[12%] ">
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4 ">
                  <Link to='#'>
                    <img src="/weProvidesIcon/facebook.png" alt="icon" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4 ">
                  <Link to='#'>
                    <img src="/weProvidesIcon/facebook.png" alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-56 h-20 border-2  flex justify-around items-center absolute left-[12%] ">
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4 ">
                  <Link to='#'>
                    <img src="/weProvidesIcon/facebook.png" alt="icon" />
                  </Link>
                </div>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-300 rounded-full p-4">
                  <Link to='#'>
                    <img src="/weProvidesIcon/facebook.png" alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:order-5 order-6">
          <div className="w-80 h-72 relative">
            <div>
              <div className="w-16 h-16 bg-blue-300 rounded-full absolute left-[40%] p-4">
                <Link to='#'><img src="/public/weProvidesIcon/headphone.png" alt="icon" /></Link>
              </div>
            </div>
            <div>
              <svg viewBox="0 0 852 319" className="absolute top-1 left-16 ">

                <g opacity="0.2" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="rgb(235, 13, 13)"
                    stroke-opacity="1"
                    stroke-width='2'
                    transform="scale(1, 4) rotate(50,281, 5)"




                    d="M281,71.25 C281,71.25 165,334.875 165,334.875"
                  />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    id="pathLeft"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="rgb(235, 13, 13)"
                    stroke-opacity="1"
                    stroke-width='2'
                    transform="scale(1, 4) rotate(50,281, 5)"




                    d={leftSvg}
                  />
                </g>

              </svg>
            </div>
            <div>
              <svg viewBox="0 0 852 319" className="absolute top-[55px] left-[80px] ">

                <g opacity="0.2" transform="matrix(1,0,0,1,0,0)">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="rgb(235, 13, 13)"
                    stroke-opacity="1"
                    stroke-width='6'
                    transform="scale(1, 1) rotate(-45, 281, 5)"
                    d="M281,71.25 C281,71.5 165,400 165,400"
                  />

                </g>
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    id="pathRight"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    fill-opacity="0"
                    stroke="rgb(235, 13, 13)"
                    stroke-opacity="1"
                    stroke-width='6'
                    transform="scale(1, 1) rotate(-45, 281, 5)"
                    d={rightSvg}
                  />

                </g>

              </svg>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-300 rounded-full absolute left-12 top-24 p-4" >
                <Link to='#'><img src="/public/weProvidesIcon/headphone.png" alt="icon" /></Link>
              </div>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-300 rounded-full absolute left-[139px] top-36 p-4">
                <Link to='#'><img src="/public/weProvidesIcon/headphone.png" alt="icon" /></Link>
              </div>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-300 rounded-full absolute left-52 top-36 p-4">
                <Link to='#'><img src="/public/weProvidesIcon/headphone.png" alt="icon" /></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="md:order-6 order-5">
          <div className="sm:w-[65vh] sm:h-72 w-[80vw] h-52 pr-2 flex justify-center  flex-col ">
            <h1 className="text-[1.2rem] sm:text-[1.5rem] font-medium">
              IT Consultant & Training
            </h1>
            <p className="text-[0.8rem] sm:text-[1rem] text-justify">
              Navigate the complex digital landscape with confidence. Our IT consulting and Training services provide strategic insights, helping you make informed decisions for your business growth.
            </p>
          </div>
        </div>
      </div>

      <Link to='/services' className="w-full grid place-items-center">
        <button className="py-2 px-3 bg-[#EFF569] hover:bg-yellow-300 font-semibold rounded-md cursor-pointer">All Services</button>

      </Link>


    </>
  );
}
