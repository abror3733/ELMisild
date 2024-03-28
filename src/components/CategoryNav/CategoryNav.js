import React from 'react'

function CategoryNav({imgURL,title,titleItem,CardBg}) {
  return (
    <div  className={`${CardBg} category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition`}>
      <img  className='mx-auto pt-[35px] block'  src={imgURL} alt="img" />
      <h5 className='font-bold mt-[20px]'>{title}</h5>
      <span>{titleItem}</span>
    </div>
  )
}

export default CategoryNav

// hover:translate-y-5 ease-out