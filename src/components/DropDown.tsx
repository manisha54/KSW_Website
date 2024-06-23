import React from "react";
import { BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

interface DropDownProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
}
const DropDown: React.FC<DropDownProps> = ({ show, setShow, data }) => {
  return (
    <>
      <div
        className={`mt-2  ${show
          ? "absolute -top-[15px] left-[100px] md:top-0 mg:left-0 lg:top-5 lg:left-0 "
          : "hidden"
          } bg-white rounded-[20px] p-2 w-[120px]`}
        style={{ zIndex: "9999" }}
      >
        {data.map((ele, index: number) => {
          return (
            <Link to={`/${ele.link}`}>
              <div
                className="max-w-[120px] my-1 rounded-[40px] p-1 text-left hover:font-semibold font-medium text-[0.8rem]"
                key={index}
              >
                {ele.title}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
