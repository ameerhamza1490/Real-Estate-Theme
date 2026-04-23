import { Button } from "@mui/material";
import React from "react";

const Top = () => {
  return (
    <div>
      <div
        className="flex justify-between"
        style={{
          backgroundColor: "#262626",
          padding: "15px 2%",
          position: "fixed",
          width: "100%",
          top: "0",
          zIndex: 10,
        }}
      >
        <div>
          <h1
            className="text-white font-extrabold cursor-pointer"
            style={{ fontSize: "20px" }}
          >
            envato<span className="font-light">market</span>
          </h1>
        </div>
        <Button variant="contained" sx={{ backgroundColor: "#82b440" }}>
          Buy now
        </Button>
      </div>
      <div style={{ height: "70px" }}></div>
    </div>
  );
};

export default Top;
