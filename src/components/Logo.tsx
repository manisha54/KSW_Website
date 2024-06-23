import LOGO from "../assets/Ellipse 1.png";

interface LogoProps {
  className?: string;
}
function Logo({ className }: LogoProps) {
  return (
    <div className={className}>
      <img className="w-full bg-cover overflow-hidden" src={LOGO} alt="logo" />
    </div>
  );
}

export default Logo;
