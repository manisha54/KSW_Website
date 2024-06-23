import { useState, useEffect } from "react";

const FirstTestTube = () => {
  const [val, setVal] = useState<string>(
    
  );

  useEffect(() => {

    const handleScroll = () => {
      const scrollValue =
        document.documentElement.scrollTop + document.body.scrollTop;
      const minScrollValue = 30;
      const maxScrollValue = 400;
  
      if (scrollValue < 30) {
       setVal('');
      } else {
        setVal("M -411.969 -164.25 C -411.969 -164.25 -411.969 -69.375 -411.969 -69.375 C -411.969 -69.375 -413.219 -63.875 -404.344 -62.5 C -395.469 -61.125 375.875 53.5 375.875 53.5 C 375.875 53.5 381.375 55.5 385 50.875 C 388.625 46.25 497.5 -106.125 497.5 -106.125 C 497.5 -106.125 499 -110.125 498.125 -112.625 C 497.25 -115.125 494 -117.75 487.5 -116.375 C 481 -115 -496.625 96.375 -496.625 96.375 C -496.625 96.375 -502 98.375 -502 103.125 C -502 107.875 -502 164.875 -502 164.875")
      }
  
      const scrollPercentage = Math.min(
        ((scrollValue - minScrollValue) / (maxScrollValue - minScrollValue)) * 100,
        100
      );
  
      const path = document.getElementById("pathId") as SVGPathElement | null;
  
      if (path) {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = pathLength.toString();
        const drawLength = (pathLength * scrollPercentage) / 100;
        path.style.strokeDashoffset = (pathLength - drawLength).toString();
      }
    };
  
    // Attach the event listener
    window.addEventListener("scroll", handleScroll);
  
    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  
  }, []); // Empty dependency array means this effect will only run once on component mount
  

  return (
   <>
   <div className=" w-[80%] h-[60vh] pl-12 flex items-end  absolute  bottom-0">
   <svg
     viewBox="0 0 1007 347"
     height="65%"
      preserveAspectRatio="xMidYMid meet"
  
    >
      <defs>
        <clipPath id="__lottie_element_19">
          <rect width="1007" height="347" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_19)">
        <g transform="matrix(1,0,0,1,507.25,173.5)" opacity="1">
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
        <g transform="matrix(1,0,0,1,416.875,509.8740234375)" opacity="1">
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
        <g transform="matrix(1,0,0,1,507.5,173.5)" opacity="0.2">
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path
              strokeLinecap="butt"
              strokeLinejoin="miter"
              fillOpacity="0"
              strokeMiterlimit="4"
              stroke="rgb(43,37,51)"
              strokeOpacity="1"
              strokeWidth="1"
              d="M-411.968994140625,-164.25 C-411.968994140625,-164.25 -411.968994140625,-69.375 -411.968994140625,-69.375 C-411.968994140625,-69.375 -413.218994140625,-63.875 -404.343994140625,-62.5 C-395.468994140625,-61.125 375.875,53.5 375.875,53.5 C375.875,53.5 381.375,55.5 385,50.875 C388.625,46.25 497.5,-106.125 497.5,-106.125 C497.5,-106.125 499,-110.125 498.125,-112.625 C497.25,-115.125 494,-117.75 487.5,-116.375 C481,-115 -496.625,96.375 -496.625,96.375 C-496.625,96.375 -502,98.375 -502,103.125 C-502,107.875 -502,164.875 -502,164.875"
            ></path>
          </g>
        </g>
        <g transform="matrix(1,0,0,1,507.5,173.5)" opacity="1">
          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
            <path
              id="pathId"
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
   </div>
   </>
  );
};

export default FirstTestTube;
