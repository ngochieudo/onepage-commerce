import Image from "next/image";
import React from "react";
import AddMoneyIcon from "./icons/AddMoneyIcon";
import VoucherIcon from "./icons/VoucherIcon";
import SupportIcon from "./icons/SupportIcon";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex items-center justify-between w-full h-[94px] bg-[#0C0A09] px-16 py-6">
      <div className="flex w-1/2">
        <div className="max-w-[200px] max-h-[100px]">
          <Image
            src="/store_logo_nav.png"
            alt="logo"
            width={160}
            height={44}
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-between w-[400px] h-11 text-white font-semibold text-[16px] pl-4">
          <a href="" className="hover:underline">
            <li className="flex">
              <AddMoneyIcon />
              Direct Top up
            </li>
          </a>
          <a href="" className="hover:underline">
            <li className="flex">
              <VoucherIcon />
              Voucher
            </li>
          </a>

          <a href="" className="hover:underline">
            <li className="flex">
              <SupportIcon />
              Support
            </li>
          </a>
        </div>
      </div>
      <div className="flex justify-end items-center gap-[10px] w-1/2">
        <div className="relative w-full max-w-[350px]">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-[8px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF1E02] text-black"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </div>
        </div>
        <button className="flex items-center justify-center px-3 py-[10px] bg-[#FF1E02] rounded-[8px] text-white font-semibold text-[16px] hover:bg-[#913125]">
          Log in
        </button>
        <div className="flex items-center">
          {/* <select
                className="px-3 py-2 bg-transparent border-gray-300 rounded-[8px] text-white focus:outline-none focus:ring-2 focus:ring-[#FF1E02]"
                defaultValue="en"
            >
                <option value="en">
                    <Image
                        src="/flags/us.png"
                        alt="English"
                        width={32}
                        height={24}
                        className="inline-block mr-2"
                    />
                </option>
                <option value="vn">
                    <Image
                        src="/flags/vn.png"
                        alt="Vietnam"
                        width={32}
                        height={24}
                        className="inline-block mr-2"
                    />
                </option>
            </select> */}
          <Image
            src="/flags/us.png"
            alt="English"
            width={32}
            height={24}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
