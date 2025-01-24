import React from "react";
import logo from "../assets/logo.svg";
import { HiMiniChevronDown } from "react-icons/hi2";
import vector1 from "../assets/flower.svg";
import vector2 from "../assets/flower2.svg";
import "./nav.scss";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Product News",
    subtitle:
      "Get informed about activities going on in the ecosystem at all time.",
  },
  {
    title: "Inventory",
    subtitle:
      "Effective inventory system with accurate alert and advice for your business.",
  },
  {
    title: "Daily Price Monitoring",
    subtitle:
      "Never late to know current market price and able to predict change in price over time.",
  },
  {
    title: "Invoicing",
    subtitle:
      "Comprehensive invoicing system for your customers with payment options.",
  },
  {
    title: "Investment",
    subtitle:
      "Opportunity to invest in potential businesses with a P2P possibility of selling your investment.",
  },
  {
    title: "Payment Receiving",
    subtitle:
      "Receive payment using USSD, Card, transfer and our loyalty card, Credit Card Build your credit by transacting on the platform and get opportunity to lifetime credit card.",
  },
];
const features2 = [
  {
    title: "Multiple Businesses",
    subtitle:
      "You can create Multiple businesses in your account allowing you to track all your businesses.",
  },
  {
    title: "Business Listing",
    subtitle:
      "Free marketing for your business as we list for guests and other companies.",
  },
  {
    title: "Assign Roles",
    subtitle:
      "Allow you to invite your workers to your business and assign permissions to them on what they can access.",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-[80px]  z-[999] flex items-center sm:px-[64px] px-[16px] absolute top-0 left-0 right-0">
      <div className="relative w-full  md:grid flex grid-cols-11 h-full items-center justify-between">
        <div className="col-span-6 flex  justify-between w-full max-w-[685px] gap-[30px]">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt=""
            className="cursor-pointer h-[35px] mb-[14px] "
          />
          <div className="sm:flex hidden  gap-[16px] justify-between w-full">
            <div className="flex features items-center relative gap-[4px] text-[#005655] text-[16px] font-[600] cursor-pointer">
              Features <HiMiniChevronDown />
              <div className="absolute top-[16px] list left-0">
                <Features />
              </div>
            </div>
            <span
              onClick={() => navigate("/privacy")}
              className="flex items-center gap-[4px] text-[#005655] text-[16px] font-[600] cursor-pointer"
            >
              Privacy <HiMiniChevronDown />
            </span>
            <span className="flex items-center gap-[4px] text-[#005655] text-[16px] font-[600] cursor-pointer">
              Contact <HiMiniChevronDown />
            </span>
          </div>
        </div>
        <div className="col-span-5 flex items-center justify-end">
          <span className="h-[46px] text-[#005655] text-[16px] font-[600] cursor-pointer flex items-center justify-center px-[24px] bg-[#C9F001] rounded-[8px]">
            Download
          </span>
        </div>
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="max-w-[1079px] w-full relative flex flex-col gap-[40px]  min-h-[539px] border border-gray-200 bg-[#fff]  ">
      <div className="  gap-[43px] p-[24px] w-full h-full z-[99999999] relative grid sm:grid-cols-12 grid-cols-6 ">
        <img className="absolute left-0 z-[99999]  " src={vector2} alt="" />

        {features.map((f, n) => (
          <div key={n} className="col-span-6 w-full flex flex-col gap-[4px]">
            <span className="text-[#005655] text-[14px] font-[700]">
              {f.title}
            </span>
            <span className="text-[#72747D] text-[12px] font-[400]">
              {f.subtitle}
            </span>
          </div>
        ))}
      </div>
      <span className="flex w-full h-[1px] bg-[#D9D9D9]"></span>
      <div className="flex flex-col w-full gap-[16px]">
        <span className="text-[#005655] text-[14px] px-[24px] font-[700]">
          Additional Features
        </span>
        <div className=" gap-[43px] p-[24px] w-full h-full z-[99999999] relative grid sm:grid-cols-12 grid-cols-6 ">
          <img className="absolute right-0 z-[99999] " src={vector1} alt="" />
          {features2.map((f, n) => (
            <div key={n} className="col-span-6 w-full flex flex-col gap-[4px]">
              <span className="text-[#005655] text-[14px] font-[700]">
                {f.title}
              </span>
              <span className="text-[#72747D] text-[12px] font-[400]">
                {f.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
