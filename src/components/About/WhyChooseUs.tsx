import { Footer, NavBar, Button } from "../index";
import { Link } from "react-router-dom";
import WhyChooseUsVetcor from "./WhyChooseUsVetcor";
import Expert from "../../assets/WhyChooseUsImage/Expert.png"
import Agility from "../../assets/WhyChooseUsImage/Agility.png"
import Collaboration from "../../assets/WhyChooseUsImage/Collaboration.png"
import Innovation from "../../assets/WhyChooseUsImage/Innovation.png"
import Versility from "../../assets/WhyChooseUsImage/Versility.png"
import Customer from "../../assets/WhyChooseUsImage/Customer.png"
import Strategic from "../../assets/WhyChooseUsImage/Strategic.png"
import Attention from "../../assets/WhyChooseUsImage/Attention.png"
import Global from "../../assets/WhyChooseUsImage/Global.png"
import Improvement from "../../assets/WhyChooseUsImage/Improvement.png"
import Driven from "../../assets/WhyChooseUsImage/Driven.png"
import Solution from "../../assets/WhyChooseUsImage/solution.png"



export default function WhyChooseUs() {
  return (
    <>
      <div
        className="relative overflow-x-hidden "
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <WhyChooseUsVetcor />
        <NavBar />
        {/* why to chose us components  */}
        <div className="text-center p-8 md:mt-2 mt-4  lg:w-[80%]  m-auto   ">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
            Why to <span className="text-blue-700">Choose US?</span>
          </h2>
          {/* 1st row */}
          <div className="flex flex-wrap items-center mt-20  text-center ">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 z-10 ">
              <img
                src={Expert}
                alt="gem"
                className="inline-block rounded "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8  md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Expertise in{" "}
                <span className="text-blue-700"> Technical Field</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                This indicates our team members' expertise and performance history in their specialized technological fields. Our experts can produce outstanding results for your projects because they have shown their abilities through real-world accomplishments.
              </p>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex flex-wrap items-center mt-20 text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Collaboration}
                alt="project members"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5  px-4 md:order-first text-center md:text-left lg:ml-[4rem] m-auto ">
              <h3 className="font-bold mt-8  md:mt-0  text-[1.2rem] sm:text-[2rem] ">
                Collabo<span className="text-blue-700">ration </span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                We adopt a collaborative approach, using your vision as our foundation to develop solutions that are specifically tailored to you. Your opinions and ideas help us to focus on our task and make sure the solutions we come up with fulfill your needs and objectives.
              </p>
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Innovation}
                alt="editor"
                className="inline-block  "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 ">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Inno<span className="text-blue-700">vation</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                Developing a creative approach is essential to becoming competitive in the fast-paced world of today. We use state-of-the-art technological advancements to make sure your company can stay competitive and change with the times.
              </p>
            </div>
          </div>
          {/* 4th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Customer}
                alt="bulk editing"
                className="inline-block"
              />
            </div>
            <div className="w-full md:w-2/5 px-4 md:order-first text-center md:text-left  lg:ml-[4rem] m-auto ">
              <h3 className="font-bold mt-8 text-[1.2rem] sm:text-[2rem] md:mt-0 ">
                Customer-<span className="text-blue-700">Centric Focus</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                Your requirements will always come first because to our dedication to accuracy, open communication, and transparency. Our top priorities are staying aware of your requirements and building a solid alliance based on respect and trust.              </p>
            </div>
          </div>
          {/* 5th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Versility}
                alt="editor"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Versa<span className="text-blue-700">tility</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                Since every company is distinct, we provide complete services that may be customized to meet a range of requirements in a variety of sectors and industries.

              </p>
            </div>
          </div>
          {/* 6th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Agility}
                alt="bulk editing"
                className="inline-block"
              />
            </div>
            <div className="w-full md:w-2/5  px-4 md:order-first text-center md:text-left  lg:ml-[4rem] m-auto ">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Agi<span className="text-blue-700">lity</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                The capacity to quickly adjust to changes is necessary for long-term success. We take great satisfaction in our agility, which allows us to react rapidly to changing market situations, new technological developments, and changing customer needs.

              </p>
            </div>
          </div>
          {/* 7th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Strategic}
                alt="editor"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Strategic <span className="text-blue-700">Insight</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                besides our technical know-how, we offer insightful strategic ideas that can direct your company toward its goals. Our opinions are based on in-depth knowledge of the technological environment as well as more general industry trends.
              </p>
            </div>
          </div>
          {/* 8th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Attention}
                alt="bulk editing"
                className="inline-block "
              />
            </div>

            <div className="w-full md:w-2/5 px-4 md:order-first text-center md:text-left  lg:ml-[4rem] m-auto ">
              <h3 className="font-bold mt-8  md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Attention t<span className="text-blue-700">o Detail</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                We take a systematic approach to our work, making sure that every minute detail has been carefully planned out and carried out in order to attain accuracy and uphold the highest possible standards of performance.              </p>
            </div>
          </div>
          {/* 9th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Global}
                alt="editor"
                className="inline-block"
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Global <span className="text-blue-700">Perspective,</span> Local
                <span className="text-blue-700"> Understanding</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                We provide a global viewpoint while also being aware of the small distinctions in regional markets and cultures, all based on a variety of experiences. With this combination, we can offer customized solutions that appeal to your target market.              </p>
            </div>
          </div>
          {/* 10th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Improvement}
                alt="bulk editing"
                className="inline-block "
              />
            </div>

            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Continuous <span className="text-blue-700">Improvement</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                We are dedicated to continuous improvement and education, always working to improve our abilities and procedures to meet the most recent industry standards and best practices.              </p>
            </div>
          </div>
          {/* 11th row */}
          <div className="flex flex-wrap items-center mt-20   text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4">
              <img
                src={Driven}
                alt="editor"
                className="inline-block "
              />
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
              <h3 className="font-bold mt-8  md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Results<span className="text-blue-700">-Driven </span>Appr
                <span className="text-blue-700">oach</span>
              </h3>
              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                : Our main priority is to provide measurable results that directly support your aims and objectives. We put forth endless effort to make sure the outcomes meet or beyond your expectations because they are how we evaluate our success.
              </p>
            </div>
          </div>
          {/* 12th row */}
          <div className="flex flex-wrap items-center mt-20  text-center">
            <div className="w-full md:w-3/5 lg:w-1/2 px-4 ">
              <img
                src={Solution}
                alt="bulk editing"
                className="inline-block "
              />
            </div>

            <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
              <h3 className="font-bold mt-8 md:mt-0 text-[1.2rem] sm:text-[2rem]">
                Cost<span className="text-blue-700">-Effect</span>ive Solu
                <span className="text-blue-700">tions</span>
              </h3>

              <p className="text-[0.8rem] sm:text-[1rem] mt-6 text-justify">
                We recognize the significance of optimizing resource utilization while boosting value. We make sure you get the most out of your money's worth by designing our solutions to provide you the best results possible within your financial limits.
              </p>
            </div>
          </div>
          <Link to="/contact" className="flex justify-center mt-12">
            <Button
              width="w-56"
              bgColor="bg-[#EFF569]"
              textColor="text-gray-900"
              hoverEffect=""
              buttonName="Contact Us"
              props="font-bold w-[195px] rounded-lg md:text-lg "
            />
          </Link>
        </div>


        {/* component end */}
        <Footer />
      </div>



    </>
  );
}
