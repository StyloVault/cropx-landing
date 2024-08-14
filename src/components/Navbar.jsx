import React from "react";
import logo from "../assets/logo.svg";
import { HiMiniChevronDown } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="w-full min-h-[80px]  z-[999] flex items-center sm:px-[64px] px-[16px] absolute top-0 left-0 right-0">
      <div className="relative w-full  md:grid flex grid-cols-11 h-full items-center justify-between">
        <div className="col-span-6 flex items-center justify-between w-full max-w-[685px] gap-[30px]">
          <img src={logo} alt="" />
          <div className="sm:flex hidden max-w-[441px] gap-[16px] justify-between w-full">
            <span className="flex items-center gap-[4px] text-[#005655] text-[16px] font-[600] cursor-pointer">
              Features <HiMiniChevronDown />
            </span>
            <span className="flex items-center gap-[4px] text-[#005655] text-[16px] font-[600] cursor-pointer">
              About <HiMiniChevronDown />
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

export default Navbar;
