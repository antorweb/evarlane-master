import React from "react";
import footerLogo from "../../public/footer-logo.png";
import app from "../../public/app.png";
import google from "../../public/google.png";
import Link from "next/link";
import Image from "next/image";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaSnapchat } from "react-icons/fa6";






const Footer = () => {
  return (
    <>
      <footer className="bg-[#d9d9d9b9] pt-[93px] pb-[53px]">
        <div className="container">


<div className="flex justify-between gap-[40px]">


          <div id="footer-section-1">
            <Link href={"/"}>
              <Image src={footerLogo} alt="footer-logo" width={268} />
            </Link>

            <div className="flex items-center gap-2 mt-[33px] mb-[22px] ">
              <Link href={"/"}>
                <Image src={app} alt="logo" width={180} />
              </Link>
              <Link href={"/"}>
                <Image src={google} alt="logo" width={180} />
              </Link>
            </div>

            <h3 className="text-[15px] font-normal font-main text-[#000]">
              Company # 490039-445, Registered with <br /> House of companies.
            </h3>
          </div>

               <div id="footer-section-2">
       <label className="text-[18px] font-bold font-main text-[#03081F]">Get Exclusive Deals in your Inbox</label>

            <div className='w-[397px] h-[57px] mt-[12px] bg-[#D9D9D9] flex rounded-full border border-[#00000038]'><input className='text-[15px] pr-[100px]  outline-none font-normal font-main text-[#000000a9] pr-[5px] pl-[28px]' type="email" placeholder='youremail@gmail.com' /><button className=' py-[18px] px-[30px] text-[16px] font-bold  bg-[#FC8A06] rounded-full font-main text-[#fff]'>Subscribe</button></div>

            <h4 className="text-[13px] font-normal font-main mt-[15px] mb-[30px] pl-[35px] text-[#03081F]">we wont spam, read our <a href="/" className=" underline">email policy</a></h4>
      <div className=" flex items-center gap-[14px] pl-[35px]">
                    <Link href={'/'} ><FaFacebook className="text-[45px]" /></Link>
                    <Link href={'/'} ><AiFillInstagram className="text-[45px]" /></Link>
                    <Link href={'/'} ><AiFillTikTok className="text-[45px]" /></Link>
                    <Link href={'/'} ><FaSnapchat className="text-[45px]" /></Link>
                </div>
          </div>


               <div id="footer-section-3">

                <label htmlFor="" className="text-[18px] font-bold font-main text-[#03081F]">Legal Pages</label>

                <div>
                    <ul className="flex flex-col gap-[20px]">
                        <li><Link href={'/'} className="text-[15px] font-normal font-main text-[#000] underline" >Terms and conditions</Link></li>
                        <li><Link href={'/'}  className="text-[15px] font-normal font-main text-[#000] underline">Privacy</Link></li>
                        <li><Link href={'/'}  className="text-[15px] font-normal font-main text-[#000] underline">Cookies</Link></li>
                        <li><Link href={'/'} className="text-[15px] font-normal font-main text-[#000] underline" >Modern Slavery Statement</Link></li>
                      
                    </ul>
                </div>


          
   
          </div>
          

             <div id="footer-section-4">

                <label htmlFor=""  className="text-[18px] font-bold font-main text-[#03081F]" >Important Links</label>

                <div>
                    <ul className="flex flex-col gap-[20px]"> 
                        <li><Link href={'/'}  className="text-[15px] font-normal font-main text-[#000] underline">Get help</Link></li>
                        <li><Link href={'/'} className="text-[15px] font-normal font-main text-[#000] underline" >Add your restaurant</Link></li>
                        <li><Link href={'/'} className="text-[15px] font-normal font-main text-[#000] underline" >Sign up to deliver</Link></li>
                        <li><Link href={'/'} className="text-[15px] font-normal font-main text-[#000] underline" >Create a business account</Link></li>
                      
                    </ul>
                </div>
   
          </div>
          
</div>



        </div>
      </footer>
    </>
  );
};

export default Footer;
