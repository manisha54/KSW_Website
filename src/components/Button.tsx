interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  hoverEffect?: string;
  buttonName?: string;
  props?: string;
  width?: string;
}

function Button({
  bgColor,
  textColor,
  hoverEffect,
  buttonName,
  props,
  width,
}: ButtonProps) {
  return (
    <>
      <div
        className={`flex flex-wrap ${width} h-12 justify-start items-center `}
      >
        <button
          type="button"
          className={`rounded-md ${bgColor} px-3 py-2   ${props}  font-semibold ${textColor} ${hoverEffect}`}
        >
          {buttonName}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="md:h-[29px] md:w-[29px]  h-[20px] w-[20px]"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </>
  );
}

export default Button;
