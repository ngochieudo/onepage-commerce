import React from "react";
import Badge from "../Badge";
import { packData } from "@/app/data";
import TopUpCard from "./TopUpCard";

const TopUp = () => {
  return (
    <div id="topup" className="w-[100vw] h-full bg-[url('/bg/cold_env.png')] bg-cover text-white bg-center">
      <h1 className="text-5xl/[64px] font-bold text-center mb-8 text-[#D9D9D9]">Direct Top-up</h1>
      <div className="px-8 gap-6">
        <div className="flex items-center justify-center">
          <Badge />
        </div>
        <div className="flex flex-wrap gap-6 max-w-[1280px] mx-auto justify-center mt-8 pb-32">
          {packData.map((item, index) => (
            <TopUpCard
            key={item.id}
            image={item.image}
            title={item.name}
            amount={item.amount}
            price={item.price}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopUp;
