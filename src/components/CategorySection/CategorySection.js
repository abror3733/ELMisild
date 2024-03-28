import React, { useState } from 'react';
import CategoryNav from '../CategoryNav/CategoryNav';
import elCupcakeImg from "../../assets/Images/cupcake.svg";
import elKebab from "../../assets/Images/kebab.svg";
import elPizza from "../../assets/Images/pizza.svg";
import elSalmon from "../../assets/Images/salmon.svg";
import elDoughut from "../../assets/Images/doughnut.svg";
import elPrev from "../../assets/Images/prev.svg";
import elNext from "../../assets/Images/next.svg";

function CategorySection() {
  const [count, setCount] = useState(0)
 function nextBtnClikc(){
  if(count != -1450){
    setCount(count - 290)
  }else{
    setCount(0)
  }
 }
 function prevBtnClick(){
  if(count !=0){
    setCount(count + 290)
  }
 }
console.log(count);

  return (
    <section className='pt-[60px] pb-[113px]'>
      <div className="container mx-auto">
        <div className='w-[100%]'>
          <h2 className='text-[#333333] text-[36px] font-semibold mb-[42px]'>
            Browser Our Category <br /> <span className='text-[#8BAC3E]'>Receipt</span>
          </h2>
          <div className='mb-[46px]'>
            <div className='flex overflow-x-auto items-center space-x-[20px] w-[100%]'>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F3F7D9] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elPizza} alt="img" />
                <h5 className='font-bold mt-[20px]'>Pizza</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#EAEEFA] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elKebab} alt="img" />
                <h5 className='font-bold mt-[20px]'>Kebab</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#EAEEFA] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elSalmon} alt="img" />
                <h5 className='font-bold mt-[20px]'>Salmon</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F3F7D9] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elPizza} alt="img" />
                <h5 className='font-bold mt-[20px]'>Pizza</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F9EEF3] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elCupcakeImg} alt="img" />
                <h5 className='font-bold mt-[20px]'>Cupcake</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#EAEEFA] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elSalmon} alt="img" />
                <h5 className='font-bold mt-[20px]'>Salmon</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F3F7D9] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elKebab} alt="img" />
                <h5 className='font-bold mt-[20px]'>Kebab</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F9EEF3] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elDoughut} alt="img" />
                <h5 className='font-bold mt-[20px]'>Doughnut</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#EAEEFA] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elPizza} alt="img" />
                <h5 className='font-bold mt-[20px]'>Pizza</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F3F7D9] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elKebab} alt="img" />
                <h5 className='font-bold mt-[20px]'>Kebab</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#EAEEFA] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elSalmon} alt="img" />
                <h5 className='font-bold mt-[20px]'>Salmon</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#EAEEFA] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elDoughut} alt="img" />
                <h5 className='font-bold mt-[20px]'>Doughnut</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F9EEF3] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elKebab} alt="img" />
                <h5 className='font-bold mt-[20px]'>Kebab</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[240px] h-[200px] text-center  transition  ease-out   bg-[#EAEEFA] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elDoughut} alt="img" />
                <h5 className='font-bold mt-[20px]'>Doughnut</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F9EEF3] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elKebab} alt="img" />
                <h5 className='font-bold mt-[20px]'>Kebab</h5>
                <span>22 items</span>
              </div>
              <div style={{"transform":`translateX(${count}px)`}} className='category-list hover:shadow-lg  cursor-pointer rounded-[10px]  pb-[10px] w-[290px] h-[200px] text-center  transition  ease-out   bg-[#F3F7D9] px-[50px]'>
                <img   className='mx-auto pt-[35px] block' src={elPizza} alt="img" />
                <h5 className='font-bold mt-[20px]'>Pizza</h5>
                <span>22 items</span>
              </div>






























              
              {/* <CategoryNav imgURL={elCupcakeImg} title={"Cupcake"} titleItem={"22 Items"} CardBg={"bg-[#F0FEEB] px-[43px]"}/>
              <CategoryNav imgURL={elPizza} title={"Pizza"} titleItem={"22 Items"} CardBg={"bg-[#F3F7D9] px-[54px]"}/>
              <CategoryNav imgURL={elKebab} title={"Kebab"} titleItem={"22 Items"} CardBg={"bg-[#EAEEFA] px-[50px]"}/>
              <CategoryNav imgURL={elSalmon} title={"Salmon"} titleItem={"22 Items"} CardBg={"bg-[#F9EEF3] px-[47px]"}/>
              <CategoryNav imgURL={elDoughut} title={"Doughnut"} titleItem={"22 Items"} CardBg={"bg-[#F3F7D9] px-[37px]"}/>
              <CategoryNav imgURL={elPizza} title={"Pizza"} titleItem={"22 Items"} CardBg={"bg-[#F3F7D9] px-[53px]"}/>
              <CategoryNav imgURL={elKebab} title={"Kebab"} titleItem={"22 Items"} CardBg={"bg-[#EAEEFA] px-[49px]"}/>
              <CategoryNav imgURL={elPizza} title={"Pizza"} titleItem={"22 Items"} CardBg={"bg-[#F3F7D9] px-[53px]"}/>
              <CategoryNav imgURL={elKebab} title={"Kebab"} titleItem={"22 Items"} CardBg={"bg-[#EAEEFA] px-[50px]"}/>
              <CategoryNav imgURL={elPizza} title={"Pizza"} titleItem={"22 Items"} CardBg={"bg-[#F3F7D9] px-[53px]"}/>
              <CategoryNav imgURL={elKebab} title={"Kebab"} titleItem={"22 Items"} CardBg={"bg-[#EAEEFA] px-[50px]"}/> */}
            </div>
          </div>
          <div className='flex items-center space-x-[20px] justify-end'>
            <button onClick={prevBtnClick} className='prev hover:opacity-80 btn-next-prev transition-all ease-out w-[123px] flex items-center justify-center pr-[9px]  gap-[7px] py-[8px]  rounded-[25px] bg-[#8BAC3E] text-white font-semibold text-[16px]'>
              <img className='' src={elPrev} alt="icon" />
              <span>PREV</span>
            </button>
            <button onClick={nextBtnClikc} className='next hover:opacity-80 btn-next-prev transition-all ease-out w-[123px] flex items-center justify-center pl-[9px]  gap-[7px] py-[8px]  rounded-[25px] bg-[#8BAC3E] text-white font-semibold text-[16px]'>
              <span>NEXT</span>
              <img className='' src={elNext} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
