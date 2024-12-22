import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='py-[50px] font-dm'>
        <div className="container">
        <h1 className='text-[200px] font-bold  text-primary '>404</h1>
        <p className=' lg:w-[645px] text-[15px] font-normal text-secondary'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        <Link to='/'>
        <button className='py-[10px] px-[30px] bg-primary hover:bg-transparent hover:border hove:border-[1px] hover:border-primary hover:text-primary easy-in duration-300 border border-[1px] border-primary text-white mt-[20px]'>Back To Home</button>
        </Link>
        </div>
    </section>
  )
}

export default Error