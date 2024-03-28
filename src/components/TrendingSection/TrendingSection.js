import React from 'react'
import TrendingItem from '../TrendingItem/TrendingItem'

import elImg1 from "../../assets/Images/trending1.png"
import elImg2 from "../../assets/Images/trending2.png"
import elImg3 from "../../assets/Images/trending3.png"
import elImg4 from "../../assets/Images/trending4.png"
import elImg5 from "../../assets/Images/trending5.png"
import Button from '../Button/Button'

function TrendingSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <h2 className='text-[#333333
           #8BAC3E] text-[36px] font-semibold mb-[50px]'>
          Browser Our Trending <br /> <span className='text-[#8BAC3E]'>Receipt</span>
          </h2>
          <ul className='flex flex-wrap items-center gap-[30px] justify-between mb-[68px]'>
            <TrendingItem imgURL={elImg1} title={"Pizza Paperoni"} titlesmaal={"Pizza"} bgCards={"bg-[#F3F7D9]"}/>
            <TrendingItem imgURL={elImg2} title={"Pizza Meat"} titlesmaal={"Meat"} bgCards={"bg-[#F9EEF3]"}/>
            <TrendingItem imgURL={elImg3} title={"Doner Kebab"} titlesmaal={"Kebab"} bgCards={"bg-[#E6F3F5]"}/>
            <TrendingItem imgURL={elImg1} title={"Salmon Roll"} titlesmaal={"Roll"} bgCards={"bg-[#F9EEF3]"}/>
            <TrendingItem imgURL={elImg1} title={"Cupcake Choco"} titlesmaal={"Cupcake"} bgCards={"bg-[#E6F3F5]"}/>
            <TrendingItem imgURL={elImg4} title={"Doughnut Milk"} titlesmaal={"Doughnut"} bgCards={"bg-[#F3F7D9]"}/>
            <TrendingItem imgURL={elImg5} title={"Doughnut Unicorn"} titlesmaal={"Doughnut"} bgCards={"bg-[#E6F3F5]"}/>
            <TrendingItem imgURL={elImg3} title={"Kathi Kebab"} titlesmaal={"Kebab"} bgCards={"bg-[#F9EEF3]"}/>
          </ul>
          <Button extraStyle={"mx-auto flex justify-center"} title={"ALL Receipt"}/>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection