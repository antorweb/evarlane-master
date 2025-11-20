import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

export default function Basket() {
  return (
    <div className="w-[367px] mx-auto bg-white shadow-xl rounded-xl overflow-hidden border">
      {/* Header */}
      <div className="text-[32px] font-semibold font-main text-[#fff] bg-[#028643] pt-[40px] pb-[29px] flex justify-center gap-[30px]">
        <span>🧺</span> My Basket
      </div>

      {/* Items */}
      <div className="divide-y">
        {/* Item 1 */}
        <div className="flex items-start p-4 gap-3">
          <div className="text-[24px] font-bold font-main text-[#fff] bg-[#FC8A06] p-[10px] rounded-full">1x</div>
          <div className="flex-1 text-sm">
            <p className="text-[20px] font-semibold font-main text-[#028643]">£27.90</p>
            <p className="text-[16px] font-semibold font-main my-[6px] text-[#03081F]">12" Vegetarian Pizza</p>
            <p className=" w-[175px] text-[15px] font-normal font-main text-[#03081F]">No Mushrooms + green peppers</p>
          </div>
          <FiTrash2 className="text-gray-500 cursor-pointer" />
        </div>

        {/* Item 2 */}
         <div className="flex items-start p-4 gap-3">
          <div className="text-[24px] font-bold font-main text-[#fff] bg-[#FC8A06] p-[10px] rounded-full">1x</div>
          <div className="flex-1 text-sm">
            <p className="text-[20px] font-semibold font-main text-[#028643]">£27.90</p>
            <p className="text-[16px] font-semibold font-main my-[6px] text-[#03081F]">12" Vegetarian Pizza</p>
            <p className=" w-[175px] text-[15px] font-normal font-main text-[#03081F]">No Mushrooms + green peppers</p>
          </div>
          <FiTrash2 className=" text-[35px] cursor-pointer" />
        </div>

        {/* Item 3 */}
            <div className="flex items-start p-4 gap-3">
          <div className="text-[24px] font-bold font-main text-[#fff] bg-[#FC8A06] p-[10px] rounded-full">1x</div>
          <div className="flex-1 text-sm">
            <p className="text-[20px] font-semibold font-main text-[#028643]">£27.90</p>
            <p className="text-[16px] font-semibold font-main my-[6px] text-[#03081F]">12" Vegetarian Pizza</p>
            <p className=" w-[175px] text-[15px] font-normal font-main text-[#03081F]">No Mushrooms + green peppers</p>
          </div>
          <FiTrash2 className=" text-[35px] cursor-pointer" />
        </div>

        {/* Item 4 */}
            <div className="flex items-start p-4 gap-3">
          <div className="text-[24px] font-bold font-main text-[#fff] bg-[#FC8A06] p-[10px] rounded-full">1x</div>
          <div className="flex-1 text-sm">
            <p className="text-[20px] font-semibold font-main text-[#028643]">£27.90</p>
            <p className="text-[16px] font-semibold font-main my-[6px] text-[#03081F]">12" Vegetarian Pizza</p>
            <p className=" w-[175px] text-[15px] font-normal font-main text-[#03081F]">No Mushrooms + green peppers</p>
          </div>
          <FiTrash2 className=" text-[35px] cursor-pointer" />
        </div>
      </div>

      {/* Pricing */}
      <div className="p-4 text-sm space-y-1">
        <div className="flex justify-between"><span className="text-[20px] font-semibold font-main text-[#03081F]">Sub Total:</span><span className="text-[24px] font-normal font-main text-[#212121]">£127.90</span></div>
        <div className="flex justify-between"><span className="text-[20px] font-semibold font-main text-[#03081F]">Discounts:</span><span className="text-[24px] font-normal font-main text-[#212121]">-3.00</span></div>
        <div className="flex justify-between"><span className="text-[20px] font-semibold font-main text-[#03081F]">Delivery Fee:</span><span className="text-[24px] font-normal font-main text-[#212121]">2.50</span></div>
      </div>

      {/* Total to pay */}
      <div className="bg-[#FC8A06] text-white font-semibold text-lg p-4 flex justify-between items-center rounded-md mx-4 mb-4">
        <span>Total to pay</span>
        <span>£127.90</span>
      </div>

      {/* Free item selector */}
      <div className="mx-4 mb-3">
        <button className="w-full border rounded-lg p-3 text-sm flex justify-between items-center bg-gray-50">
          Choose your free item
          <IoIosArrowForward />
        </button>
      </div>

      {/* Coupon */}
      <div className="mx-4 mb-4">
        <input 
          type="text" 
          placeholder="Apply Coupon Code here" 
          className="w-full border rounded-lg p-3 text-sm"
        />
      </div>

      {/* Delivery / Collection */}
      <div className="flex justify-between mx-4 mb-4 text-sm">
        <div className="w-1/2 border text-center p-3 rounded-lg mr-2">
          <p className="font-semibold">Delivery</p>
          <p className="text-xs text-gray-500">Starts at 17:50</p>
        </div>
        <div className="w-1/2 border text-center p-3 rounded-lg ml-2">
          <p className="font-semibold">Collection</p>
          <p className="text-xs text-gray-500">Starts at 16:50</p>
        </div>
      </div>

      {/* Checkout */}
      <div className="mx-4 mb-6">
        <button className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold">
          Checkout!
        </button>
      </div>
    </div>
  );
}