"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

interface StakerCardProps {
  name: string;
  avatar: string;
  hamCoins: string;
  reward: string;
  height?: string;
}

const StakerCard: React.FC<StakerCardProps> = ({
  name,
  avatar,
  hamCoins,
  reward,
  height,
}) => (
  <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-px shadow-lg rounded-2xl">
    <div
      className={`bg-[#EEF5FD] p-6 flex flex-col items-center justify-center text-center h-full rounded-2xl`}
      style={{ height }}
    >
      <div className="w-[70px] h-[70px] bg-white shadow-md rounded-full mb-4 overflow-hidden">
        <Image
          src={avatar}
          alt={name}
          className="object-cover"
          width={70}
          height={70}
          aria-label={`Avatar of ${name}`}
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-black">{name}</h3>
      <p className="text-[#202020]/80 text-sm">
        {hamCoins} HamCoins - {reward} Coins Reward
      </p>
    </div>
  </div>
);

// Removed the empty interface
const TopStakers: React.FC = () => {
  const topStakers = [
    {
      name: "KryptoKing 45",
      avatar: "https://placebeard.it/250/250",
      hamCoins: "50,000",
      reward: "7,500",
    },
    {
      name: "CryptoQueen 77",
      avatar: "https://placebeard.it/250/200",
      hamCoins: "40,000",
      reward: "6,000",
    },
    {
      name: "StakeMaster 33",
      avatar: "https://placebeard.it/250/256",
      hamCoins: "30,000",
      reward: "4,500",
    },
    {
      name: "TokenTitan 22",
      avatar: "https://placebeard.it/250/257",
      hamCoins: "20,000",
      reward: "3,000",
    },
    {
      name: "NFTNinja 99",
      avatar: "https://placebeard.it/250/255",
      hamCoins: "70,000",
      reward: "9,000",
    },
    {
      name: "MetaMogul 88",
      avatar: "https://placebeard.it/250/254",
      hamCoins: "60,000",
      reward: "8,500",
    },
    {
      name: "CoinCommander 55",
      avatar: "https://placebeard.it/250/253",
      hamCoins: "25,000",
      reward: "3,500",
    },
    {
      name: "BlockBoss 11",
      avatar: "https://placebeard.it/250/252",
      hamCoins: "15,000",
      reward: "2,000",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-16">
        <header className="text-center">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Meet Our Top Stakers
          </h2>
          <p className="text-lg text-gray-600">
            Each entry is complemented with a personalized badge or rank,
            motivating others with the tagline: &quot;Your name could be here. Start
            staking now!&quot;
          </p>
        </header>

        <div className="">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            speed={3500}
            loop={true}
            autoplay={{ delay: 0 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="w-full swiper-wrapper"
          >
            {topStakers.map((staker, index) => (
              <SwiperSlide key={index} className="w-full py-12">
                <StakerCard {...staker} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TopStakers;
