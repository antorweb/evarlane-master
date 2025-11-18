import Image from 'next/image';
import React from 'react'

const PartnerRiderSection = () => {

      const items = [
    {
      label: "Earn more with lower fees",
      signupLabel: "Signup as business",
      title: "Partner with us",
      image: "/patnerImg1.png",
    },
    {
      label: "Avail exclusive perks",
      signupLabel: "Signup as a rider",
      title: "Ride with us",
      image: "/patnerImg2.png",
    },
  ];


  return (
    <>
     <section id='patnerRider' className=" pb-[53px]">
        <div className="container">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Label Tag */}
            <div className="absolute top-0 left-[47px]  bg-red-500 py-[20px] px-[13px] rounded-b-[12px] text-[18px] font-bold font-main text-[#03081F]">   {item.label} </div>

            {/* Background Image */}
            <div className="relative w-[754px] h-[425px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-300"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 p-6 flex flex-col justify-end text-white z-10">
              <p className="text-[18px] font-medium font-main text-[#FC8A06]">{item.signupLabel}</p>
              <h2 className="text-[44px] font-bold font-main text-white">{item.title}</h2>

              <button className="w-[205px] bg-[#FC8A06] rounded-full text-[18px] font-medium font-main text-white py-[15px] mt-[36px]">
                Get Started 
              </button>
            </div>
          </div>
        ))}
      </div>
        </div>

    </section>
    
    
    
    
    
    </>
  )
}

export default PartnerRiderSection