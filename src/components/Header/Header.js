import React from 'react'

import NavbarItemLink from '../NavbarItemLink/NavbarItemLink'

import elLogoSiteImg from "../../assets/Images/logo.svg"
import Button from '../Button/Button'

function Header() {
  return (
    <header className='pt-[19px] pb-[27px]'>
      <div className="container mx-auto flex justify-between items-center">
        <img src={elLogoSiteImg} alt="Site logo img"  width={207} height={50}/>
        <nav className='flex space-x-[170px] items-center '>
          <ul className='space-x-[40px] flex items-center'>
            <NavbarItemLink title={"Home"}/>
            <NavbarItemLink title={"About"}/>
            <NavbarItemLink title={"Promotions "}/>
            <NavbarItemLink title={"Blogs"}/>
            <NavbarItemLink title={"Contact Us"}/>
          </ul>
          <div className='flex items-center space-x-[25px]'>
            <strong>Masuk</strong>
            <Button extraStyle={"w-[167px] py-[14px] bg-[#8BAC3E] text-[14px] text-white font-semibold rounded-[30px]"} title={"Daftar Sekaring"}/>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header