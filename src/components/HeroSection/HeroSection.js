import React from 'react'
import Button from '../Button/Button'

import elHeroImg from "../../assets/Images/hero-img.png"
import elHeroCard from "../../assets/Images/her-card.png"


function HeroSection() {
  return (
    <section className='pt-[16px]'>
      <div className="container mx-auto flex items-center justify-between">
        <div className='w-[482px]'>
          <h1 className='text-[64px] font-semibold text-[#8BAC3E] leading-[65px]	 mb-[32px]'>Good Food Us <br /> Good Mood</h1>
          <p className='text-[#757575] text-[16px] mb-[32px]'>
          I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
          </p>
          <div className='flex items-center gap-[16px]'>
          <Button extraStyle={"w-[167px] py-[14px] bg-[#8BAC3E] text-[14px] text-white font-semibold rounded-[30px]"} title={"Daftar Sekaring"}/>
          <button className=' w-[118px] py-[14px] hover:opacity-60 ease-out transition-all bg-[#F2F2F2] text-[14px] text-[black] font-semibold rounded-[30px]'>About Us</button>
          </div>
        </div>
        <div className='relative'>
          <img src={elHeroImg} alt="food img" width={442} height={444} />
          <img className='absolute top-[345px] left-[-110px]' src={elHeroCard} alt="img" width={292} height={93}/>
        </div>
      </div>
    </section>
  )
}

export default HeroSection