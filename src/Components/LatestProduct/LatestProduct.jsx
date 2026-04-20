import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import ProductCard from "./ProductCard";

const LatestProduct = () => {
  return (
    <Box sx={{ padding: "8% 6%", backgroundColor: "#f7f7f7" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs:"column" },
            justifyContent: "space-between",
            alignItems: { lg: "end", md: "end", sm: "start", xs:"start" },
            gap: "20px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="body1">
              <span
                className="uppercase"
                style={{
                  padding: "5px 10px",
                  color: "#f37f50",
                  fontWeight: "bold",
                  backgroundColor: "white",
                }}
              >
                Latest Product
              </span>
            </Typography>{" "}
            <Typography
              variant="h3"
              sx={{
                fontSize: { lg: "3rem", md: "2rem", sm: "2rem", xs: "1.7rem" },
              }}
            >
              Prestige Property Management <br /> property for you
            </Typography>
          </Box>

          <Box>
            <Button
              variant="outlined"
              sx={{
                color: "black",
                padding: "20px 30px",
                border: "1px solid #f05b22",
                borderTopWidth: "2px",
                "&:hover": {
                  backgroundColor: "#f48520",
                  color: "white",
                },
              }}
              className="btn"
            >
              View Moreee <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
        <ProductCard />
      </Box>
    </Box>
  );
};

export default LatestProduct;
