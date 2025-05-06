import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React from "react";

const QnA = ({ question, answer }) => {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(#C9C9C9, #000000, #C9C9C9)",
        padding: "1px",
        width: '100%'
      }}
    >
      <Accordion
        sx={{
          paddingX: "32px",
          paddingY: "12px",
          backgroundColor: "#2F0700",
          color: "white",
          width: "100%",
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}
        >
          <Typography
            component="span"
            sx={{
              paddingY: "20px",
              gap: "24px",
              fontWeight: 700,
              fontSize: "24px",
              lineHeight: "32px",
              letterSpacing: 0,
            }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            paddingY: "20px",
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "0.8px",
          }}
        >
          {answer}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default QnA;
