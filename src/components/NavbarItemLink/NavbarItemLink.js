import React from 'react'

function NavbarItemLink({title}) {
  return (
    <li>
      <a className='font-bold text-[#757575] text-[14px] hover:text-[#8BAC3E] ease-out transition' href="#">{title}</a>
    </li>
  )
}

export default NavbarItemLink