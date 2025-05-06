"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddMoneyIcon from "../icons/AddMoneyIcon";
import VoucherIcon from "../icons/VoucherIcon";
import SupportIcon from "../icons/SupportIcon";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { link } from "@/app/data";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <div className="bg-[#0C0A09]">
      <div className="flex items-center justify-between w-full h-[94px] max-w-[1280px] mx-auto px-16 py-6">
        <div className="w-1/2 flex items-center justify-start gap-4">
          {/* Logo and Menu Items */}
          <div className="max-w-[200px] max-h-[100px] hidden md:block">
            <Image
              src="/store_logo_nav.png"
              alt="logo"
              width={160}
              height={44}
              className="object-contain"
            />
          </div>
          <div className="hidden lg:flex items-center justify-between w-[400px] h-11 text-white font-semibold text-[16px] pl-4">
            <a href="#topup" className="hover:underline">
              <li className="flex">
                <AddMoneyIcon />
                Direct Top up
              </li>
            </a>
            <a href="#voucher" className="hover:underline">
              <li className="flex">
                <VoucherIcon />
                Voucher
              </li>
            </a>

            <a href="#qna" className="hover:underline">
              <li className="flex">
                <SupportIcon />
                Support
              </li>
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </button>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box
                sx={{
                  width: "auto",
                  backgroundColor: "#0C0A09",
                  color: "white",
                  textAlign: "center"
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {link.map((item) => (
                    <ListItem button key={item.title}>
                      <a href={item.href} className="font-semibold">
                        {item.title}
                      </a>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </div>
        </div>
        {/* Search Bar and Language Selector */}
        <div className="flex justify-end items-center gap-[10px] w-full lg:w-1/2">
          <div className="relative w-full max-w-[350px] hidden lg:block">
            <input
              type="text"
              className="w-full px-4 py-2 rounded-[8px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF1E02] text-black"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5text-gray-400"
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
    </div>
  );
};

export default Navbar;
