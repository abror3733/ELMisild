import React from 'react'

import elStarImg from "../../assets/Images/star.svg"

function TrendingItem({imgURL,title,titlesmaal,bgCards}) {
  return (
    <li className={`w-[267px] hover:scale-105 transition-all ease-out cursor-pointer h-[306px] pt-[26px] pb-[33px] pl-[25px] ${bgCards} rounded-md shadow-lg`}>
      <img src={imgURL} alt="img" width={118} height={120} />
      <h3 className='text-[26px] font-semibold mt-[30px]'>{title}</h3>
      <span className='text-[18px] text-[#8BAC3E] mt-[7px] mb-[20px] block font-semibold'>{titlesmaal}</span>
      <img src={elStarImg} alt="star" width={68} height={10} />
    </li>
  )
}

export default TrendingItem