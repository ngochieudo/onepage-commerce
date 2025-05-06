import Image from "next/image";
import Protect from "../icons/Protect";

const Banner = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[url('/bg/green_env.png')] bg-cover bg-center text-[#D9D9D9]">
      <div className="py-[124px] px-16">
        <h1 className="text-center md:text-start text-[64px] text-white font-bold mb-4">
          Welcome to Apps Store
        </h1>
        <div className="relative flex-col lg:flex-row w-full border-[1px] border-gray-400 rounded-[36px] bg-white/10 p-8 gap-3 bg-[#2F0700] text-center md:text-start">
          {/* Promotion */}
          <div className="tracking-[-0.3px]">
            <h1 className="text-5xl font-bold">Get +20% more!</h1>
            <h2 className="text-[20px]/[40px]  font-normal">
              Offer extra discount to players on Web Shop purchases.
            </h2>
            <div className="flex flex-col md:flex-row gap-2 items-center justify-start min-h-10 text-[20px]/[40px] font-semibold text-[#D9D9D9]">
              <div className="flex items-center gap-1">
                <Protect />
                <span>Official Store</span>
              </div>
              <div className="flex items-center gap-1">
                <Protect />
                <span>Secure Payments</span>
              </div>
            </div>
            <div className="text-center rounded-lg gap-[10px] px-3 py-[10px] bg-[#FF1E02] lg:w-[269px] mt-2 hover:bg-[#FF1E02]/80 transition-all duration-300 ease-in-out">
              <a href="" className="uppercase font-semibold">
                View offers
              </a>
            </div>
          </div>
          {/* Spell Image */}
          <div className="flex justify-center lg:absolute lg:-top-16 lg:right-32 lg:w-[200px] lg:h-[400px]">
            <Image
              src="/spell.png"
              alt="spell"
              width={200}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
