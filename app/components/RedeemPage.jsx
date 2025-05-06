import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";

const RedeemPage = () => {
  return (
    <div className="w-[100vw] h-full bg-[url('/bg/rock_env.png')] bg-cover bg-center text-white">
      <div className="pb-[124px] px-16 max-w-[1280px] mx-auto">
        <Box
          sx={{
            backgroundImage: "linear-gradient(#C9C9C9, #000000, #C9C9C9)",
            padding: "1px",
            width: "100%",
            borderRadius: "36px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "column", lg: "row" },
              padding: "32px",
              gap: "32px",
              backgroundImage: "linear-gradient(#422B98, #6E48FE)",
              borderRadius: "36px",
              position: "relative",
            }}
          >
            {/* Promo */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { md: "100%", lg: "50%" },
                gap: "26px",
                textAlign: { lg: "left", xs: "center" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  lineHeight: "40px",
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                  color: "white",
                }}
              >
                Redeem code
              </Typography>
              <Typography
                sx={{
                  fontSize: "40px",
                  lineHeight: "53px",
                  letterSpacing: "-0.3px",
                  fontWeight: 700,
                  color: "#D9D9D9",
                }}
              >
                Grant discounts and in-game bonuses to your players
              </Typography>
              <Box
                sx={{
                  width: { lg: "324px", md: "100%" },
                }}
              >
                <input
                  type="text"
                  className="bg-[#F6F6F69E] w-full h-11 outline-none placeholder:text-[#727272] placeholder:font-semibold placeholder:text-base text-black mb-[14px]"
                  placeholder="Enter promo code"
                />
                <button className="text-center w-full h-11 bg-[#FF1E02] font-semibold text-base tracking-[-0.3px] text-white">
                  Redeem Code
                </button>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                display: {md: "none", lg: "block"},
                width: { md: "100%", lg: "50%" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "40px",
                  right: "160px",
                  rotate: "18.14deg",
                }}
              >
                <Image src="/gift.png" alt="gift" width={237} height={237} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "124px",
                  right: "350px",
                }}
              >
                <Image src="/gift.png" alt="gift" width={167} height={167} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "215px",
                  right: "310px",
                }}
              >
                <Image src="/gift.png" alt="gift" width={93} height={93} />
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default RedeemPage;
