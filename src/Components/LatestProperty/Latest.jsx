import { Typography, Box, Button } from "@mui/material";
import React from "react";
import LatestCards from "./LatestCards";

const Latest = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#181616", padding: " 8% 6%", overflow:"hidden" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { lg: "end", md: "end", sm: "start" },
            gap:{sm:"20px", xs:"20px"},
            paddingBottom: "4%",
            flexDirection: { lg: "row", md: "row", sm: "column", xs:"column" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography
              variant="body1"
              sx={{
                color: "#e05821",
                fontSize: "0.9rem",
              }}
              className="uppercase"
            >
              <span
                style={{
                  backgroundColor: "#211e1e",
                  padding: "10px 10px",
                  borderRadius: "5px",
                }}
              >
                Latest Property
              </span>
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "2.7rem",
                  lg: "3rem",
                },
              }}
            >
              Prestige Property <br /> Management property for you
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#f58721", padding: "15px 40px" }}
            >
              View More
              <i
                className="ri-arrow-right-line text-2xl"
                style={{ paddingLeft: "5px" }}
              ></i>
            </Button>
          </Box>
        </Box>
        <Box>
          <LatestCards />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f58721", padding: "15px 40px" }}
          >
            See All listing{" "}
            <i
              className="ri-arrow-right-line text-2xl"
              style={{ paddingLeft: "5px" }}
            ></i>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Latest;
