"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

function MarqueeUI() {
  const API_URL =
    "https://api-mintgenie.livemint.com/api-gateway/fundamental/api/v2/indices/home/getHomeIndices?forMarkets=false";
  const [marqueeIndex, setMarqueeIndex] = useState([]);

  const getHomeIndices = async () => {
    try {
      const { data } = await axios.get(API_URL);
      if (data) {
        const formattedIndices = data.map((index: any) => {
          const arrowIcon =
            index.netChange < 0 ? (
              <FaArrowDownLong color="red" />
            ) : (
              <FaArrowUpLong className="text-green-600" />
            );
          return (
            <p
              key={index.name}
              className="flex justify-center items-center text-sm text-white"
            >
              {index.name} {index.livePrice}
              <span
                className={`${index.netChange > 0 && "text-green-500"} ml-1`}
              >
                {index.netChange} ({index.percentChange}%)
              </span>
              <span className="ml-1">{arrowIcon}</span>
              <span className="mx-3">{" | "}</span>
            </p>
          );
        });
        setMarqueeIndex(formattedIndices || []);
      }
    } catch (error) {
      console.error("Error fetching home indices:", error);
    }
  };

  useEffect(() => {
    getHomeIndices();
  }, []);
  return (
    <div className="px-2 rounded-lg w-full h-10 overflow-hidden bg-black flex justify-center items-center cursor-default">
      <Marquee speed={100}>{marqueeIndex}</Marquee>
    </div>
  );
}

export default MarqueeUI;
