import React from "react";

interface AboutProps {
  img: string;
  name: string;
  position: string;
  description: string;
}

const AboutCard: React.FC<AboutProps> = ({
  img,
  name,
  position,
  description,
}) => {
  return (
    <>
      <div className=" max-w-sm text-left p-4">
        <div className="mb-1">
          <img
            src={img}
            alt={name}
            className="w-[200px] h-[250px] rounded-tl-3xl"
          />
        </div>
        <div>
          <p className="font-bold text-2xl">{name}</p>
        </div>
        <div className="mb-2">
          <p className="text-md">{position}</p>
        </div>
        <div>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
