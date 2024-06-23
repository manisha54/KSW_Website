import { Footer, NavBar, Button } from "../components";
import { Link } from "react-router-dom";
import { Reward24Regular } from "@fluentui/react-icons";
import { BiBlock, BiHappy } from "react-icons/bi";

import img from "../assets/service.jpeg";
import CareerVector from "./CareerVector";
export default function Career() {
  return (
    <div
      className="relative overflow-hidden overflow-x-hidden"
      style={{ minHeight: "-webkit-fill-available" }}
    >
      <CareerVector />
      <NavBar />
      <div className="w-[80%] lg:ml-[13%] m-auto">
        <div className="flex flex-col md:flex-row md:justify-between pt-10 ">
          <div className="w-full sm:w-full md:w-[60%] lg:w-[60%] md:items-start">
            <div className="w-[100%] lg:w-[60%]">
              <div className="text-[1rem] md:text-[1.2rem] font-bold text-center md:text-left">
                Careers
              </div>
              <div className="mb-4 md:mb-8">
                <div className="text-[2rem] font-bold text-center md:text-left">
                  <p>Growth mindset. Curious. Innovative. Sounds like you?</p>
                </div>
                <div className="text-xl md:text-2xl font-bold text-center md:text-left"></div>
              </div>
              <div className="text-base md:text-lg font-medium text-center md:text-left mb-4 md:mb-8">
                <p className="text-[0.8rem] sm:text-[1rem] md:w-[90%] ">
                  We welcome people with a relentless passion, an agile mindset,
                  and a fast-learning culture
                </p>
              </div>
              <div className="text-base md:text-lg font-normal text-center md:text-left mb-4 md:mb-8">
                <p className="text-[0.8rem] sm:text-[1rem] md:w-[90%]">
                  Embark on a journey that goes beyond just a job. you will get
                  an environment that fosters growth, learning, and
                  collaboration. A place which values diverse perspectives,
                  accountable freedom, pushes you to reach your new height, and
                  celebrates both small and big wins.
                </p>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[40%] lg:w-[40%] flex justify-end ">
            <img
              className="rounded-br-[4rem] p-5 md:h-[16rem] lg:h-[25rem] m-auto "
              src={img}
              alt="People Working in Office"
            />
          </div>
        </div>

        <Link to="/#">
          <button
            type="button"
            className="rounded-md bg-[#EFF569] hover:bg-yellow-300 px-8 py-2 text-sm font-semibold  text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            We'r Hiring
          </button>
        </Link>
      </div>

      <div className="p-8 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="text-black">Let</span>'s get{" "}
          <span className="text-blue-700">you started !</span>
        </h2>
        <p className="text-[0.8rem] sm:text-[1rem] mb-6">
          We are looking for people who are ambitious, enjoy collaborating,
          respect our transparent culture <br />
          and are ready to give it all. Come, be a part of the team and help us
          build the future of work.
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <Link to="/#">
            <Button
              width="w-56"
              bgColor="bg-[#EFF569]"
              textColor="text-black"
              hoverEffect="hover:bg-yellow-300"
              buttonName="COME JOIN US"
              props="font-semibold w-[195px] rounded-md"
            />
          </Link>
          <Link to="/view_internships">
            <Button
              width="w-64"
              bgColor="bg-transparent"
              textColor="text-black"
              buttonName="VIEW INTERNSHIP"
              props="font-semibold w-[195px] rounded-sm md:text-[17px] text-sm md:ml-0 ml-4 "
            />
          </Link>
        </div>
      </div>

      <div className="p-8 text-center">
        <h2 className="text-5xl font-extrabold mb-4">
          <span className="text-blue-700">Values</span>{" "}
          <span className="text-black">that shape us</span>
        </h2>
        <p className="text-[0.8rem] sm:text-[1rem] mb-6">
          Our values are not just words on paper – <br />
          they're the beating heart of who we are. <br />
          They define our vibrant culture and guide <br />
          us in everything we do.
        </p>
      </div>

      {/* icon */}
      <div className="flex flex-wrap justify-center items-center mt-8 md:ml-20">
        <div className="flex flex-col items-center sm:items-start mb-4 sm:mx-0 sm:mr-8 md:mr-20">
          <div className="mb-2 flex items-center justify-center rounded-full">
            <BiHappy className="w-12 h-12 text-black font-bold" />
          </div>
          <div className="font-bold mb-1 ml-1">Customer Focus</div>
          <div className="text-sm text-gray-600 ml-1">
            <span className="text-justify">
              {" "}
              Go the extra mile to make our customers <br /> smile
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start mb-4 sm:mx-0 sm:mr-8 md:mr-20">
          {/* Second Icon */}
          <div className="mb-4 flex items-center justify-center rounded-full">
            <BiBlock className="w-12 h-12 text-black font-bold" />
          </div>
          <div className="font-bold mb-1">Accountable Freedom</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{" "}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start mb-4 sm:mx-0 sm:mr-8 ">
          {/* Third Icon */}
          <div className="mb-4 flex items-center justify-center rounded-full">
            <Reward24Regular className="w-12 h-12 text-black font-bold" />
          </div>
          <div className="font-bold mb-1">Be Remarkable</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-start mt-8  md:ml-20">
        <div className="flex flex-col items-center sm:items-start mb-20 sm:mr-20 sm:mx-0 ">
          {/* Fourth Icon */}
          <div className="mb-4 flex items-center justify-center rounded-full">
            <BiBlock className="w-12 h-12 text-black font-bold" />
          </div>
          <div className="font-bold mb-1">Customer Focus</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{" "}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start mb-20 sm:mr-20 sm:mx-0">
          {/* Fifth Icon */}
          <div className="mb-4 flex items-center justify-center rounded-full">
            <BiHappy className="w-12 h-12 text-black font-bold" />
          </div>
          <div className="font-bold mb-1">Customer Focus</div>
          <div className="text-sm text-gray-600">
            <span className="text-justify">
              Go the extra mile to make our customers <br /> smile{" "}
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
