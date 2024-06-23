import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/Ellipse 1.png";
import "./Footer.css";
const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <>
      <div className="my-10">
        <div
          className="h-auto w-full sm:w-[90%] flex flex-col sm:m-auto"
          style={{ background: "#FFFFF9" }}
        >
          <div className="flex flex-col md:flex-row justify-between md:mx-10 lg:mx-44 mb-4">
            <div className="flex flex-col items-center mb-5">
              <div className="mb-2">
                <Link to="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="mb-2">
                <p style={{ color: "#515360" }}>We are KSW TechZone</p>
              </div>
              <div className="flex flex-row space-x-2 sm:space-x-4">
                <Link to="/facebook">
                  <FaFacebook
                    className="changeBg"
                    style={{ fontSize: "22px", color: "#FF8595" }}
                  />
                </Link>
                <Link to="/twitter">
                  <FaTwitter style={{ fontSize: "22px", color: "#FF8595" }} />
                </Link>
                <Link to="/instagram">
                  <FaInstagram style={{ fontSize: "22px", color: "#FF8595" }} />
                </Link>
                <Link to="/linkedin">
                  <FaLinkedin style={{ fontSize: "22px", color: "#FF8595" }} />
                </Link>
              </div>
            </div>
            <div
              className=" flex flex-col items-start ml-5 border-gradient pl-5 h-[194px]"
              style={{ color: "#515360" }}
            >
              <Link
                to="/"
                className={` hover-underline-animation ${location.pathname === "/home" ? "active" : ""
                  }mx-2 mb-2`}
              >
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className={` hover-underline-animation ${location.pathname === "/about" ? "active" : ""
                  } mx-2 mb-2`}
              >
                <span>About Us</span>
              </Link>
              <Link
                to="/services"
                className={` hover-underline-animation ${location.pathname === "/services" ? "active" : ""
                  } mx-2 mb-2`}
              >
                <span>Services</span>
              </Link>
              <Link
                to="/career"
                className={` hover-underline-animation ${location.pathname === "/career" ? "active" : ""
                  } mx-2 mb-2`}
              >
                <span>Careers</span>
              </Link>
              <Link
                to="#"
                className={` hover-underline-animation ${
                  location.pathname === "/blogs" ? "active" : ""
                } mx-2 mb-2`}
              >
                <span>Blogs</span>
              </Link>
              <Link
                to="/contact"
                className={` hover-underline-animation ${location.pathname === "/contact" ? "active" : ""
                  } mx-2 mb-2`}
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center sm:justify-start md:mx-10 lg:mx-44 space-x-2 sm:space-x-4 text-sm">
            <Link to="/" className="underline ">
              Privacy Policy
            </Link>
            <p> Copyright 2024, KSW Techzone Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
