import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css"; // Importing CSS file for NavBar styling

import DropDown from "../DropDown";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pricing = [
    { title: "Seo Package", link: "seopackages" },
    { title: "Web Package", link: "webpackages" },
    { title: "Social Media Package", link: "socialmediapackages" },
  ];
  const about = [
    { title: "About Company", link: "about" },
    { title: "Why Choose Us", link: "whychooseus" },
    { title: "Teams", link: "ourteam" },
  ];

  return (
    <div className="relative ">
      <Link
        to="/"
        className="md:hidden lg:hidden text-xl text-center  justify-center font-bold text-gray-800 z-10  ml-24  mb-7"
      >
        KSW TechZone
      </Link>
      {/* Hamburger menu button */}
      <div className="md:hidden absolute top-2 right-0 z-50 mr-4 -mt-1 mb-20">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Full-screen menu overlay */}
      <div
        className={`md:hidden overlay transition-opacity duration-300 ${menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
        onClick={toggleMenu}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/about"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${location.pathname === "/about" ? "active" : ""
                }`}
            >
              About us
            </Link>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAbout((e) => !e);
                setShowPricing(false);
              }}
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${location.pathname === "/pricing" ? "active" : ""
                }`}
            >
              <div className="flex justify-center items-center">
                About
                {showAbout ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>{" "}
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </div>

              <DropDown
                data={about}
                show={showAbout}
                setShow={setShowPricing}
              />
            </button>

            <Link
              to="/services"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${location.pathname === "/services" ? "active" : ""
                }`}
            >
              Services
            </Link>
            <Link
              to="/career"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${location.pathname === "/career" ? "active" : ""
                }`}
            >
              Careers
            </Link>
            <Link
              to="#"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${location.pathname === "/blogs" ? "active" : ""
                }`}
            >
              Blogs
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPricing((e) => !e);
                setShowAbout(false);
              }}
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${location.pathname === "/pricing" ? "active" : ""
                }`}
            >
              <div className="flex justify-center items-center">
                Pricing{" "}
                {showPricing ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>{" "}
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </div>

              <DropDown
                data={pricing}
                show={showPricing}
                setShow={setShowPricing}
              />
            </button>
            <Link
              to="/contact"
              className={`text-xl font-bold text-gray-800 hover-underline-animation ${location.pathname === "/contact" ? "active" : ""
                }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* Menu items for large screens */}
      <div className="hidden md:w-[90%] md:ml-20 md:flex md:flex-row items-center justify-between h-16 px-4 md:px-8 my-8 mx-40">
        <div>
          <Link
            to="/"
            className={`text-xl font-bold text-gray-800 md:-ml-10  `}
          >
            KSW TechZone
          </Link>
        </div>
        <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-between text-sm">
          <button
            onClick={() => {
              setShowAbout((e) => !e);
              setShowPricing(false);
            }}
            className={`mx-2 my-1 md:ml-4 md:my-0 hover-underline-animation ${location.pathname === "/pricing" ? "active" : ""
              }`}
          >
            <div className="flex justify-center items-center">
              About
              {!showAbout ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>{" "}
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </div>

            <DropDown data={about} show={showAbout} setShow={setShowPricing} />
          </button>

          <button
            onClick={() => {
              setShowPricing((e) => !e);
              setShowAbout(false);
            }}
            className={`mx-2 my-1 md:ml-4 md:my-0 hover-underline-animation ${location.pathname === "/pricing" ? "active" : ""
              }`}
          >
            <div className="flex justify-center items-center">
              Pricing
              {!showPricing ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  transform="matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,0,0)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>{" "}
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </div>

            <DropDown
              data={pricing}
              show={showPricing}
              setShow={setShowPricing}
            />
          </button>

          <Link
            to="/services"
            className={`mx-2 my-1 md:my-0 hover-underline-animation ${location.pathname === "/services" ? "active" : ""
              }`}
          >
            Services
          </Link>
          <Link
            to="/career"
            className={`mx-2 my-1 md:my-0 hover-underline-animation ${location.pathname === "/career" ? "active" : ""
              }`}
          >
            Career
          </Link>
          <Link
            to="#"
            className={`mx-2 my-1 md:my-0 hover-underline-animation ${location.pathname === "/blogs" ? "active" : ""
              }`}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className={`mx-2 my-1 md:ml-4 md:my-0 hover-underline-animation ${location.pathname === "/contact" ? "active" : ""
              }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
