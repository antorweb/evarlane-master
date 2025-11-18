"use client";
import React, { useState } from "react";
import Breadcrumb from "@/app/components/common/Breadcrumb";
import Image from "next/image";

import menuImg from '../../../public/menuImg.png'


const LeftSidebar = () => {

  const menuItems = [
    "Pizzas",
    "Garlic Bread",
    "Calzone",
    "Kebabas",
    "Salads",
    "Cold drinks",
    "Happy Meal®",
    "Desserts",
    "Hot drinks",
    "Sauces",
    "Orbit®",
  ];

  const [active, setActive] = useState("Pizzas");

  return (
    <>
      <section>
        <div className="container">
          <Breadcrumb />

          <div id="res-sec-1">
            <h2 className="text-[32px] font-semibold font-main mb-[41px] text-[#000]">
              Order from Tandoori Pizza London
            </h2>

            <div className="w-[367px] mb-[33px] h-[800px] bg-[#FBFBFB] border border-[#BCBCBC] shadow rounded-[12px]">
              {/* Header */}
              <div className="flex items-center gap-2 px-4 mt-[50px] pb-[48px] border-b">
                <h2 className="text-[32px] font-semibold font-main text-[#000]">
                  Menu
                </h2>
              </div>

              {/* Menu List */}
              <ul className="flex flex-col">
                {menuItems.map((item) => (
                  <li
                    key={item}
                    onClick={() => setActive(item)}
                    className={`px-5 py-3 cursor-pointer transition-all text-[22px] font-bold font-main
              ${
                active === item
                  ? "bg-[#03081F] text-white" // Active state
                  : "text-[#282828] hover:bg-gray-100"
              }
            `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

<Image src={menuImg} width={367} alt="Menu Image" className="" />

 
          </div>
        </div>
      </section>
    </>
  );
};

export default LeftSidebar;
