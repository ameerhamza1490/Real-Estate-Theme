import { Box, Typography } from "@mui/material";
import React from "react";

const Clients = () => {
  const data = [
    {
      dataNumber: "200",
      dataText: "Happy Patients",
    },
    {
      dataNumber: "20",
      dataText: "Save Hearts",
    },
    {
      dataNumber: "10",
      dataText: "Expert Doctors",
    },
    {
      dataNumber: "900",
      dataText: "serenity work",
    },
  ];
  return (
    <Box>
      <Box className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-6 gap-y-10 justify-center">
        {data.map((elem, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                "& .data-number": {
                  color: "#c0c0c0",
                  transform: "scale(1.05)",
                },
              },
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bolder",
                  color: "#ececec",
                  fontSize: "6rem",
                  transition: "all 0.3s ease", 
                  display: "inline-block", 
                }}
                className="data-number"
              >
                {elem.dataNumber}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)", whiteSpace:"nowrap"
              }}
              className="uppercase"
            >
              {elem.dataText}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Clients;
