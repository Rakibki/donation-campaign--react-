import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../.../../../../assets/images/Logo.png";

const Navber = () => {
  return (
    <div className="navbar flex-col md:flex-row px-4 md:px-16 py-4">
      <div className="flex-1">
        <img className=" w-[150px] md:w-[210px]" src={logo} alt="logo" />
      </div>
      <div className="flex-none mt-4 md:mt-0">
        <ul className=" flex gap-4 px-1">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold underline text-[#FF444A]"
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold underline text-[#FF444A]"
                  : ""
              }
              to={"/donation"}
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-semibold underline text-[#FF444A]"
                  : ""
              }
              to={"/statistics"}
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navber;
