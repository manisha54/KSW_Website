import { Link } from "react-router-dom";
import { Button } from "..";
import "./our.css";
export default function Our() {
  const WBackground = `<svg width="1094" height="646" viewBox="0 0 1094 646" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M797.912 490.281C791.28 505.419 779.164 516.472 760.204 517.407C739.138 518.446 722.684 506.188 721.637 485.328L704.283 139.405C700.402 62.0487 645.164 13.3676 540.886 18.5085C446.087 23.182 401.834 67.1838 377.805 135.461L223.856 518.581C218.275 533.668 204.055 544.825 186.147 545.708C165.082 546.746 149.684 534.436 148.638 513.577L125.354 49.4505L0.00574019 55.6301L23.5518 524.971C27.3889 601.456 82.6279 650.14 187.961 644.947C282.757 640.273 325.959 596.321 349.988 528.046L503.936 144.926C509.514 129.839 523.781 119.551 542.741 118.616C563.807 117.578 579.207 129.888 580.21 149.879L597.608 496.67C601.445 573.155 656.684 621.839 762.015 616.646C856.813 611.973 900.013 568.02 924.042 499.745L1119.68 0.430686L986.962 6.9736L797.912 490.281Z" fill="#FCB9B9" fill-opacity="0.1"/>
  </svg>`;

  return (
    <div className="w-full mt-10 sm:mt-20 pb-12 relative">
      <h2 className="text-[1.2rem] sm:text-[2rem] font-bold text-center">Our Platform</h2>
      <div className="section_approach bg-night bg-blue-50 rounded-lg lg:w-[90%] lg:ml-[5%] md:ml-[4%]  sm:ml-[2%]">
        <div
          className="treatment_top-angle ">
          <svg
            width={1440}
            height={144}
            viewBox="0 0 1440 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_474_1156)">
              <path d="M0 0H1440V10L0 144V0Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_474_1156">
                <rect width={1440} height={144} fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <div className="py-50 relative w-[95%] m-auto bg-center bg-no-repeat flex justify-center items-center text-center "
          style={{
            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
              WBackground
            )}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        >
          <div className="container-medium ">
            <div className="approach_wrapper">
              <div className="w-layout-grid approach_grid text-black">
                <div
                  id="w-node-_20d81665-3cbd-3659-ba6b-ec3fee4361a8-4e2a7bc4"
                  className="approach_grid-card"
                >
                  <div className="grid_content-wrapper">
                    <div className="text-2xl">Hourly Place</div>
                    <div className="approach_grid-stroke" />
                    <p className="text-[0.8rem] sm:text-[1rem]">
                      Discover diverse spaces on Hourly Place –
                      your platform for booking co-working spaces,
                      video shooting rooms, private libraries,
                      cafes, hotels, and more on an hourly basis.
                      Elevate your work environment or leisure experience with seamless, flexible bookings.
                    </p>
                    <button className="bg-[#82929E] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out">Visit Now</button>

                  </div>
                </div>
                <div
                  id="w-node-eda5ac4f-444b-12b6-abfa-7c461f5a8de3-4e2a7bc4"
                  className="approach_grid-card"
                >
                  <div className="grid_content-wrapper">
                    <div className="text-2xl">The hostel Nepal</div>
                    <div className="approach_grid-stroke is-teal" />
                    <p className="text-[0.8rem] sm:text-[1rem]">
                      "Discover transparent hostel options for boys, girls, and travelers across Nepal with The Hostel Nepal. Book online hassle-free, offering newcomers the freedom to choose accommodations of their choice."
                    </p>
                    <button className="bg-[#82929E] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out">Visit Now</button>

                  </div>
                </div>
                <div
                  id="w-node-_26220fa9-0ca7-7983-9763-8380a65c30e5-4e2a7bc4"
                  className="approach_grid-card"
                >
                  <div className="grid_content-wrapper">
                    <div className="text-2xl">Ghantaghar.com</div>
                    <div className="approach_grid-stroke is-yellow" />
                    <p className="text-[0.8rem] sm:text-[1rem]">
                      At Ghantaghar.com, users can seamlessly book diverse services such as cafes, hotels, homestays, and daycations on an hourly basis. Experience convenience and flexibility in your bookings, tailored to your specific time requirements.
                    </p>
                    <button className="bg-[#82929E] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out">Visit Now</button>

                  </div>
                </div>
                <div
                  id="w-node-_7551092c-956c-802e-8e19-da95eda9a609-4e2a7bc4"
                  className="approach_grid-card"
                >
                  <div className="grid_content-wrapper">
                    <div className="text-2xl">KSW Blogs</div>
                    <div className="approach_grid-stroke is-purple" />
                    <p className="text-[0.8rem] sm:text-[1rem]">
                      KSW Blogs
                      "Discover tech, education, and business insights on KSW Blogs
                      by KSW Techzone – your go-to platform for concise and valuable articles."
                    </p>
                    <button className="bg-[#82929E] text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-s-sm shadow-md transition duration-300 ease-in-out">Visit Now</button>

                  </div>
                </div>
              </div>
              <div>
                <Link to='/services' className="w-full grid place-items-center">
                  <button className="py-2 px-3 bg-[#EFF569] hover:bg-yellow-300 font-semibold text-black rounded-md cursor-pointer">See All Platforms</button>

                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://assets-global.website-files.com/64234435e1b26d060e67230a/64234435e1b26d1edd67236f_MODULO-m.svg"
          loading="lazy"
          data-w-id="59db674f-5767-4138-8c61-7d3e8a68f448"
          alt=""
          className="appoach_m"
          style={{
            willChange: "transform",
            transform:
              "translate3d(9.9301%, 0.03495%, 0px) scale3d(1.00035, 1.00035, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d"
          }}
        />

        <div className="blob_parent is-home6">
          <div
            data-w-id="5819eb20-ccbe-ac53-1823-59b8d621bca3"
            className="blob is-home6"
            style={{
              transform:
                "translate3d(22.9446%, -7.6482%, 0px) scale3d(0.952964, 0.952964, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          />
        </div>
        <div className="blob_parent is-home5">
          <div
            data-w-id="fee261b6-3626-d5da-6738-4b7bfa275384"
            className="blob is-home5"
            style={{
              transform:
                "translate3d(-3.1075%, 7.2975%, 0px) scale3d(0.897835, 0.897835, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              willChange: "transform"
            }}
          />
        </div>
        <div className="angle-bottom w-embed">
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 1440 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1440 144L0 144L8.74228e-07 134L1440 6.10352e-05L1440 144Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
