import React from "react";
import messageicon from "../../assets/footer/message.png";
import twitter from "../../assets/footer/twitter.png";
import facebook from "../../assets/footer/facebook.png";
import insta from "../../assets/footer/insta.png";
import youtube from "../../assets/footer/youtube.png";
import { Button } from "@mui/material";

const Footer = () => {
  const contactInfo = [
    "Demo Store",
    "No. 1258 Utawala, Nairobi, 01010",
    "Kenya",
    "+25470101010",
    "example@gmail.com",
  ];

  const information = [
    "Privacy Policy",
    "Refund Policy",
    "Shipping Policy",
    "Terms Of Services",
    "Blogs",
  ];

  const account = ["Search", "About Us", "Faq", "Contact", "Help"];

  const quickLinks = [
    "Making India Awesome",
    "A Village by the Sea ",
    "A Bend in the River",
    "Ezra–Nehemiah",
    "Joshua",
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 w-full mt-auto py-16 ">

      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center gap-6 p-4">
        <div className="flex gap-2 items-center ml-4">
          <img src={messageicon} alt="message" className="w-6" />
          <p className="text-[18px] text-white">Sign Up To Shop Now</p>
        </div>

        <div className="relative w-full lg:w-auto p-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="px-1 py-4 w-full lg:w-[30rem] rounded-[5px] border-none h-11 custom-placeholder"
          />

          <div className="absolute sm:right-4 right-4 top-1  mt-4 ">
            <Button
              variant="contained"
              className="!bg-blue-400 h-full rounded-l-none w-20 !text-[10px]"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <hr className="border-t border-white my-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-around gap-6 text-white px-4 lg:px-16 w-[70%] sm:w-full mx-auto">
        <FooterSection title="Contact" items={contactInfo} />
        <FooterSection title="Information" items={information} />
        <FooterSection title="Account" items={account} />
        <FooterSection title="Quick Links" items={quickLinks} />

        <div className="flex flex-col justify-between lg:mb-10">
          <p className="font-medium text-[20px]">Social Media</p>
          <ul className="text-sm">
            <li>Follow us on social media and stay updated.</li>
          </ul>
          <div className="flex gap-4 mt-3">
            <img src={twitter} alt="Twitter" className="w-6" />
            <img src={facebook} alt="Facebook" className="w-6" />
            <img src={insta} alt="Instagram" className="w-6" />
            <img src={youtube} alt="YouTube" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterSection = ({ title, items }) => (
  <div>
    <p className="font-medium text-[20px]">{title}</p>
    <ul className="text-sm">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Footer;
