import { Box, Typography } from "@mui/material";
import React from "react";

const LatestPortfolio = () => {
  const images = [
    "https://i.pinimg.com/736x/d8/57/a5/d857a5572a7ef63b8592198085e78c5c.jpg",
    "https://i.pinimg.com/736x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg",
    "https://i.pinimg.com/1200x/43/13/87/431387656344412df70631c92a61f963.jpg",
    "https://i.pinimg.com/736x/3d/21/bc/3d21bc3f97f7253ffb4b0d71a927e3ac.jpg",
    "https://i.pinimg.com/1200x/f4/5e/66/f45e66a57195833aff26b8614b5c056d.jpg",
    "https://i.pinimg.com/1200x/19/92/ab/1992abf7327bb7c98034639368731e46.jpg",
    "https://i.pinimg.com/736x/07/fa/3d/07fa3d81f107ee88efc277003f880f66.jpg",
    "https://i.pinimg.com/1200x/6b/73/60/6b7360bfbfec21cbbcfc8d503188349f.jpg",
  ];

  return (
    <Box
      sx={{
        padding: {lg:"8% 0%", md:"12.5% 0%", sm:"8% 0%", xs:"8% 0%"},
        backgroundColor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Typography
          variant="body1"
          className="uppercase bg-white"
          sx={{ padding: "10px 20px", color: "#f37f50", fontWeight: "bold" }}
        >
          Latest Portfolio
        </Typography>
        <Typography variant="h3" sx={{ textAlign: "center", fontSize:{lg:"4rem",md:"3.5rem", sm:"3rem", xs:"2rem"} }}>
          Optimum Homes & Properties <br /> Realty Experts
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          overflowX: "auto", // Auto scroll ke liye
          overflowY: "hidden", // Vertical scroll hatane ke liye
          scrollBehavior: "smooth", // Smooth scrolling ke liye
          // Scrollbar hide karne ke liye (but scroll functionality intact)
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Edge
          },
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        {images.map((elem, index) => (
          <Box
            component="img"
            src={elem}
            sx={{
              height: {lg:"70vh",md:"60vh",sm:"50vh", xs:"40vh"},
              width: "auto", // Width auto rakho taaki aspect ratio maintain ho
              minWidth: "300px", // Minimum width set karo
              flexShrink: 0, // Images ko shrink hone se roko
              objectFit: "cover", // Ya "contain" according to need
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default LatestPortfolio;
