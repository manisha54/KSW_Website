import { Footer, NavBar } from "../components";
import VectorImage from "../components/ContactComponent/ContactVector";
import "../components/ContactComponent/contact.css";
import ContactMain from "../components/ContactComponent/ContactMain";
export default function Contact() {
  return (
    <>
      <div
        className="relative overflow-x-hidden  "
        style={{ minHeight: "-webkit-fill-available" }}
      >
        <VectorImage />
        <NavBar />
        <ContactMain />
        <Footer />
      </div>
    </>
  );
}
