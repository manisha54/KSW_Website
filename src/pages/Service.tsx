import { useState } from "react";
import { Footer, NavBar, Card } from "../components";
import web from "../assets/ServiceImage/web.png"
import Mobile from "../assets/ServiceImage/Mobile.png"
import SoftwareDevelopement from "../assets/ServiceImage/SoftwareDevelopment.png"
import ContentMarketing from "../assets/ServiceImage/ContentMarketing.png"
import DataAnalytic from "../assets/ServiceImage/DataAnalytic.png"
import DigitalMarketing from "../assets/ServiceImage/DigitalMarketing.png"
import EmailMarketing from "../assets/ServiceImage/EmailMarketing.png"
import SocialMedia from "../assets/ServiceImage/SocialMedia.png"
import InfluencerMarketing from "../assets/ServiceImage/InfluencerMarketing.png"
import GraphicDesign from "../assets/ServiceImage/GraphicDesign.png"
import SEO from "../assets/ServiceImage/SEO.png"
import Reputation from "../assets/ServiceImage/Reputation.png"
import SocialMediaManagement from "../assets/ServiceImage/GraphicDesign.png"
import Maintence from "../assets/ServiceImage/Maintenance.png"
import ITConsulting from "../assets/ServiceImage/ITConsulting.png"





import ServiceVector from "./ServiceVector";

