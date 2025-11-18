'use client'


import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const OffersSection = () => {
  const [activeTab, setActiveTab] = useState(3);
  return (
    <>
      <section className="pt-[54px]">
        <div className="container">
          <div className="flex items-center  justify-between ">
            <h2 className="text-[32px] font-bold font-main text-[#000]">
              Up to -40% 🎊 Order.uk exclusive deals
            </h2>

            <div>
              <ul
                className=" flex items-center "
                role="tablist"
              >
                <li
                  role="presentation"
                  className={` cursor-pointer ${
                    activeTab === 3 ? "" : ""
                  }`}
                  onClick={() => setActiveTab(3)}
                >
                  <a href="#messages" className=" duration-300 py-[19px] px-[70px] text-[16px] font-normal font-main hover:text-[#FC8A06] hover:border rounded-full  hover:border-[#FC8A06] text-black">
                  Vegan
                  </a>
                </li>
                <li
                  role="presentation"
                  className={` cursor-pointer ${
                    activeTab === 1 ? "" : ""
                  }`}
                  onClick={() => setActiveTab(1)}
                >
                  <a href="#home" className=" duration-300 py-[19px] px-[70px] text-[16px] font-normal font-main hover:text-[#FC8A06] hover:border rounded-full  hover:border-[#FC8A06] text-black">
                    {" "}
                   Sushi
                  </a>
                </li>
                <li
                  role="presentation"
                  className={` cursor-pointer ${
                    activeTab === 2 ? "" : ""
                  }`}
                  onClick={() => setActiveTab(2)}
                >
                  <a href="#profile" className=" duration-300 py-[19px] px-[70px] text-[16px] font-normal font-main hover:text-[#FC8A06] hover:border rounded-full  hover:border-[#FC8A06] text-black">
               Pizza & Fast food 
                  </a>
                </li>
                <li
                  role="presentation"
                  className={` cursor-pointer ${
                    activeTab === 4 ? "" : ""
                  }`}
                  onClick={() => setActiveTab(4)}
                >
                  <a href="#settings" className=" duration-300 py-[19px] px-[70px] text-[16px] font-normal font-main hover:text-[#FC8A06] hover:border rounded-full  hover:border-[#FC8A06] text-black">
               others
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                {activeTab === 1 && <h2>hello</h2> }
                {activeTab === 2 && <h2>hello2</h2>}
                {activeTab === 3 && <h2>hello3</h2>}

                {activeTab === 4 && <h2>hello4</h2>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffersSection;
