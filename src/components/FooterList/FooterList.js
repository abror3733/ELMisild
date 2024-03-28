import React from 'react'

function FooterList({title,link1,link2,link3,link4,link5}) {
  return (
    <div>
      <strong className='text-[#333333] block mb-[33px]'>{title}</strong>
      <a className='text-[#757575] text-[14px] block mb-[19px] hover:text-[#8BAC3E] transition ease-out' href="#">{link1}</a>
      <a className='text-[#757575] text-[14px] block mb-[19px] hover:text-[#8BAC3E] transition ease-out' href="#">{link2}</a>
      <a className='text-[#757575] text-[14px] block mb-[19px] hover:text-[#8BAC3E] transition ease-out' href="#">{link3}</a>
      <a className='text-[#757575] text-[14px] block mb-[19px] hover:text-[#8BAC3E] transition ease-out' href="#">{link4}</a>
      <a className='text-[#757575] text-[14px] block  hover:text-[#8BAC3E] transition ease-out' href="#">{link5}</a>
    </div>
  )
}

export default FooterList