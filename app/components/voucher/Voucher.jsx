import React from "react";

import Badge from "../Badge";
import { voucherData } from "@/app/data";
import VoucherCard from "./VoucherCard";

const Voucher = () => {
  return (
    <div id="voucher" className="w-[100vw] h-full bg-[url('/bg/rock_env.png')] bg-cover bg-center text-white pb-32 gap-9">
      <h1 className="text-5xl/[64px] font-bold text-center mb-8 text-[#D9D9D9]">Voucher</h1>
      <div className="px-8 gap-6">
        <div className="flex items-center justify-center">
          <Badge />
        </div>
        <div className="flex flex-wrap gap-6 max-w-[1280px] mx-auto justify-center mt-8">
          {voucherData.map((item, index) => (
            <VoucherCard
              key={index}
              image={item.image}
              title={item.name}
              description={item.description}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voucher;
