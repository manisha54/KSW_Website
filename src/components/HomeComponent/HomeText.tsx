import { Link } from "react-router-dom";

const HomeText = () => {
  return (
    <section className="text-gray-600 body-font relative z-10">
      <div className="container md:px-5 md:py-24 py-32 px-2 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-[1.5rem] text-[1.3rem] font-medium title-font text-gray-900 mb-4 md:mt-6">
            KSW TechZone - Empowering Your Digital Presence
          </h1>
          <p className="md:text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-justify text-[0.8rem] sm:text-[1rem]  ">
            At KSW TechZone, we transcend boundaries, turning your digital
            dreams into reality. As a leading IT Services and Software
            Development company based in Nepal, we specialize in a diverse range
            of services that elevate your online presence.
          </p>
          <h5 className="md:mt-12 mt-2">
            Join us in digitizng your business with today's generations
          </h5>
          <Link to="/contact">
            <button className="bg-[#EFF569] p-2 mt-2 text-black rounded-md hover:bg-yellow-300 font-semibold">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeText;
