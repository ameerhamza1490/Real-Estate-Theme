import { Box, Typography } from "@mui/material";
import React from "react";

const LatestCards = () => {
  const properties = [
    {
      image:
        "https://i.pinimg.com/736x/d8/57/a5/d857a5572a7ef63b8592198085e78c5c.jpg",
      rent: "$300.00/",
      duration: "per day",
      tagLine: "Turning Dreams into Addresses Home State",
      address: "66 Broklyant, New York America",
    },
    {
      image:
        "https://i.pinimg.com/736x/96/9e/29/969e29466c4040aa181f7d80e6cac331.jpg",
      rent: "$450.00/",
      duration: "per day",
      tagLine: "Luxury Living in the Heart of the City",
      address: "123 Manhattan Ave, New York America",
    },
    {
      image:
        "https://i.pinimg.com/1200x/43/13/87/431387656344412df70631c92a61f963.jpg",
      rent: "$280.00/",
      duration: "per day",
      tagLine: "Cozy & Comfortable Family Home",
      address: "45 Queens Street, New York America",
    },
    {
      image:
        "https://i.pinimg.com/736x/3d/21/bc/3d21bc3f97f7253ffb4b0d71a927e3ac.jpg",
      rent: "$500.00/",
      duration: "per day",
      tagLine: "Modern Apartment with Great View",
      address: "789 Brooklyn Bridge, New York America",
    },
    {
      image:
        "https://i.pinimg.com/1200x/f4/5e/66/f45e66a57195833aff26b8614b5c056d.jpg",
      rent: "$350.00/",
      duration: "per day",
      tagLine: "Affordable & Spacious Living",
      address: "22 Staten Island, New York America",
    },
    {
      image:
        "https://i.pinimg.com/1200x/19/92/ab/1992abf7327bb7c98034639368731e46.jpg",
      rent: "$600.00/",
      duration: "per day",
      tagLine: "Penthouse with Rooftop Access",
      address: "100 Central Park West, New York America",
    },
    {
      image:
        "https://i.pinimg.com/736x/07/fa/3d/07fa3d81f107ee88efc277003f880f66.jpg",
      rent: "$275.00/",
      duration: "per day",
      tagLine: "Budget-Friendly Studio Apartment",
      address: "55 Bronx River Road, New York America",
    },
    {
      image:
        "https://i.pinimg.com/1200x/6b/73/60/6b7360bfbfec21cbbcfc8d503188349f.jpg",
      rent: "$420.00/",
      duration: "per day",
      tagLine: "Family Friendly Neighborhood",
      address: "88 Long Island Ave, New York America",
    },
  ];
  console.log(properties[0]);
  return (
    <div>
      <Box className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-10 justify-center">
        {properties.map((elem, index) => (
          <Box sx={{ backgroundColor: "#1d1b1b" }} key={index}>
            <Box component="img" src={elem.image} sx={{ height: "40vh", width: "100%" }}></Box>
            <Box
              sx={{
                color: "white",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography>
                {" "}
                {elem.rent}
                <span className="text-gray-300" style={{ fontSize: "0.prem" }}>
                  {elem.duration}
                </span>
              </Typography>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                {elem.tagLine}
              </Typography>
              <Typography className="text-gray-300">
                <i
                  className="ri-map-pin-2-fill text-white"
                  style={{ paddingRight: "5px" }}
                ></i>
                {elem.address}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default LatestCards;
