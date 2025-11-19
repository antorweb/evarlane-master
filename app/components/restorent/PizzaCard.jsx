"use client";

import Image from "next/image";
import pizzaImg from '../../../public/pizzaImg.png'

export default function PizzaCard() {
  return (
    <div className="w-[754px] h-[403px] shadow  bg-white rounded-[8px]">
      
      {/* LEFT SIDE: TEXT */}
      <div className="flex-1 pl-[27px] pr-[32px] pt-[28px] pb-[18px]">

        <div className="flex justify-between items-center ">

            <div>


        <h2 className="text-[24px] font-semibold font-main text-black">Farm House Xtreme Pizza</h2>

        
        <div className="flex items-center gap-1 mt-2">
          <span>🌶️</span>
          <span>🌶️</span>
          <span>🌶️</span>
          <span className="opacity-40">🌶️</span>
          <span className="opacity-40">🌶️</span>
        </div>

        <div className="w-[290px] mt-[28px]">

        <p className="text-[14px] font-normal font-main text-black leading-relaxed">
          1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 
          3 cold drinks
        </p>
        </div>
            </div>

        {/* // right-side: IMAGE */}
     
        <Image className=" rounded-full" src={pizzaImg} alt="main-logo" width={191} height={191}  />
  
    
        
        </div>

        {/* Size Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-md bg-black text-white border border-black">
            Small <span className="ml-2">£21.90</span>
          </button>

          <button className="px-4 py-2 rounded-md bg-green-600 text-white">
            Medium <span className="ml-2">£25.90</span>
          </button>

          <button className="px-4 py-2 rounded-md bg-green-600 text-white">
            Large <span className="ml-2">£27.90</span>
          </button>

          <button className="mt-2 px-4 py-2 rounded-md bg-green-600 text-white w-full sm:w-auto">
            XL Large with Sauces <span className="ml-2">£32.90</span>
          </button>
        </div>
      </div>

    


    </div>
  );
}