interface ServiceProps {
  title: string;
  titleSec: string;
  buttonText: string;
  bigTitle: string;
  description: string;
  showImageFirst?: boolean;
  image: string;
}
const Service = () => {
  const [services, setServices] = useState<ServiceProps[]>([
    {
      title: "Software ",
      titleSec: "Development",
      buttonText: "FIND OUT MORE",
      image: SoftwareDevelopement,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "We specialize in creating customized software solutions tailored to your specific business needs, enhancing operational efficiency and scalability. Our experienced developers employ cutting-edge technologies to ensure the development of robust and user-friendly applications that align seamlessly with your organizational goals.",
    },
    {
      title: "Web",
      titleSec: "Development",
      buttonText: "FIND OUT MORE",
      image: web,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Crafting responsive and visually appealing websites is our forte. Our expert team combines creativity with the latest web development trends to deliver an online presence that not only captivates users but also ensures a smooth and intuitive navigation experience, ultimately driving engagement and conversions.",
    },
    {
      title: "Mobile App",
      titleSec: "Development",
      buttonText: "FIND OUT MORE",
      image:
        Mobile,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Harness the power of innovation with our mobile app development services. We design and develop applications that not only meet your functional requirements but also engage users on variousplatforms. From concept to deployment, our team ensures a seamless and feature-rich mobile experience for your target audience",
    },
    {
      title: "IT",
      titleSec: "Consulting",
      buttonText: "FIND OUT MORE",
      image:
      ITConsulting,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Receive strategic guidance on leveraging technology for business success. Our IT consulting services provide comprehensive insights and recommendations to optimize your technological infrastructure, aligning it with your organizational objectives. We guide you through technology implementation, ensuring a seamless integration that enhances overall efficiency",
    },
    {
      title: "Data Analytics And",
      titleSec: "Business Intelligence",
      buttonText: "FIND OUT MORE",
      image:
        DataAnalytic,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Unlock the power of data withour analytics and business intelligence services. We transform raw data into actionable insights, enabling informed decision-making. Our analytics solutions help you gain a competitive edge by identifying trends, optimizing processes, and maximizing the value of your data assets",
    },
    {
      title: "IT Support",
      titleSec: " And Maintenance",
      buttonText: "FIND OUT MORE",
      image:
      Maintence,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Experience responsive and reliable IT support services tailored to your unique needs. Our team ensures the smooth operation of your systems through initiative-taking monitoring, troubleshooting, and prompt maintenance. With a focus on minimizing downtime, we provide comprehensive support to keep your IT infrastructure running seamlessly",
    },
    {
      title: "Digital",
      titleSec: "Marketing Strategy",
      buttonText: "FIND OUT MORE",
      image:
        DigitalMarketing,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Propel your online presence with our comprehensive digital marketing strategies. We collaborate with you to develop customized plans that enhance visibility, drive engagement, and achieve your marketing goals. From search engine optimization to social media campaigns, our strategies are designed for success in the ever-evolving digital landscape",
    },
    {
      title: "Search Engine",
      titleSec: "Optimization (SEO)",
      buttonText: "FIND OUT MORE",
      image:
        SEO,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Enhance your online visibility and rankings with our SEO expertise. We employ industry-best practices to perfect your website, improve search engine rankings, and attract organic traffic. Our team focuses on delivering measurable results, ensuring that your digital presence stands out in competitive online environments",
    },
    {
      title: "Social Media",
      titleSec: "Management",
      buttonText: "FIND OUT MORE",
      image:
        SocialMediaManagement,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Elevate your brand presence across social media platforms with our comprehensive management services. From content creation to audience engagement and performance monitoring, we handle every aspect of your social media strategy. Our goal is to build a strong and authentic online community around your brand",
    },
    {
      title: "Content ",
      titleSec: " Marketing",
      buttonText: "FIND OUT MORE",
      image:
        ContentMarketing,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Drive audience engagement and brand awareness through our content marketing services. We produce high-quality, valuable content tailored to your target audience. By strategically distributing this content across various channels, we help you establish authority in your industry and foster long-term relationships with your audience",
    },
    {
      title: "Email",
      titleSec: "Marketing",
      buttonText: "FIND OUT MORE",
      image:
        EmailMarketing,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Engage and nurture leads through our targeted email marketing campaigns. We design and execute personalized email strategies that resonate with your audience. From newsletters to promotional campaigns, our goal is to build and keep meaningful connections with your subscribers while driving conversions and customer loyalty.",
    },
    {
      title: "Social ",
      titleSec: " Media Advertising",
      buttonText: "FIND OUT MORE",
      image:
        SocialMedia,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Reach your target audience with precision through our social media advertising services. We develop and execute strategic ad campaigns on platforms like Facebook, Instagram, and LinkedIn. Our approach maximizes reach, engagement, and conversion rates, ensuring that your advertising goals are met effectively",
    },
    {
      title: "Influencer ",
      titleSec: "Marketing",
      buttonText: "FIND OUT MORE",
      image:
        InfluencerMarketing,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Boost your brand's reach and credibility through collaborative influencer marketing campaigns. We identify and partner with influencers who align with your brand values, ensuring authentic and impactful endorsements. From product launches to brand awareness, our influencer marketing strategies drive tangible results",
    },
    {
      title: "Reputation ",
      titleSec: "Management",
      buttonText: "FIND OUT MORE",
      image:
        Reputation,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Safeguard and enhance your brand reputation with our reputation management services. We monitor online reviews, manage feedback, and implement strategies to build a positive online image.Our proactive approach ensures that your brand maintains a strong and favorable presence in the digital landscape",
    },
    {
      title: "Graphic ",
      titleSec: "Design",
      buttonText: "FIND OUT MORE",
      image:
        GraphicDesign,
      bigTitle: "Innovation. Reliably delivered.",
      description:
        "Elevate your brand with our graphic design services. Our creative team crafts visually compelling designs that resonate with your audience, conveying your message effectively. From logos to marketing materials, we specialize in transforming ideas into impactful visual assets, ensuring a distinctive and memorable brand identity",
    },
  ]);
  return (
    <>
      <div
        className="h-[100vh] relative overflow-x-hidden"
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <ServiceVector />
        <NavBar />
        <div className="w-[90%] h-[100vh] m-auto">
          <div className="text-center md:mt-0 mt-6">
            <h1 className="md:text-[2rem] text-[1.4rem]   font-extrabold">
              Serv<span className="text-[#004AAD]">ices</span>
            </h1>
            <p className="m-auto w-[80%] md:w-[40%] font-bold md:text-[1rem]  text-[0.8rem] md:mt-0 mt-2">
              In the new world, the companies that build, learn, and evolve the
              fastest will win.
            </p>
            <p className="m-auto w-[80%] md:w-[40%] md:mt-2 mt-2 justify-center  text-justify">
              Our people and processes are built for speed of iteration and
              innovation. We use world-class product engineering and lean
              methodologies to transform businesses, launch startups, leverage AI,
              and produce new paradigms of Healthcare, Design and Data and AI.
            </p>
          </div>

          {services.map((ele, index) => (
            <Card
              showButton={true}
              title={ele.title}
              titleSec={ele.titleSec}
              description={ele.description}
              key={index}
              showImageFirst={index % 2 == 0 ? true : false}
              img={ele.image}
            />
          ))}
          <Footer />
        </div>

      </div>
    </>
  );
};

export default Service;
