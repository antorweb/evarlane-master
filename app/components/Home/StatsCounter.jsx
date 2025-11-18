"use client";



import React, { useEffect, useState } from 'react'

const StatsCounter = () => {

      const stats = [
    { number: 546, label: "Registered Riders" },
    { number: 789900, label: "Orders Delivered" },
    { number: 690, label: "Restaurants Partnered" },
    { number: 17457, label: "Food items" },
  ];

 const [counts, setCounts] = useState(stats.map(() => 0));


  useEffect(() => {
    const duration = 1500; // 1.5 sec animation
    const steps = 60;       // smooth effect
    const interval = duration / steps;

    let current = stats.map(() => 0);

    const timer = setInterval(() => {
      let completed = true;

      const updated = current.map((value, i) => {
        const increment = stats[i].number / steps;
        const next = value + increment;

        if (next < stats[i].number) {
          completed = false;
        }
        return next < stats[i].number ? next : stats[i].number;
      });

      current = updated;
      setCounts(updated.map((v) => Math.floor(v)));

      if (completed) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    
     <section className="pb-[45px]">

        <div className="container">


      <div className=" bg-[#FC8A06] flex items-center justify-between rounded-[12px] px-[77px]">

        {stats.map((item, index) => (
          <div key={index} className="flex items-center gap-6 py-[18px]">
            
            {/* Counter Block */}
            <div className="text-center">
              <h2 className=" text-[64px] font-light font-main text-white">
                {counts[index].toLocaleString()}+
              </h2>
              <p className="text-[24px] font-bold font-main text-white">{item.label}</p>
            </div>

            {/* Divider (except last item) */}
            {index !== stats.length - 1 && (
              <div className="hidden md:block w-[1px] h-[100px] bg-[#D9D9D9]"></div>
            )}
          </div>
        ))}

      </div>

        </div>

    </section>
    
    
    
    
    
    
    </>
  )
}

export default StatsCounter