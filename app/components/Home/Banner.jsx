import React from 'react'

const Banner = () => {
  return (
    <>

    <section  className='mt-[41px]'>
      <div className="container">
        <div id='banner' className=' rounded-[12px] pt-[134px] pl-[57px] pb-[162px] border border-[#0000001c]' >


          <h4 className='text-[16px] font-normal font-main text-[#03081F] '>Order Restaurant food, takeaway and groceries.</h4>
          <h1 className='text-[54px] font-bold font-main text-[#03081F] mb-[12px]'>Feast Your Senses,<br /><span className='text-[#FC8A06]'>Fast and Fresh</span></h1>


          <div className=''>
            <h5 className='text-[13px] mt-[12px] font-normal font-main text-[#03081F]'>Enter a postcode to see what we deliver</h5>
            <div className='w-[397px] h-[57px] mt-[12px] flex rounded-full border border-[#00000038]'><input className='text-[15px] outline-none font-normal font-main text-[#000000a9] pr-[5px] pl-[28px]' type="text" placeholder='e.g. EC4R 3TE' /><button className='text-[16px] font-bold px-[66px] py-[5px] bg-[#FC8A06] rounded-full font-main text-[#fff]'>Search</button></div>
          </div>

      
 
         
         
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Banner
