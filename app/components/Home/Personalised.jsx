import Image from "next/image";
import React from "react";
import images from "../../../public/main-logo.png";
import app from "../../../public/app.png";
import google from "../../../public/google.png";
import PersonalisedImg from "../../../public/PersonalisedImg.png";

import Link from "next/link";



const Personalised = () => {
  return (
    <>
      <section id="Personalised" className="pt-[94px] pb-[53px]">
        <div className="container antor-con relative ">
          <div className=" pt-[131px] pb-[150px]">

            {/* ---------------- left-side imges */}

            <Image className=" absolute top-[-25px] left-0" src={PersonalisedImg} width={852}  alt="PersonalisedImg" />


            {/* ---------------- right-side content here */}
            <div className="pr-[85px]">
              <p className="text-[68px]   flex justify-end items-center font-bold font-main text-[#03081F]">
                <Image src={images} width={268} alt="img" />
                ingis more
              </p>

              <div className="text-end flex justify-end">
                <div className="w-[878px] mt-[30px]  mb-[24px] flex justify-end pr-[60px] bg-[#03081F] rounded-full">
                  <h2 className="text-[47px] font-bold font-main text-white">
                    {" "}
                    <span className="text-[#FC8A06] underline">
                      Personalised
                    </span>{" "}
                    & Instant
                  </h2>
                </div>
              </div>
              <h3 className=" text-end text-[24px] font-normal font-main text-[#000]">
                Download the Order.uk app for faster ordering
              </h3>
              <div className="flex items-center justify-end mt-[23px] gap-[10px]">
                <Link href={"/"}>
                  <Image src={app} width={203} alt="app" />
                </Link>
                <Link href={"/"}>
                  <Image src={google} width={203} alt="app" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Personalised;
