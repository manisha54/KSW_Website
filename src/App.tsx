import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import SeoPackagePage from "./pages/SeoPackagePage";
import WebPackages from "./components/Pricing/WebPackages";
import SocialMediaPackages from "./components/Pricing/SocialMediaPackages";
import "./components/HomeComponent/blob.css";
import AboutCompany from "./components/About/AboutCompany";
import OurTeamPage from "./pages/OurTeamPage";
import WhyChooseUs from "./components/About/WhyChooseUs";
import { Internship, OurPlatform } from "./components";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/seopackages" element={<SeoPackagePage />} />
        <Route path="/webpackages" element={<WebPackages />} />
        <Route path="/socialmediapackages" element={<SocialMediaPackages />} />
        <Route path="/ourteam" element={<OurTeamPage />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/platforms" element={<OurPlatform />} />
        <Route path="/view_internships" element={<Internship />} />
      </Routes>
    </BrowserRouter>
  );
}
