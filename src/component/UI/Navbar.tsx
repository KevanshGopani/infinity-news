"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState("Home");

  const tabs = [
    "Home",
    "Markets",
    "Latest News",
    "Money",
    "Industry",
    "Technology",
    "Companies",
    "News",
    "Politics",
    "Bollywood",
    "Hollywood",
    // "More",
  ];

  return (
    <nav className="p-4">
      <div className="flex flex-wrap gap-2 w-full items-center md:justify-around justify-around">
        {tabs.map((tab) => (
          <div key={tab}>
            <p
              onClick={() => setSelectedTab(tab)}
              style={{
                margin: "12px 0px",
                fontSize: "18px",
                fontWeight: selectedTab === tab ? 700 : 500,
                cursor: "pointer",
                position: "relative",
                color: selectedTab === tab ? "#ff0000" : "black",
              }}
            >
              {tab}
              {selectedTab === tab && (
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: "-2px",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#ff0000",
                  }}
                />
              )}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
