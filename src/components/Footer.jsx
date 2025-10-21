import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='bg-[#263238]'>
      <div className='mx-28 pt-16 flex gap-70'>
        <div className=' pb-19 mr-40 pl-11'>
            <div className='w-fit h-fit'>
                <img src='/images/footerlogo.png' alt='logo' className='w-full h-full object-cover'/>
            </div>
            <p className='mt-10 mb-5 text-[#F5F7FA]'>Copyright © 2020 Nexcent ltd.</p>
            <p className=' text-[#F5F7FA] mb-10'>All rights reserved</p>
            <div className='flex gap-4'>
                <div className='p-6 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center'>
                 <div>
                       <FaInstagram className='text-2xl'/>
                 </div>
                </div>
                <div className='p-6 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center'>
                 <div>
                       <FaDribbble className='text-2xl'/>
                 </div>
                </div>
                <div className='p-6 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center'>
                 <div>
                       <FaTwitter className='text-2xl'/>
                 </div>
                </div>
                <div className='p-6 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center'>
                 <div>
                       <BsYoutube className='text-2xl'/>
                 </div>
                </div>
            </div>
        </div>
        {/* company ul */}
        <div>
            <h3 className='mb-6 text-white font-inter font-semibold text-xl leading-7'>Company</h3>
         <ul className='flex flex-col gap-3'>
            <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>About us</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Blog</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Contact us</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Pricing</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Testimonials</a>
            </li>
         </ul>
        </div>
        {/* support ul */}
         <div>
            <h3 className='mb-6 text-white font-inter font-semibold text-xl leading-7'>Support</h3>
         <ul className='flex flex-col gap-3'>
            <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Help center</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Terms of service</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Legal</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Privacy policy</a>
            </li>
             <li>
                <a href='#' className='text-white font-inter font-normal text-sm leading-5'>Status</a>
            </li>
         </ul>
        </div>
        <div className='flex justify-center items-center'>
            <h3 className='text-white'>Stay up to date</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
