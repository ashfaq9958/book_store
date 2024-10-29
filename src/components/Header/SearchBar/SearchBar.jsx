import React from "react";
import logo from "../../../assets/Logo/logo.png";
import cartlogo from "../../../assets/cart logo/logo.svg";
import usericon from "../../../assets/userlogo/user.svg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:mt-5 mt-3">
      <div className="w-full md:w-[85%] xl:w-[70%] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:p-0 p-2">
        {/* Logo */}
        <div className="w-28 sm:w-24 cursor-pointer object-contain" onClick={() => navigate("/")}>
          <img src={logo} alt="Company Logo" className="w-full" />
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-auto h-auto sm:h-10 gap-2 sm:gap-0">
          <div className="relative w-full sm:w-96">
            <TextField
              placeholder="Search by title or author."
              InputProps={{
                style: {
                  height: "100%",
                },
                inputProps: {
                  style: {
                    fontSize: "12px",
                  },
                },
              }}
              className="!h-full w-full sm:w-96 !bg-white"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <SearchOutlinedIcon style={{ color: "#9ca3af" }} />
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-2 sm:gap-3 items-center">
            <img
              src={usericon}
              alt="User"
              className="w-6 sm:w-6 md:w-20 lg:w-6"
            />
            <p className="text-[#301F4A] font-medium sm:hidden lg:block md:text-[12.67px] !capitalize">
              SIGN IN / SIGN UP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
