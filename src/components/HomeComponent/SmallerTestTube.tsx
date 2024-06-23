import React, { useState, useEffect } from "react";

const SmallerTestTube = () => {
  const [val, setVal] = useState("")
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue =
        document.documentElement.scrollTop + document.body.scrollTop;
  
      if (scrollValue < 1800) {
        setVal("");
      } else {

        setVal("M-411.43798828125,-165 C-411.43798828125,-165 -411.31201171875,-120.75 -411.31201171875,-120.75 C-411.31201171875,-120.75 -412.56298828125,-115.25 -403.68798828125,-113.875 C-394.81298828125,-112.5 125,-57.875 125,-57.875 C125,-57.875 130.625,-57.125 132,-61.125 C133.375,-65.125 131.20199584960938,-67.38800048828125 128.03900146484375,-69.3270034790039 C115.75,-75.25 -5.572000026702881,-126.82499694824219 -7.688000202178955,-127.81199645996094 C-14.25,-130.87399291992188 -15.937000274658203,-131.25 -19.937000274658203,-128.25 C-25.25200080871582,-124.26399993896484 -275.875,96.5 -275.875,96.5"); // Update as needed
      }
  
      const path = document.getElementById("svgId") as SVGPathElement | null;
  
        if (path && scrollValue >= 1800 && scrollValue <= 2000) {
          const pathLength = path.getTotalLength();
          path.style.strokeDasharray = pathLength.toString();
          path.style.strokeDashoffset = pathLength.toString();
  
          const scrollPercentage = ((scrollValue - 1800) / (2000 - 1800)) * 100;
  
          const drawLength = (pathLength * scrollPercentage) / 100;
          path.style.strokeDashoffset = (pathLength - drawLength).toString();
        } else if ( path && scrollValue >= 2000) {
          path.style.strokeDasharray = "1107.42px";
          path.style.strokeDashoffset = "0px";
        }
      
    };
  
    window.addEventListener("scroll", handleScroll);
  

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  




  return (
    <svg

      viewBox="0 0 550 279"
      width="550"
      height="279"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "90%",
        height: "80%",
        transform: "translate3d(0px, 0px, 0px)",
        contentVisibility: "visible",
      }}
    >
      <defs>
        <clipPath id="__lottie_element_6">
          <rect width="100%" height="100%" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_6)">
        <g
          transform="matrix(1,0,0,1,416.875,173.5)"
          opacity="1"
          style={{ display: "block" }}
        >
          <g
            opacity="1"
            transform="matrix(1,0,0,1,-411.6239929199219,-168.37399291992188)"
          >
            <path
              fill="rgb(43,37,51)"
              fillOpacity="1"
              d="M0,-5.250999927520752 C2.898026943206787,-5.250999927520752 5.250999927520752,-2.898026943206787 5.250999927520752,0 C5.250999927520752,2.898026943206787 2.898026943206787,5.250999927520752 0,5.250999927520752 C-2.898026943206787,5.250999927520752 -5.250999927520752,2.898026943206787 -5.250999927520752,0 C-5.250999927520752,-2.898026943206787 -2.898026943206787,-5.250999927520752 0,-5.250999927520752z"
            ></path>
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,548.875,442.12298583984375)"
          opacity="1"
          style={{ display: "block" }}
        >
          <g
            opacity="1"
            transform="matrix(1,0,0,1,-411.6239929199219,-168.37399291992188)"
          >
            <path
              fill="rgb(43,37,51)"
              fillOpacity="1"
              d="M0,-5.250999927520752 C2.898026943206787,-5.250999927520752 5.250999927520752,-2.898026943206787 5.250999927520752,0 C5.250999927520752,2.898026943206787 2.898026943206787,5.250999927520752 0,5.250999927520752 C-2.898026943206787,5.250999927520752 -5.250999927520752,2.898026943206787 -5.250999927520752,0 C-5.250999927520752,-2.898026943206787 -2.898026943206787,-5.250999927520752 0,-5.250999927520752z"
            ></path>
          </g>
        </g>
        <g
          transform="matrix(1,0,0,1,416.5,173.5)"
          opacity="0.2"
          style={{ display: "block" }}
        >
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(43,37,51)"
              strokeOpacity="1"
              strokeWidth="1"
              d="M-411.43798828125,-165 C-411.43798828125,-165 -411.31201171875,-120.75 -411.31201171875,-120.75 C-411.31201171875,-120.75 -412.56298828125,-115.25 -403.68798828125,-113.875 C-394.81298828125,-112.5 125,-57.875 125,-57.875 C125,-57.875 130.625,-57.125 132,-61.125 C133.375,-65.125 131.20199584960938,-67.38800048828125 128.03900146484375,-69.3270034790039 C115.75,-75.25 -5.572000026702881,-126.82499694824219 -7.688000202178955,-127.81199645996094 C-14.25,-130.87399291992188 -15.937000274658203,-131.25 -19.937000274658203,-128.25 C-25.25200080871582,-124.26399993896484 -275.875,96.5 -275.875,96.5"
            ></path>
          </g>
          </g>
        <g
          transform="matrix(1,0,0,1,416.5,173.5)"
          opacity="1"
          style={{ display: "block" }}
        >
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path
            id="svgId"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(43,37,51)"
              strokeOpacity="1"
              strokeWidth="1"
              d={val}
             
            ></path>
          </g>
          </g>

         
          
        </g>

    
    </svg>
  );
};

export default SmallerTestTube;