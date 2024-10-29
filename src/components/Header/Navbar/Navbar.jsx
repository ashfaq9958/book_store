import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { title: "BookList", link: "/" },
  
    { title: "Add Book", link: "/add-books" },
    { title: "Edit Book", link: "/edit-book" },
    { title: "Blogs", link: "/blogs" },
  
    { title: "Contact us", link: "/contactus" },
  ];

  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#6495ED" : "#000",
  });

  return (
    <div className="mt-5 w-full">
      <div className="sm:hidden flex justify-end items-center px-5">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none"
        >
          {isOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>

      <div className="hidden sm:flex sm:w-[90%] sm:mx-auto sm:gap-9 sm:p-2 sm:justify-center sm:text-center sm:items-center sm:font-semibold sm:text-sm md:text-base">
        {links.map((item) => (
          <NavLink key={item.title} to={item.link} style={linkStyle}>
            {item.title}
          </NavLink>
        ))}
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4 items-center sm:hidden">
          {links.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              style={linkStyle}
              onClick={() => setIsOpen(false)}
              className="font-semibold text-[16px]"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
