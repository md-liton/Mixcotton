import React from 'react'
import { FaStar } from "react-icons/fa";
import AddedReview from '../AddedReview/AddedReview';


const ProductDetails = () => {
    return (
        <section className='py-[50px]'>
            <div className="container">
                <div className="product_details_main">
                    <h5 className='font-dm font-bold text-[40px] text-primary py-[20px]'>Products Details</h5>
                    <div className='flex gap-[30px]'>
                        <div className=''>
                            <div className='bg-red-500 lg:h-[350px] lg:w-[350px]'></div>
                            <div className='flex justify-between items-center w-[350px] py-[20px]'>
                                <div className='bg-red-500 w-[100px] h-[100px] cursor-pointer outline-[2px] outline outline-2 outline-secondary'></div>
                                <div className='bg-green-500 w-[100px] h-[100px] cursor-pointer'></div>
                                <div className='bg-yellow-500 w-[100px] h-[100px] cursor-pointer'></div>
                            </div>
                        </div>
                        <div className=''>
                            <h5 className='font-dm font-semibold text-[18px] text-primary'>Products Name</h5>
                            <p className='text-[18px] font-normal text-secondary  text-justify' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam ipsum voluptatum repellat mollitia modi tempore animi velit, rerum, beatae accusamus quibusdam voluptatibus maxime, expedita aliquam! Earum debitis maxime optio a odio voluptate voluptatum neque alias et, recusandae ipsam aspernatur commodi. Neque provident ipsa accusamus, mollitia adipisci repellendus consequuntur suscipit ad, alias placeat dolor, asperiores id ipsum laborum est quod? Nulla cum, nesciunt suscipit sint distinctio doloremque necessitatibus laboriosam omnis aut labore nam modi repudiandae earum odit porro quia rem sit vitae, expedita praesentium quis ut maxime. Saepe qui placeat quaerat officiis distinctio sequi rerum eligendi dolor velit, unde deserunt!</p>
                            <div className='review text-yellow-500 flex gap-[3px] items-center py-[10px]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='text-[15px] font-normal text-secondary px-[10px]' >1 Review</p>
                            </div>
                            <div className='flex items-center gap-[15px]'>
                                <span className='text-[18px] font-normal text-secondary ' ><del>$88.00</del></span>
                                <span className='font-dm font-semibold text-[18px] text-primary'>$44.00</span>
                            </div>
                            <div className='flex items-center gap-[20px] py-[15px]'>
                                <div className='w-[100px]'>
                                    <h5 className='font-dm font-semibold text-[18px] text-primary'>COLOR:</h5>
                                </div>
                                <div className='flex items-center gap-[10px] py-[10px]'>
                                    <div className='h-[20px] w-[20px] rounded-full bg-[#000000] cursor-pointer'></div>
                                    <div className='h-[20px] w-[20px] rounded-full bg-[#FF8686] cursor-pointer'></div>
                                    <div className='h-[20px] w-[20px] rounded-full bg-[#7ED321] cursor-pointer'></div>
                                    <div className='h-[20px] w-[20px] rounded-full bg-[#B6B6B6] cursor-pointer'></div>
                                    <div className='h-[20px] w-[20px] rounded-full bg-[#15CBA5] cursor-pointer'></div>
                                </div>
                            </div>

                            <div className='flex items-center gap-[20px] '>
                                <div className='w-[100px]'>
                                    <h5 className='font-dm font-semibold text-[18px] text-primary'>SIZE:</h5>
                                </div>
                                <div>
                                    <select className='border border-2 focus:outline-none'>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>LG</option>
                                        <option>XL</option>
                                        <option>XXL</option>
                                    </select>
                                </div>
                            </div>

                            <div className='flex items-center gap-[20px] py-[15px]'>
                                <div className='w-[100px]'>
                                    <h5 className='font-dm font-semibold text-[18px] text-primary'>QUANTITY:</h5>
                                </div>
                                <div>
                                    <div className='border border-2 py-[3px] px-[20px] flex items-center gap-[30px] text-secondary '>
                                        <span className='cursor-pointer text-[23px]'>-</span>
                                        <span>0</span>
                                        <span className='cursor-pointer text-[20px]'>+</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center gap-[20px] py-[15px]'>
                                <div className='w-[100px]'>
                                    <h5 className='font-dm font-semibold text-[18px] text-primary'>STATUS:</h5>
                                </div>
                                <div>
                                    <div className=' text-secondary '>
                                        <span >In stock</span>
                                    </div>
                                </div>
                            </div>


                            <div className=' flex items-center gap-[20px] py-[20px] '>
                                <button className='py-[10px] px-[30px]  hover:bg-primary bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-white easy-in duration-300 border border-[1px] border-primary'>Buy Now</button>
                                <button className='py-[10px] px-[30px]  bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white' >Add to Cart</button>
                            </div>

                            <div>
                                <h5 className='font-dm font-semibold text-[18px] text-primary'>Reviews (1)</h5>
                                <div className=' border-y-2 border-[#E3E3E3] py-[15px] my-[10px]'>
                                    <div className='flex items-center gap-[30px]'>
                                        <div>
                                            <h5 className='font-dm font-normal text-[16px] text-primary'>John Ford</h5>
                                        </div>
                                        <div className='review text-yellow-500 flex gap-[3px] items-center py-[10px]'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                    <p className='text-[15px] font-normal text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae, cupiditate deleniti unde vero voluptatibus adipisci dolor consequatur nam officiis sit ipsa dolores. Cupiditate iste, recusandae maxime ea reiciendis voluptatem?</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='py-[30px]'>
            <AddedReview/>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails