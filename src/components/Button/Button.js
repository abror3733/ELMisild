import React from 'react'

function Button({title,extraStyle}) {
  return (
    <button className={`${extraStyle} w-[167px] py-[14px] bg-[#8BAC3E] text-[14px] text-white font-semibold rounded-[30px] hover:opacity-65 duration-200 ease-out`}>{title}</button>
  )
}

export default Button