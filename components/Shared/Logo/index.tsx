import Image from "next/image";
import LogoImg from "../../../public/main/hamcoin.png";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-1">
      <Image
        src={LogoImg}
        alt="Ham Protocol Logo"
        width={100}
        height={100}
        className="w-12 animate-pulse"
      />
      <Image
        src={"/main/hamcoin.png"}
        alt="Ham Protocol Logo"
        width={100}
        height={100}
        className="w-12 animate-pulse"
      />
      Ham Protocol
    </div>
  );
};

export default Logo;
