import Image from 'next/image';
import React from 'react'

const RestaurantsSection = () => {



  const Restorent = [
    {
      title: "McDonald’s London ",
      restaurants: 21,
      image: "/images/food.png",
    },
    {
      title: "Papa Johns",
      restaurants: 32,
      image: "/images/salads.jpg",
    },
    {
      title: "KFC West London",
      restaurants: 4,
      image: "/images/pasta.jpg",
    },
    {
      title: "Texas Chicken",
      restaurants: 32,
      image: "/images/pizza.jpg",
    },
    {
      title: "Burger King",
      restaurants: 4,
      image: "/images/breakfast.jpg",
    },
    {
      title: "Shaurma 1",
      restaurants: 32,
      image: "/images/soups.jpg",
    },
  ];

  


  return (
    <>
    

    <section className='pb-[44px]'>
        <div className="container">

            <div className='mb-[51px]'><h2 className='text-[32px] font-bold font-main text-[#000]'>Popular Restaurants</h2></div>

            <div className="  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
                        {Restorent.map((cat, index) => (
                          <div  key={index}  className="w-[238px] h-[266px] bg-[#FC8A06] relative rounded-lg overflow-hidden mb-3" >
                            <div className=" w-[238px] h-[203px]">
                              <Image  src={cat.image}  alt={cat.title} fill className="object-cover" />
                            </div>
                            <h3 className="text-[18px] text-center font-bold font-main text-white">{cat.title}</h3>
                        
                          </div>
                        ))}
                      </div>

        </div>
    </section>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default RestaurantsSection