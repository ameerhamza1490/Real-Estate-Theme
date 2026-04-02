import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

const Nav = () => {
  return (
    <div>
      <div
        className="lg:flex md:flex sm:block justify-between text-lg bg-gray-100 "
        style={{ padding: "15px 6%" }}
      >
        <div className="lg:flex md:flex sm:block">
          <div >
            <i className="ri-phone-fill" style={{ paddingRight: "5px" }}></i>
            <span style={{ paddingRight: "100px" }}>(+92-333-2213050)</span>
          </div>

          <div>
            <i className="ri-mail-fill" style={{ paddingRight: "5px" }}></i>
            <span>theameerverse@gmail.com</span>
          </div>
        </div>
        <div>
          <i className="ri-map-pin-2-fill" style={{ paddingRight: "5px" }}></i>
          <span>Karachi, Pakistan</span>
        </div>
      </div>
      <ResponsiveAppBar />
    </div>
  );
};

export default Nav;
