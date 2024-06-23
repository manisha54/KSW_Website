import {
  FirstTestTube,
  NavBar,
  VectorAnimatedImage,
  Footer,
  WeProvides,
  Testimonial,
  Our,
  Logo,
  HomeText,
} from "../components";
import OurPartner from "../components/HomeComponent/OurPartner";

function HomePage() {
  return (
    <>
      <div
        className="h-[100vh] relative overflow-hidden overflow-x-hidden bg-[#dff0f2]"
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <VectorAnimatedImage />
        <Logo className="absolute lg:h-36 lg:w-36 h-[4rem] w-[7rem] cursor-pointer lg:top-[6rem] lg:left-[4.8rem] md:top-[5.4rem] md:left-[5rem] top-[3.2rem] left-[3rem]" />
        <NavBar />
        <HomeText />
        <FirstTestTube />
      </div>

      <WeProvides />
      <Testimonial />
      <OurPartner />
      <Our />
      <Footer />
    </>
  );
}

export default HomePage;
