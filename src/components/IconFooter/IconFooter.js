import React from 'react'

function IconFooter({title}) {
  return (
    <button className='flex items-center justify-center ease-out transition w-[40px] h-[40px] rounded-[24px] bg-white hover:text-white hover:bg-[#8BAC3E]'>
       {title}
    </button>
  )
}

export default IconFooter