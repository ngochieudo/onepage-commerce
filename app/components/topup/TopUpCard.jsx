import { Box, Button } from "@mui/material";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";

const TopUpCard = ({ image, title, amount, price }) => {
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
      <Box className="rounded-2xl px-[21px] py-4 gap-2 bg-[#240500F7] w-[270px] h-[396px]">
        <Box className="w-[228px] h-[228px]">
          <Image
            src={image}
            alt={title}
            width={228}
            height={228}
            className="object-cover h-full"
          />
        </Box>
        <h1 className="text-[20px] gap-[10px] font-bold text-[#D9D9D9] leading-[40px] text-center">
          {title}
        </h1>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#482929",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            height: "44px",
            width: "100%",
            paddingX: "12px",
            paddingY: "10px",
          }}
        >
          <Box sx={{display: 'flex', alignItems:'center', gap:'10px'}}>
            <Image src="/packs/gem.png" width={20} height={20} className=""/> 
            <span className="font-semibold text-base">Gem</span>
          </Box>
          <span className="text-base font-semibold">{amount}</span>
        </Box>
        {/* Button group */}
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(#666666, #2E2E2EDD, #000000C2, #2E2E2EDD, #666666)",
              padding: "1px",
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            <Button
              sx={{
                width: "100%",
                height: "44px",
                backgroundColor: "#FF1E02",
                borderRadius: 0,
                color: "white",
                fontWeight: "600",
                fontSize: "16px",
                padding: 0,
              }}
            >
              ${price}
            </Button>
          </Box>
          <Box
            sx={{
              backgroundImage:
                "linear-gradient(#666666, #2E2E2EDD, #000000C2, #2E2E2EDD, #666666)",
              padding: "1px",
              textAlign: "center",
            }}
          >
            <Button
              sx={{
                minWidth: "44px",
                height: "44px",
                backgroundColor: "#FF1E02",
                borderRadius: 0,
                color: "white",
                padding: 0,
              }}
            >
              <LanguageIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopUpCard;
