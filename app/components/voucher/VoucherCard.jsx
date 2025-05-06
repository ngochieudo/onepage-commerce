import { Box, Button } from "@mui/material";
import Image from "next/image";

const VoucherCard = ({ image, title, description, oldPrice, newPrice }) => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(#C9C9C9, #000000, #C9C9C9)",
        padding: "1px",
        borderRadius: "16px",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)",
        },
      }}
    >
      <Box className="rounded-2xl px-[21px] py-4 gap-2 bg-[#240500F7] w-[369px] h-[416px]">
        <Box className="w-[350px] h-[228px]">
          <Image
            src={image}
            alt={title}
            width={327}
            height={228}
            className="object-cover h-full"
          />
        </Box>
        <h1 className="text-[20px] gap-[10px] font-bold text-[#D9D9D9] leading-[40px]">
          {title}
        </h1>
        <h2 className="text-[20px] gap-[10px] font-light text-white leading-[24px]">
          {description}
        </h2>
        <Box sx={{
          display: 'flex'
        }}>

        </Box>
        <Box
          sx={{
            backgroundImage: "linear-gradient(#C9C9C9, #000000, #C9C9C9)",
            padding: "1px",
            textAlign: 'center',
            marginTop: '10px'
          }}
        >
          <Button sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#FF1E02',
            borderRadius: 0,
            width: '100%',
          }}>
            <span className="text-[#D2CACA] line-through font-semibold">${oldPrice}</span>
            <span className="text-white font-semibold">${newPrice}</span>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VoucherCard;
