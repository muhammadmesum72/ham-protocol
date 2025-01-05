import X from "@/public/main/social/x.png";
import Telegram from "@/public/main/social/telegram.png";
import YouTube from "@/public/main/social/youtube.png";
import Insta from "@/public/main/social/insta.png";
import Image from "next/image";
import Link from "next/link";
import PoweredByBnb from "@/components/Shared/PoweredByBnb";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#E9F3FF]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Logo or Powered by BNB */}
        <div>
          <PoweredByBnb />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-5 mt-4 md:mt-0">
          {["HOME", "ABOUT", "ROADMAP", "TEAM"].map((link, index) => (
            <div key={index} className="cursor-pointer hover:text-blue-600">
              {link}
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 mt-4 md:mt-0">
          {[
            { href: "#", src: X, alt: "X" },
            { href: "#", src: YouTube, alt: "YouTube" },
            { href: "#", src: Insta, alt: "Instagram" },
            { href: "#", src: Telegram, alt: "Telegram" },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className="text-xl cursor-pointer hover:text-blue-600"
            >
              <Image src={social.src} alt={social.alt} className="w-10" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
