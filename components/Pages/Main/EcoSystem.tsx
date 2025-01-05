"use client";
import Metaverse from "@/public/main/ecosystem/metaverse.jpeg";
import HamPayIcon from "@/public/main/ecosystem/pay.png";
import HamGamingIcon from "@/public/main/ecosystem/game.png";
import HamSlotIcon from "@/public/main/ecosystem/slot.png";
import HamCoin from "@/public/main/hamcoin.png";
import HamNftIcon from "@/public/main/ecosystem/nft.png";
import HamStakingAnimation from "@/public/animations/stake.json";
import HamSwapAnimation from "@/public/animations/swap.json";
import Lottie from "lottie-react";

import Image from "next/image";

const EcoSystem = () => {
  const ecosystemData = [
    {
      id: 1,
      title: "Staking",

      animation: HamStakingAnimation,
      description:
        "Coin’s staking feature lets you put your idle tokens to work. By staking your HamCoin, you contribute to the network’s security while earning attractive rewards over time. The more you stake, the greater your earnings, making it a rewarding experience for both beginners and experienced crypto enthusiasts.",
    },
    {
      id: 4,
      title: "NFTs",
      img: HamNftIcon,

      description:
        "Explore unique NFTs on the HamCoin marketplace, offering exclusive digital assets secured on the blockchain.",
    },
    {
      id: 4,
      title: "Ham Coin",
      img: HamCoin,
      comingsoon: true,
      description:
        "Prepare for the launch of HamCoin ICO! HamCoin is the backbone of the Ham Protocol ecosystem, with versatile use cases including in-game rewards, reduced trading fees, and exclusive access to platform features. Don’t miss your chance to be part of this revolutionary journey. Stay tuned for updates!",
    },
    {
      id: 2,
      title: "Swap",

      animation: HamSwapAnimation,

      description:
        "Swap your HamCoin easily and securely, unlocking trading opportunities in the crypto market with minimal fees and maximum efficiency.",
    },
    {
      id: 5,
      img: HamSlotIcon,

      title: "Ham Slot",
      description:
        "Enjoy HamCoin-powered gaming experiences with Ham Slot, blending entertainment with real rewards.",
    },
    {
      id: 3,
      title: "Ham Pay",
      img: HamPayIcon,

      description:
        "Ham Pay enables fast, secure payments with HamCoin, making everyday transactions seamless and decentralized.",
    },

    {
      id: 6,
      title: "Ham Gaming",
      img: HamGamingIcon,

      description:
        "Dive into immersive gaming with HamCoin-backed games that reward your skills with valuable tokens.",
    },
    {
      id: 6,
      title: "Ham Metaverse",
      img: Metaverse,
      comingsoon: true,
      description:
        "Get ready to step into the future! The Ham Protocol Metaverse is launching soon, offering immersive experiences, digital innovation, and endless opportunities. Stay tuned as we bring the next evolution of connectivity and creativity to life. The future starts here!",
    },
  ];
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-[100px] py-16 md:py-[100px] ">
        <div className="mb-10">
          <div className="text-3xl font-bold mb-2">
            Explore the{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text">
              {" "}
              Ham Protocol
            </span>{" "}
            Ecosystem
          </div>
          <div className="text-xl text-[#303030]/80">
            The Ham Protocol ecosystem offers endless possibilities, from
            staking and trading to gaming and NFTs. Here’s everything you can do
            with Ham Protocol.
          </div>
        </div>
        {/* eco system cards */}
        <div className="py-8 ">
          {ecosystemData.map((item, index) => (
            <div
              key={index}
              className="border-l-4 border-collapse border-dashed relative z-20 pb-24"
            >
              <div>
                <div
                  className={`w-8 h-8 rounded-full  absolute -top-4 -left-[18px] bg-[#3E8DE3]/20`}
                >
                  <div
                    className={`h-px  bg-[#3E8DE3] absolute  top-1/2 -translate-y-1/2 translate-x-4 -z-10 ${
                      index % 2 === 1 ? "w-20 md:w-[360px]" : " w-20"
                    } `}
                  ></div>
                  <div className="w-4 h-4 rounded-full bg-[#3E8DE3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className={`pl-5 md:pl-10 -translate-y-5  `}>
                  <div
                    className={`z-30 mb-5 h-10 flex items-center gap-1 bg-[#EEF5FD]  rounded-t-xl px-4 py-2 border-b-2 border-[#3E8DE3] w-fit uppercase text-xl font-semibold ${
                      index % 2 === 1 ? "md:translate-x-[290px]" : ""
                    }`}
                  >
                    <div className="text-[#3E8DE3]">0{index + 1} - </div>{" "}
                    <div>
                      {" "}
                      <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-text ">
                        {" "}
                        {item.title}
                      </span>{" "}
                      {item.comingsoon && (
                        <span className="text-sm opacity-70">
                          (Coming Soon)
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className={`w-full  lg:max-h-[100px] rounded-xl  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-px drop-shadow-card `}
                  >
                    <div
                      className={`p-3  lg:max-h-[100px]  w-full h-full md:p-6 rounded-xl bg-[#EEF5FD]  flex  gap-4 items-center justify-between ${
                        index % 2 === 1
                          ? "flex-col sm:flex-row-reverse"
                          : "flex-col md:flex-row "
                      }`}
                    >
                      <div className="flex-1 text-lg">{item.description}</div>
                      <div className="max-w-[250px] w-full bg-transparent ">
                        {item.img && (
                          <Image src={item.img} alt="Graphic" className="" />
                        )}
                        {item.animation && (
                          <Lottie
                            style={{ height: "300px", width: "300px" }}
                            className=" "
                            autoplay
                            loop
                            animationData={item.animation}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EcoSystem;
