import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "Burgers & Fast food",
      restaurants: 21,
      image: "/images/food.png",
    },
    {
      title: "Salads",
      restaurants: 32,
      image: "/images/salads.jpg",
    },
    {
      title: "Pasta & Casuals",
      restaurants: 4,
      image: "/images/pasta.jpg",
    },
    {
      title: "Pizza",
      restaurants: 32,
      image: "/images/pizza.jpg",
    },
    {
      title: "Breakfast",
      restaurants: 4,
      image: "/images/breakfast.jpg",
    },
    {
      title: "Soups",
      restaurants: 32,
      image: "/images/soups.jpg",
    },
  ];

  return (
    <>
      <section className="pt-[63px] pb-[56px]">
        <div className="container">
          {/* <div className='w-[238px] h-[266px] text-center shadow rounded-[12px] bg-[#F5F5F5] border border-[#00000015]' >

                <Link href={'/'}  >
                <Image src={''} width={238} height={203} alt='imges'  />

                <h2 className='text-[18px] font-bold font-main text-[#03081F] mt-[9px]'>Burgers & Fast food</h2>
                <h5 className='text-[13px] font-normal font-main text-[#FC8A06]'>21 Restaurants</h5>
                </Link>

            </div> */}

          <div className="mb-[51px]">
            <h2 className="text-[32px] font-bold font-main text-black">
              Order.uk Popular Categories 🤩
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-md transition p-3 cursor-pointer"
              >
                <div className="w-full h-32 relative rounded-lg overflow-hidden mb-3">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-medium">{cat.title}</h3>
                <p className="text-sm text-orange-500">
                  {cat.restaurants} Restaurants
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
