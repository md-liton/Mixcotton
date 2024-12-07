import React from 'react'
import { FaPlus } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <section>
            <div className="sidebar_main font-dm">
                <div>
                    <h1 className='text-[20px] font-bold  text-primary'>Shop by Category</h1>
                    <ul className='py-[20px]'>
                        <li className='flex justify-between  items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Category 1</span> <span><FaPlus /></span>
                        </li>
                        <li className='flex justify-between items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Category 2</span> <span></span>
                        </li>
                        <li className='flex justify-between items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Category 3</span> <span><FaPlus /></span>
                        </li>
                        <li className='flex justify-between items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Category 4</span> <span></span>
                        </li>
                        <li className='flex justify-between items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Category 5</span> <span></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[20px] font-bold  text-primary'>Shop by Color</h1>
                    <ul className='py-[20px]'>
                        <li className='flex gap-[30px]  items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'> <span className='h-[10px] w-[10px] rounded-full bg-[#000000]'></span><span>Color 1</span> 
                        </li>
                        <li className='flex  gap-[30px] items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'> <span className='h-[10px] w-[10px] rounded-full bg-[#FF8686]'></span><span>Color 2</span> 
                        </li>
                        <li className='flex gap-[30px] items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'> <span className='h-[10px] w-[10px] rounded-full bg-[#7ED321]'></span><span>Color 3</span> 
                        </li>
                        <li className='flex  gap-[30px] items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span className='h-[10px] w-[10px] rounded-full bg-[#B6B6B6]'></span><span>Color 4</span> 
                        </li>
                        <li className='flex  gap-[30px] items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'> <span className='h-[10px] w-[10px] rounded-full bg-[#15CBA5]'></span><span>Color 5</span> 
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[20px] font-bold  text-primary'>Shop by Brand</h1>
                    <ul className='py-[20px]'>
                        <li className='flex   items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Brand 1</span> 
                        </li>
                        <li className='flex items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Brand 2</span> <span></span>
                        </li>
                        <li className='flex items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Brand 3</span> 
                        </li>
                        <li className='flex  items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Brand 4</span> <span></span>
                        </li>
                        <li className='flex  items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Brand 5</span> <span></span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[20px] font-bold  text-primary'>Shop by Price</h1>
                    <ul className='py-[20px]'>
                        <li className='flex   items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>$0.00 - $9.99</span> 
                        </li>
                        <li className='flex items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>$10.00 - $19.99</span> <span></span>
                        </li>
                        <li className='flex items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>$20.00 - $29.99</span> 
                        </li>
                        <li className='flex  items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>$30.00 - $39.99</span> <span></span>
                        </li>
                        <li className='flex  items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>$40.00 - $69.99</span> <span></span>
                        </li>
                    </ul>
                </div>
            </div>
    
    </section>
  )
}

export default Sidebar