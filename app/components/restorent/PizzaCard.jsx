"use client";

import Image from "next/image";
import pizzaImg from "../../../public/pizzaImg.png";

export default function PizzaCard() {
  return (
    <div className="w-[754px] h-[403px] shadow   bg-white rounded-[8px]">
      {/* LEFT SIDE: TEXT */}
      <div className="flex-1 pl-[27px] pr-[32px] pt-[28px] pb-[18px]">
        <div className="flex justify-between items-center ">
          <div>
            <h2 className="text-[24px] font-semibold font-main text-black">
              Farm House Xtreme Pizza
            </h2>

            <div className="flex items-center gap-1 mt-2">
              <span>🌶️</span>
              <span>🌶️</span>
              <span>🌶️</span>
              <span className="opacity-40">🌶️</span>
              <span className="opacity-40">🌶️</span>
            </div>

            <div className="w-[290px] mt-[28px]">
              <p className="text-[14px] font-normal font-main text-black leading-relaxed">
                1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
                French Fries, 3 cold drinks
              </p>
            </div>
          </div>

          {/* // right-side: IMAGE */}

          <Image
            className=" rounded-full"
            src={pizzaImg}
            alt="main-logo"
            width={191}
            height={191}
          />
        </div>

        {/* Size Buttons */}
        <div className="mt-[36px]">
          <button className="px-[15px] hover:bg-[#03081F] border border-[#03081f27] text-black text-[14px] font-bold font-main rounded-[4px] hover:text-[#fff]"> 
            Small <button className="w-[90px] text-[14px] font-bold font-main my-[10px] ml-[21px] rounded-[4px] bg-[#028643] py-[8px] text-[#fff]">£21.90</button>
          </button>
          

           <button className="px-[15px] hover:bg-[#03081F] border border-[#03081f27] text-black text-[14px] font-bold font-main rounded-[4px] hover:text-[#fff]"> 
            Medium <button className="w-[90px] text-[14px] font-bold font-main my-[10px] ml-[21px] rounded-[4px] bg-[#028643] py-[8px] text-[#fff]">£25.90</button>
          </button>

           <button className="px-[15px] hover:bg-[#03081F] border border-[#03081f27] text-black text-[14px] font-bold font-main rounded-[4px] hover:text-[#fff]"> 
            Large <button className="w-[90px] text-[14px] font-bold font-main my-[10px] ml-[21px] rounded-[4px] bg-[#028643] py-[8px] text-[#fff]">£27.90</button>
          </button>
          
           <button className="px-[15px] hover:bg-[#03081F] border border-[#03081f27] text-black text-[14px] font-bold font-main rounded-[4px] hover:text-[#fff]"> 
            XL Large with Sauces <button className="w-[90px] text-[14px] font-bold font-main my-[10px] ml-[21px] rounded-[4px] bg-[#028643] py-[8px] text-[#fff]">£32.90</button>
          </button>

        </div>
      </div>
    </div>
  );
}
