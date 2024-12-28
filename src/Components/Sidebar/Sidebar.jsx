import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";




const Sidebar = () => {
    const [men,setMen]=useState(false)
    const [women,setWomen]=useState(false)
  return (
    <section>
            <div className="sidebar_main font-dm">
                <div>
                    <h1 className='text-[20px] font-bold  text-primary'>Shop by Category</h1>
                    <ul className='py-[20px]'>
                        <li onClick={()=>setMen(!men)}>
                            <Link to='' className={`flex justify-between  items-center cursor-pointer py-[10px] text-[15px] ${!men ? 'font-normal' : 'font-bold'} text-secondary  border-b-[2px] boder-secondary duration-300`}><span>Men</span> {!men ? <span><FaPlus /></span>  : <span><FaMinus /></span> }</Link>
                        </li>
                      <div className={`border-b-[2px] boder-secondary ${!men && 'hidden'} duration-300`}>
                          <ul className='px-[15px]'>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Shirt</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>T-shirt</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Pant</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Panjabi</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Winter Special</span>
                              </li>
                          </ul>
                      </div>
                      <li onClick={()=>setWomen(!women)}>
                            <Link to='' className={`flex justify-between  items-center cursor-pointer py-[10px] text-[15px] ${!women ? 'font-normal' : 'font-bold'} text-secondary  border-b-[2px] boder-secondary duration-300`}><span>Women</span> {!women ? <span><FaPlus /></span>  : <span><FaMinus /></span> }</Link>
                        </li>
                      <div className={`border-b-[2px] boder-secondary ${!women && 'hidden'} duration-300`}>
                          <ul className='px-[15px]'>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Burka</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Hijab</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Sharee</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Three pics</span>
                              </li>
                              <li className='flex items-center gap-[10px] cursor-pointer py-[10px] text-[15px] font-normal text-secondary  '> <span><FaLongArrowAltRight /></span><span>Winter Special</span>
                              </li>
                          </ul>
                      </div>
                        <li>
                            <Link to='' className='flex justify-between  items-center cursor-pointer py-[10px] text-[15px] font-normal text-secondary  border-b-[2px] boder-secondary'><span>Baby</span> <span><FaPlus /></span></Link>
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