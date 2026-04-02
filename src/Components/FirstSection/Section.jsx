import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Section = () => {
  return (
    <div>
      <Box sx={{ padding: "15px 6%", backgroundColor: "#F7F7F7" }}>
        <Box
          sx={{
            display: { xs: "block", md: "block", lg: "flex" },
            flexDirection: "row",
            justifyContent: { xs: "center", md: "center", lg: "space-between" },
            padding: "80px 0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingBottom: { xs: "50px" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "4px",
              }}
              className="uppercase"
            >
              FinTech Fusion
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3.5rem",
                  lg: "4rem",
                },
                lineHeight: 1.2,
              }}
            >
              Invest today in You
              <span style={{ color: "#f37c21" }}> Dream Home </span>
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "gray",
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "16px",
                },
              }}
            >
              Unlock the Power of Real Estate Making Your Real Estate Dreams a
              Reality Real Estate here Unlock the Power of Real Estate
            </Typography>
          </Box>
          <Box
            component="img"
            src="https://cityscape.wowtheme7.com/assets/banner-img-C9N0pCHn.png"
          ></Box>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "block", lg: "flex" },
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "80px 0",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#f6dbcc",
              padding: {
                xs: "20px",
                sm: "40px",
                md: "60px",
                lg: "80px",
              },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="https://cityscape.wowtheme7.com/assets/about-img-Bvhtdgfl.png"
              sx={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                padding: { xs: "12px 16px", sm: "20px 30px", md: "30px 40px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                textAlign: "center",
                gap: { xs: "8px", sm: "15px", md: "20px" },
                height: "auto",
                borderRadius: "10px 10px 0 0",
                width: { xs: "auto", sm: "auto", md: "auto" },
                minWidth: { xs: "200px", sm: "250px", md: "auto" },
                maxWidth: {
                  xs: "calc(100% - 20px)",
                  sm: "calc(100% - 40px)",
                  md: "100%",
                },
                whiteSpace: "nowrap",
                boxSizing: "border-box",
              }}
            >
              <i className="fa-solid fa-users text-orange-400 text-3xl"></i>{" "}
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" } }}
                >
                  4,000
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#b1a1b6", fontSize: { sm: "1rem" } }}
                >
                  Satisfied Clients
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              paddingTop: { xs: "50px" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "4px",
              }}
              className="uppercase"
            >
              <span
                className="bg-white text-orange-400 rounded"
                style={{ padding: "8px" }}
              >
                About us
              </span>
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bolder",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  lg: "3rem",
                },
              }}
            >
              Stay with us feel at home <br /> Your perfect stay awaits
            </Typography>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                padding: "2rem",
                gap: "20px",
                alignItems: "start",
              }}
            >
              <Box>
                <i className="ri-home-8-line text-3xl text-orange-300"></i>{" "}
              </Box>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
                  Your Dream Home Awaits
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontSize: "12px" }}
                  className="text-gray-400"
                >
                  Real Estate is a vast industry that deals with the buying,
                  selling, and renting of properties. It inv <br /> transactions
                  related to residential, commercial, and industrial properties
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#f58721", padding: "20px 40px" }}
              >
                Learn More
                <i className="ri-arrow-right-line text-2xl" style={{paddingLeft:"5px"}} ></i>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Section;
