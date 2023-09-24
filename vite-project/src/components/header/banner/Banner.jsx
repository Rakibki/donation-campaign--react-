import React from "react";
import banner from "../../../assets/images/doctors.jpg";

const Banner = () => {
  return (
    <div
      className="h-screen  w-full relative"
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
    >
      <div className="absolute bg-[#fffffff2] w-full h-full">
        <div className="pt-32">
          <h1 className="text-2xl md:text-3xl text-[#0B0B0B] text-center font-semibold">
            I Grow By Helping People In Need
          </h1>
          <div className="flex mt-5 justify-center">
            <input placeholder="Search here...." type="text" className="py-2 bg-white border-2 border-r-0 rounded-l-lg px-4 outline-none" />
            <button className="bg-[#FF444A] rounded-r-lg text-white font-semibold py-2 px-4">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
