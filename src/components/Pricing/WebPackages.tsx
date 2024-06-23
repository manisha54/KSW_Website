import React, { ReactNode } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { Footer, NavBar } from "..";
import { Link } from "react-router-dom";
import "./pricing.css";
import WebPackagesVector from "./WebPackagesVector";

interface PricingPlan {
  name: string;
  icon1: ReactNode;
  icon2: ReactNode;
  icon3: ReactNode;
}

const WebPackages: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "24/7 Support",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "CMS website design",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Responsive & Interactive Design",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Number of pages / menus / categories as per initial requirement",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Search Engine friendly",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Social Media Integration",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Advanced Real Time Search",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "CSV Import Of Product",
      icon1: <BiX />,
      icon2: <BiX />,
      icon3: <BiCheck />,
    },
    {
      name: "Advance Product Offer",
      icon1: <BiX />,
      icon2: <BiX />,
      icon3: <BiCheck />,
    },
    {
      name: "Blog Design",
      icon1: <BiX />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Checkout Easy",
      icon1: <BiX />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Static/Dynamic",
      icon1: <BiX />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Single Vendor/Multi Vendor",
      icon1: <BiX />,
      icon2: <BiX />,
      icon3: <BiCheck />,
    },
    {
      name: "Shopping Cart",
      icon1: <BiX />,
      icon2: <BiX />,
      icon3: <BiCheck />,
    },
    {
      name: "Logo Design",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Logo Design",
      icon1: <BiX />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Custom Website",
      icon1: <BiX />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
    {
      name: "Newsletter Subscription",
      icon1: <BiCheck />,
      icon2: <BiCheck />,
      icon3: <BiCheck />,
    },
  ];

  return (
    <>
      <div
        className="relative overflow-x-hidden"
      >
        <WebPackagesVector />
        <NavBar />
        <div className=" mb-20 ">
          <div className="text-center m-10 ">
            <div className="text-center mb-2 sm:mb-4 ">
              <div className="flex items-center justify-center ">
                <div className="h-0.5 bg-blue-700 w-10 sm:w-16 mr-1 sm:mr-2 z-10"></div>
                <p className="text-black text-[0.8rem] sm:text-[1rem] font-semibold z-10">
                  HOW WE CHARGE
                </p>
                <div className="h-0.5 bg-blue-700 w-10 sm:w-16 ml-1 sm:ml-2 z-10"></div>
              </div>
            </div>
            <p className="text-[1.2rem] sm:text-[2rem] font-bold z-10 ">
              Website Development <span className="text-blue-700 z-10">Packages</span>
            </p>
            <p className="text-sm sm:text-md m-5 z-10">
              We offer different website design and development prices to you.
              <br />
              Custom packages are also available as per your need. Just send us
              your
              <br />
              requirements, and we will send you a quote right after.
            </p>
          </div>
          <div className="w-full sm:w-[80%] m-auto z-50 ">
            <div className="bg-[#e5f8fb] rounded-3xl flex flex-row z-50">
              <div className="w-[28%] z-50 sm:w-[40%] text-md sm:text-xl text-center items-center text-black-600 font-bold p-1 sm:p-4">
                Features
              </div>
              <div className="w-[24%] sm:w-[20%] text-sm sm:text-xl text-center items-center text-blue-700 font-bold p-1 sm:p-4">
                Basic
              </div>
              <div className="w-[24%] sm:w-[20%] text-sm sm:text-xl text-center items-center text-blue-700 font-bold p-1 sm:p-4">
                Advance
              </div>
              <div className="w-[24%] sm:w-[20%] text-sm sm:text-xl text-center items-center text-blue-700 font-bold p-1 sm:p-4">
                Premium
              </div>
            </div>
            <div>
              {plans.map((plan, index) => (
                <div key={index} className="flex flex-row mb-4 ">
                  <div className="w-[28%] z-50 sm:w-[40%] text-center items-center text-sm sm:text-md font-bold p-2 sm:p-4">
                    {plan.name}
                  </div>
                  <div className="w-[24%] sm:w-[20%] flex justify-center items-center text-xl sm:text-3xl p-2 sm:p-4">
                    {plan.icon1}
                  </div>
                  <div className="w-[24%] sm:w-[20%] flex justify-center items-center text-xl sm:text-3xl p-2 sm:p-4">
                    {plan.icon2}
                  </div>
                  <div className="w-[24%] sm:w-[20%] flex justify-center items-center text-xl sm:text-3xl p-2 sm:p-4">
                    {plan.icon3}
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[20px] sm:h-[30px] flex justify-center mt-6 sm:mt-10">
              <Link to="/#">
                <button
                  type="button"
                  className=" rounded-xl bg-[#EFF569] hover:bg-yellow-300 px-4 sm:px-6 sm:py-2 text-sm font-bold text-black"
                >
                  Quick Enquiry
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default WebPackages;
