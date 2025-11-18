import React from 'react'

import breadImg from '../../../public/breadImg.png'
import breadRate from '../../../public/breadRete.png'
import Image from 'next/image'

const Breadcrumb = () => {
  return (
    <>


    <div className='bg-[#e2e2e2c9] rounded-[12px] flex items-center gap-[137px] mt-[41px] mb-[69px] relative justify-evenly'>



<div>



        <h4 className='text-[20px] font-normal font-main text-[#03081F] '>Desi Flavours with a blend of Italian aesthetics!</h4>
        <h2 className='text-[54px] font-bold font-main text-[#03081F] pb-[30px] pt-[8px]'>Tandoori Pizza London</h2>
        <div className='flex gap-[17px]'>
            <div className='w-[330px] h-[66px] flex justify-center items-center rounded-full bg-[#03081F]'><p className='text-[18px] font-semibold font-main text-white'>Minimum Order: 12 GBP</p></div>
            <div className='w-[330px] h-[66px] flex justify-center items-center rounded-full bg-[#03081F]'><p className='text-[18px] font-semibold font-main text-white'>Delivery in 20-25 Minutes</p></div>
        </div>

</div>


        {/* ------------------ rightImg */}

        <div className='pt-[59px] pb-[57px] relative'>
            <Image src={breadImg} width={581} alt='breadImg' />

            <div className=' absolute top-[272px] left-[-70]'><Image src={breadRate} width={136} alt='Img-rate' /></div>
            
            
        
        
        </div>





        <div className='w-[335px] absolute top-[445px] left-0 h-[61px] bg-[#FC8A06] rounded-r-[12px]  flex justify-center items-center'><p className='text-[18px] font-semibold font-main text-white'>Open until 3:00 AM</p></div>
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Breadcrumb