'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiLocation } from "react-icons/ti";
import logo from "../../public/main-logo.png";
import user from "../../public/Male User.png";

const MegaMenu = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div id="mega_menu" className=" flex justify-between items-center mt-[38px] mb-[41px] ">
            <div className="menu-sec-1">
              <h2 className="text-[15px] font-medium font-main text-[#000]">
                {" "}
                Get 5% Off your first order,{" "}
                <a href="" className="text-[#FC8A06] underline font-bold">
                  Promo: ORDER5
                </a>{" "}
              </h2>
            </div>

            <div className="menu-sec-2 flex items-center">
              <TiLocation className="text-[25px]" />
              <h3 className="text-[15px] px-[15px] font-medium font-main text-[#03081F]">
                Regent Street, A4, A4201, London
              </h3>

              <a
                href=""
                className="text-[14px] font-medium font-main text-[#FC8A06] underline"
              >
                Change Location
              </a>
            </div>

            {/* <div id="" className="bg-[#028643]">
              fnhhfn
            </div> */}
          </div>

          <div id="navbar" className="flex items-center justify-between pt-[]">
            {/* Navbar component can be placed here */}

            <Link href={"/"}>
              <Image src={logo} width={215} alt="main-logo" />
            </Link>

            {/* Additional navbar items can be added here */}
            <div>
              <ul className=" flex items-center">
                <li className=" w-[127px] py-[9px] px-[34px] flex justify-center items-center hover:text-white rounded-full hover:bg-amber-500">
                  <Link href={"/"} className="text-[18px] font-medium font-main text-[#000]">Home</Link>
                </li>
                <li className=" w-[200px] py-[9px] px-[34px] flex justify-center items-center hover:text-white rounded-full hover:bg-amber-500">
                  <Link href={"/AllList"} className="text-[18px] font-medium font-main text-[#000]"> Browse Menu </Link>
                </li>
                <li className=" w-[200px] py-[9px] px-[34px] flex justify-center items-center hover:text-white rounded-full hover:bg-amber-500">
                  <Link href={"/"} className="text-[18px] font-medium font-main text-[#000]">Special Offers</Link>
                </li>
                <li className=" w-[200px] py-[9px] px-[34px] flex justify-center items-center hover:text-white rounded-full hover:bg-amber-500">
                  <Link href={"/restorent"} className="text-[18px] font-medium font-main text-[#000]">Restaurants</Link>
                </li>
                <li className="w-[200px] py-[9px] px-[34px] flex justify-center items-center hover:text-white rounded-full hover:bg-amber-500">
                  <Link href={"/"} className="text-[18px] font-medium font-main text-[#000]">Track Order</Link>
                </li>
              </ul>
            </div>
            <div>
              {/*  Login/Registation can be added here */}
              <div className="w-[234px] rounded-full bg-[#03081F]">
                <div className="py-[17px] flex justify-center items-center ">
                  <Image src={user} width={31} alt="user" />
                  <Link href={'/'} className="text-[18px] pl-[11px] font-medium font-main text-white" >Login/</Link>
                <Link href={'/'} className="text-[18px] font-medium font-main text-white" >Signup</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MegaMenu;
