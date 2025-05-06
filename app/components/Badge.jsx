import React from "react";
import { Box } from "@mui/material";
const Badge = () => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(#666666, #000000, #666666)",
        padding: "2px",
        borderRadius: "18px",
      }}
    >
      <div className="flex items-center justify-center text-[16px] bg-red-gradient max-w-[395px] rounded-2xl px-5 py-4 gap-2">
        <span className="rounded-2xl bg-white text-[#333333] py-1 px-2 font-bold text-[12px]">
          +200%
        </span>
        <h1 className="font-bold leading-[40px]">
          Triple the value of the first purchase!
        </h1>
      </div>
    </Box>
  );
};

export default Badge;
