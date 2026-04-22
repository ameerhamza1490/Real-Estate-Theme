import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ProductCard = () => {
  const images = [
    "https://i.pinimg.com/736x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg",
    "https://i.pinimg.com/1200x/19/92/ab/1992abf7327bb7c98034639368731e46.jpg",
    "https://i.pinimg.com/1200x/6b/73/60/6b7360bfbfec21cbbcfc8d503188349f.jpg",
  ];
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "row", md: "column", sm: "column", xs: "column" },
          gap: "20px",
          cursor: "pointer",
        }}
      >
        {images.map((elem, index) => (
          <Box sx={{ overflow: "hidden" }}>
            <Box
              component="img"
              src={elem}
              sx={{
                width: "100%",
                height: "40vh",
                objectFit: "cover",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
              key={index}
            ></Box>
            <Box
              sx={{
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                border: "2px solid #d1d5dc",
              }}
            >
              <Typography variant="body1">
                <span
                  className="border-gray-300 rounded border-2 text-gray-400"
                  style={{
                    padding: "15px",
                    fontSize: "12px",
                  }}
                >
                  <span style={{ paddingRight: "20px" }}>
                    {" "}
                    <i
                      className="ri-admin-fill text-black"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    By Admin
                  </span>
                  <span>
                    {" "}
                    <i
                      className="ri-chat-3-fill text-black"
                      style={{ paddingRight: "5px" }}
                    ></i>
                    Comments
                  </span>
                </span>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  "&:hover": {
                    color: "#f37f46",
                  },
                }}
              >
                Discover Endless Possibilities in Real Estate Live Your Best
                Life
              </Typography>
              <Typography
                className="uppercase"
                sx={{
                  fontSize: "15px",
                  "&:hover": {
                    color: "#f37f46",
                  },
                }}
              >
                Read More{" "}
                <i
                  className="fa-solid fa-plus"
                  style={{ color: "#f37f50" }}
                ></i>
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductCard;
