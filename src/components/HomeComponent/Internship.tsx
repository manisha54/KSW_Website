import { NavBar, Footer } from "../index";
import { Link } from "react-router-dom";

function Internship() {
  interface Cardprops {
    title?: string;
    description?: string;
    img?: string;
  }
  const Card: Cardprops[] = [
    {
      title: "Web Development",
      description:
        "web development internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges and real-world projects, allowing you to gain hands-on experience in the dynamic fields of web and app development. Join our award-winning innovation team and kickstart your journey to success in a supportive and enriching environment",
      img: "https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?t=st=1710608314~exp=1710611914~hmac=8f98241779b63466ec41b31748681c6f4390f05cdc2ccbcab3021832622c6f5a&w=1060",
    },
    {
      title: "Android Development",
      description:
        "Android, the user-friendly open-source operating system, has transformed the way we access internet applications and carry out important tasks on our mobile devices. At KSW, we understand the growing preference for mobile usage and offer the ideal starting point for your app development journey. Discover the simplicity of creating your first app with us and unlock a world of endless.",
      img: "https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?t=st=1710609342~exp=1710612942~hmac=67c4f857054fb8028a2cd40c3798a3ccb9a6ac82ac36475a56aca22cf183ee2b&w=1060",
    },
    {
      title: "Data Science ",
      description:
        " Remote Data Science Internships Are A Unique Chance To Gain Experience In The Midst Of The Virtual Workforce While Remaining Immersed In One Of The Top Organizations In The Field. Data Analysis Internships Are Some Of The Most Competitive And Popular Within The Broader Data Science Field..",
      img: "https://img.freepik.com/free-vector/controller-reading-regulations-robot-artificial-intelligence-regulations-limitations-ai-development-global-tech-regulations-concept_335657-2427.jpg?t=st=1710612211~exp=1710615811~hmac=cb683dea15464b251627a08e20ed320ed4e710a927cb1027c87dc08d6447410f&w=1800",
    },
    {
      title: "UI/UX Design",
      description:
        "Gain mastery in UI/UX Design from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting",
      img: "https://img.freepik.com/free-vector/graphic-designer-workplace_23-2148119261.jpg?t=st=1710612126~exp=1710615726~hmac=6ee78d2545500ea7a42b6d570dee109a210a4ab8acd170a47ac31315935d3d80&w=1060",
    },
    {
      title: "Artificial intelligence",
      description:
        "Gain mastery in Artificial intelligence from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.",
      img: "https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?t=st=1710611114~exp=1710614714~hmac=89acd1fe2a58b67aa53cabdbe1006aee3829d5e8019a183d3710e7926cef4dc2&w=1060",
    },
    {
      title: "Machine learning",
      description:
        "Gain mastery in Machine learning from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting.",
      img: "https://img.freepik.com/free-vector/brain-with-digital-circuit-programmer-with-laptop-machine-learning-artificial-intelligence-digital-brain-artificial-thinking-process-concept-vector-isolated-illustration_335657-2246.jpg?t=st=1710611394~exp=1710614994~hmac=8cee7c0afc0e171074e5b83392bf774e92d784bf57979e3d8317bfedd75bce68&w=1800",
    },
    {
      title: "Graphics Design",
      description:
        "Graphic design is a creative discipline that involves the art and practice of planning and projecting ideas and experiences with visual and textual content. It encompasses various mediums such as print, digital, and multimedia, and is used to communicate messages effectively through images, typography, color, and layou",
      img: "https://img.freepik.com/free-vector/icon-design-concept-illustration_114360-5587.jpg?w=1060&t=st=1710611848~exp=1710612448~hmac=5da411cfa3c9eca5e2454ed6baa1d36471a2ccfc73f3a8e70edacdb026d1a77d",
    },
    {
      title: "Digital Marketing",
      description:
        "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, brands, or ideas to reach and engage with a target audience. It encompasses various online tactics and strategies aimed at driving awareness, engagement, leads, and conversions.",
      img: "https://img.freepik.com/premium-vector/digital-marketing-campaign_590534-71.jpg?w=1060",
    },

    // Add more card objects as needed
  ];

  return (
    <>
      <NavBar />
      {/* content */}
      <section className=" ">
        <div className="   container px-2 m-8 mx-auto">
          <div className="text-center mb-8 ">
            <h1 className="md:text-[2rem] text-[1.4rem]   font-bold">
              Our <span className="text-[#004AAD]">Internships</span>
            </h1>
            <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 md:text-xl text-sm text-justify mt-4">
              We are passionate about technology and believe in the power of
              software to transform the world. Our internship program is just
              one of the ways in which we are investing in the future of the
              industry.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-700 inline-flex"></div>
            </div>
          </div>
        </div>
      </section>

      {/* cards start here */}
      <div className=" lg:w-[80%] mx-auto flex flex-wrap justify-center">
        {Card.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-3"
          >
            <div
              className={`bg-gray-200 border  border-gray-300 rounded-lg shadow`}
            >
              <img
                className="w-full h-64  object-cover rounded-t-lg"
                src={card.img}
                alt=""
              />
              <div className="p-4 h-64 overflow-scroll ">
                <h5 className="md:text-xl text-sm mt-4 flex justify-center font-semibold mb-2">
                  {card.title}
                </h5>
                <p className="text-gray-600 mb-3 mt-4 text-sm text-justify">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-center flex-wrap md:mt-0 mt-4 mb-8">
                <Link
                  to="/"
                  className="inline-block bg-[#EFF569] hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-md"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* cards end here */}
      <Footer />
    </>
  );
}

export default Internship;
