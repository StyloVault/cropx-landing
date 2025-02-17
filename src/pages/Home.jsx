import React from "react";
import bg from "../assets/bg.svg";
import vector from "../assets/vector1.svg";
import playstore from "../assets/playstore.svg";
import appstore from "../assets/appstore.svg";
import device from "../assets/phone.svg";
import shadow from "../assets/shodow.svg";
import { Features } from "../components/Navbar";

const Home = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-11 ">
      <div className="md:col-span-6 col-span-11 flex flex-col relative justify-center overflow-hidden sm:px-[64px] px-[16px] py-[80px] ">
        <img className="absolute left-0 top-[80px]" src={vector} alt="" />
        <div className="flex flex-col sm:gap-[40px] gap-[200px] sm:mt-[40px] mt-[80px]">
          <div className="flex flex-col md:items-start items-center gap-[49px]">
            <span className="xl:text-[48px]  md:text-[36px] text-[32px] text-[#000000] md:text-start text-center font-[500] max-w-[682px]">
              Cultivating Knowledge, Connecting Farmers,{" "}
              <span className="text-[#005655]"> Empowering Agriculture.</span>
            </span>
            <span className="md:text-start text-center md:pr-4">
              Our platform goes beyond conventional boundaries, providing
              real-time insights into daily product prices, facilitating
              community engagement, and offering a host of features designed for
              the modern farmer.
            </span>
          </div>
          <div className="md:flex hidden items-center gap-[20px]">
            <img className=" cursor-pointer" src={playstore} alt="" />
            <img className=" cursor-pointer" src={appstore} alt="" />
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="col-span-5  py-[60px]  items-center justify-center relative h-full md:flex hidden px-[16px]"
      >
        <div className="flex flex-col items-start  justify-center w-full  ">
          <img className=" max-h-[700px]  h-full w-fit " src={device} alt="" />
          <img src={shadow} className="h-fit absolute bottom-0" alt="" />
        </div>
      </div>
      <div className="md:col-span-5 col-span-11 sm:min-h-[1124px] h-fit pb-[120px]  items-center px-[16px] justify-center relative md:h-full md:hidden flex">
        <div className="flex flex-col items-center md:absolute  static h-[756px] md:left-[-120px] md:top-[260px]">
          <img className=" h-[661px] w-fit " src={device} alt="" />
          <img src={shadow} className="h-fit" alt="" />
          <div className="md:hidden flex justify-between w-full items-center gap-[20px]">
            <img className=" cursor-pointer" src={playstore} alt="" />
            <img className=" cursor-pointer" src={appstore} alt="" />
          </div>
        </div>
      </div>
      <div className="md:hidden block w-full col-span-11">
        <Features />
      </div>
    </div>
  );
};

export default Home;
