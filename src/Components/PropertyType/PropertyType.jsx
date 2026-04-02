import { Box, Typography } from "@mui/material";
import React from "react";

const PropertyType = () => {
  const arr = [
    {
      image: "ri-home-8-line",
      tagline: "Seamless Solutions  Your Success",
      desc: "Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word",
    },

    {
      image: "ri-home-9-line",
      tagline: "Proactive Realty  Services",
      desc: "Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word",
    },

    {
      image: "ri-home-wifi-line",
      tagline: "Your Supreme Home  Finders",
      desc: "Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word",
    },
  ];
  return (
    <Box>
      <Box
        sx={{
          padding: " 8% 6%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
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
          <Typography variant="h6">
            <span
              style={{
                padding: "10px",
                fontSize: "13px",
                letterSpacing: "2px",
                color: "#f06021",
              }}
              className="bg-gray-200 uppercase font-bold"
            >
              Property Type
            </span>
          </Typography>

          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Let us find the perfect the <br /> property for you
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "column",
              sm: "column",
              xs: "column",
            },
            gap: "20px",
            padding: "30px 0",
            overflow: "hidden",
          }}
        >
          {arr.map((elem, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "50px",
                backgroundColor: "#f8f8f8",
                gap: "10px",
              }}
            >
              <Box sx={{ marginBottom: "20px" }}>
                <i
                  className={elem.image}
                  style={{
                    backgroundColor: "#f58721",
                    fontSize: "40px",
                    padding: "20px",
                    borderRadius: "50%",
                    color: "white",
                  }}
                ></i>
              </Box>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: "1.8rem" }}
              >
                {elem.tagline}
              </Typography>
              <Typography variant="body1">{elem.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyType;
