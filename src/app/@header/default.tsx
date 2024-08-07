import Weather from "@/component/UI/Weather";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import axios from "axios";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import MarqueeUI from "@/component/UI/Marquee";

const Default = () => {
  return (
    <header className="h-20 flex items-center px-3 justify-between">
      <h1 className="text-4xl text-red-600 font-extrabold tracking-wide uppercase">
        InfinityNews
      </h1>
      {/* <MarqueeUI /> */}
      {/* <div>
        <Weather />
      </div> */}
    </header>
  );
};

export default Default;
