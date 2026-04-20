import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

import React from "react";

const Footer = () => {
  const servicesOffer = [
    "Reliable Rentals",
    "Golden Key Properties",
    "Swift Home Sales",
    "Elite Realty Services",
    "Dream Property Solutions",
  ];
  return (
    <Box>
      <Box sx={{ padding: "8% 6%", backgroundColor: "#181616" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection:{lg:"row", md:"column", sm:"column", xs:"column"},
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <span>
              <Box
                component="img"
                src="https://cityscape.wowtheme7.com/assets/logo-DHG6Mbuc.png"
                sx={{ backgroundColor: "white" }}
              ></Box>
            </span>

            <Typography variant="body1" sx={{ color: "#8a8989" }}>
              It is a long established fact that a reader will be distracted
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Lets Work Together
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="body1" sx={{ color: "#8a8989" }}>
                  {" "}
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ color: "#f37f50", paddingRight: "5px" }}
                  ></i>
                  Address
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  66 Broklyant, New York
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ color: "#8a8989" }}>
                  <i
                    className="fa-solid fa-phone"
                    style={{ color: "#f37f50", paddingRight: "5px" }}
                  ></i>
                  Phone Number
                </Typography>
                <Typography variant="body1" sx={{ color: "white" }}>
                  +92-3332213050
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ color: "white" }}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              Services
            </Typography>
            {servicesOffer.map((elem, index) => (
              <Typography key={index} sx={{ marginBottom: "10px" }}>
                <i
                  className="fa-solid fa-angles-right"
                  style={{ color: "#f37f50", paddingRight: "30px" }}
                ></i>
                {elem}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Subscribe
            </Typography>
            <Typography variant="body1" style={{ color: "#8a8989" }}>
              It is a long established fact that reader will be Elite Property
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="Your mail address"
              variant="outlined"
              sx={{ backgroundColor: "white" }}
            />
            <Typography>
              <span
                style={{
                  color: "white",
                  border: "1px solid white",
                  padding: "15px 10px",
                  borderRadius: "5px",
                }}
              >
                <i
                  className="ri-facebook-fill"
                  style={{
                    color: "white",
                    paddingRight: "15px",
                    fontSize: "25px",
                  }}
                ></i>
                <i
                  className="ri-twitter-fill"
                  style={{
                    color: "white",
                    paddingRight: "15px",
                    fontSize: "25px",
                  }}
                ></i>
                <i
                  className="ri-linkedin-fill"
                  style={{
                    color: "white",
                    paddingRight: "15px",
                    fontSize: "25px",
                  }}
                ></i>
                <i
                  className="ri-instagram-line"
                  style={{
                    color: "white",
                    paddingRight: "15px",
                    fontSize: "25px",
                  }}
                ></i>
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
