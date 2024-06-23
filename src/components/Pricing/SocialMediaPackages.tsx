import React from "react";
import { Footer, NavBar } from "..";
import "./pricing.css";
import { Link } from "react-router-dom";
import SocialMediaPackagesVector from "./SocialMediaPackagesVector";

interface PricingPlan {
  name: string;
  price: number,
  img: string,
  discountedPrice: number,
  offer: string,
  currency: string;
  number: number;
  sep: string;
  month: string;
  description: string;
  details: string[];
}

const SocialMediaPackages: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      currency: "Rs",
      price: 15000,
      img: '/socialMediaPackage/marketing.png',
      discountedPrice: 10000,
      offer: '(Pay Rs 60000 for 6 month)',
      
      number: 10000,
      sep: "/",
      month: "mon",
      description: "For marketing newbies and small house teams",
      details: [
        "Social Media Management",
        "6 Graphical Banners",
        "1 GIF/Video (10 Secs Or Less)",
        "Platforms: Facebook, Instagram",
        "1 Free Festive Post",
        "Direct Advertisement",
      ],
    },
    {
      name: "Basic",
      currency: "Rs",
      price: 25000,
      img: '/socialMediaPackage/airplane.png',
      discountedPrice: 20000,
      number: 20000,
      offer: '(Pay Rs 120000 for 6 month)',
      sep: "/",
      month: "mon",
      description: "For new but established companies seeking to grow",
      details: [
        "Social Media Management",
        "Planning And Strategy",
        "Profile / Cover Image Creation [Included]",
        "10 Graphical Banners",
        "2 GIFs (10 Secs) Or 1 Video (20 Secs Or Less)",
        "Platforms: Facebook, Instagram",
        "1 Free Festive Post",
        "Content Calendar",
        "Organic Promotion",
        "Monthly Reporting",
        "Keyword Based Content",
        "Direct Advertisement + Ads Manager",
      ],
    },
    {
      name: "Standard",
      currency: "Rs",
      price: 35000,
      img: '/socialMediaPackage/portfolio.png',
      discountedPrice: 28000,
      number: 28000,
      offer: '(Pay Rs 168000 for 6 month)',
      sep: "/",
      month: "mon",
      description: "For those looking to grow their business/brand",
      details: [
        "Social Media Management",
        "Planning And Strategy",
        "Profile / Cover Image Creation [Included]",
        "15 Graphical Banners",
        "3 GIFs (10 Secs) / 2 Video (15 Secs Or Less)",
        "Platforms: Facebook, Instagram, Tiktok",
        "Competitor Analysis",
        "2 Free Festive Post",
        "Content Calendar",
        "Organic Promotion",
        "Lead Generation",
        "Customer Review",
        "Weekly Meeting",
        "Advertisement Management",
        "Monthly Reporting",
        "Keyword Based Content",
        "Direct Advertisement + Ads Manager",
      ],
    },
    {
      name: "Premium",
      currency: "Rs",
      price: 45000,
      img: '/socialMediaPackage/diamond.png',
      discountedPrice: 40000,
      number: 40000,
      offer: '(Pay Rs 240000 for 6 month)',
      sep: "/",
      month: "mon",
      description: "For those looking to sell products or build a brand",
      details: [
        "Social Media Management",
        "Planning And Strategy",
        "Profile / Cover Image Creation [Included]",
        "20 Graphical Banners",
        "4 GIFs (10 Secs) / 3 Video (15 Secs Or Less)",
        "Platforms: Facebook, Instagram, Tiktok And LinkedIn",
        "Competitor Analysis",
        "3 Free Festive Post",
        "Content Calendar",
        "Organic Promotion",
        "Lead Generation",
        "Customer Review",
        "Weekly Meeting",
        "Advertisement Management",
        "A/B Testing",
        "Pixels For Remarketing",
        "Conversation Management",
        "Monthly Reporting",
        "Keyword Based Content",
        "Direct Advertisement + Ads Manager",
      ],
    },
  ];

  return (
    <>
      <div
        className="relative overflow-x-hidden"
      >
        <SocialMediaPackagesVector />
        <NavBar />
        <div className="mb:10 md:mb-20">
          <div className="text-center m-10">
            <div className="text-center mb-2 sm:mb-4  z-50">
              <div className="flex items-center justify-center">
                <div className="h-0.5 bg-blue-700 w-10 sm:w-16 mr-1 sm:mr-2 z-10 "></div>
                <p className="text-black text-[0.8rem] sm:text-[1rem] font-semibold z-10">
                  SUBSCRIPTION PLAN
                </p>
                <div className="h-0.5 bg-blue-700 w-10 sm:w-16 ml-1 sm:ml-2 z-10"></div>
              </div>
            </div>
            <p className="text-[1.2rem] sm:text-[2rem] font-bold">
              Social Media <span className="text-blue-700">Packages</span>
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
          <div className="h-auto w-full lg:w-[80%] m-auto  z-10">
            <div className="flex flex-col sm:flex-row p-4 sm:p-0  z-10">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="z-10 flex flex-col h-auto bg-[#e5f8fb] rounded-3xl w-full sm:w-[25%] mb-4 sm:m-1 lg:m-4 p-2"
                >

              
                 <div>
                    <p className="text-xl font-bold text-center">{plan.name}</p>

                    <div className="w-full mt-4 grid place-items-center">
                      <img src={plan.img} alt="" className="w-8" />
                    </div>
                    
                        <p className="text-xl my-3 font-bold text-center text-blue-700">
                          <div className="flex items-center justify-center line-through gap-1">
                            <span className="text-sm font-extrabold align-top">{plan.currency}</span>
                            <p className="text-base">{plan.price}/mo</p>
                          </div>
                          <p className="text-xl font-bold text-center gap-1 text-blue-700"> RS {plan.discountedPrice}/mo</p>
                        </p>
                   
                    

                    <p className="text-[12x] sm:text-[12px] lg:text-sm font-semibold text-center">
                      {plan.offer}
                    </p>



                    <p className="text-[12x] sm:text-[12px] lg:text-sm text-center">
                      {plan.description}
                    </p>

                    <div className='w-full flex justify-center'>
                      <button className='w-[7rem] bg-[#EFF569] hover:bg-yellow-300 pt-2 pb-2 text-black font-semibold  mb-2 rounded-lg mt-3 ease-in duration-900]'>Buy Now</button>
                    </div>
              
                    <div className="border-t-4 border-dashed border-[#828282] mt-4 mb-6"></div>
                    <ul className="list-disc pl-4">
                      {plan.details.map((detail, index) => (
                        <li key={index} className="text-[14px]">{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto h-[70px] py-6">
                    <div className="flex justify-center">
                      <Link to="/#">
                        <button
                          type="button"
                          className=" rounded-xl bg-[#EFF569] hover:bg-yellow-300 px-4 sm:px-6 sm:py-2 text-sm font-bold text-black"
                        >
                          Select Plan
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SocialMediaPackages;
