import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='bg-[#263238]'>
      <div className='mx-4 md:mx-8 lg:mx-28 pt-8 md:pt-12 lg:pt-16'>
        {/* Main Footer Content */}
        <div className='flex flex-col lg:flex-row lg:gap-70 pb-8 md:pb-12 lg:pb-19'>
          {/* Company Info Section */}
          <div className='lg:mr-40 px-4 md:px-8 lg:px-11 pb-8 md:pb-10 lg:pb-0 text-center lg:text-left'>
            <div className='w-fit h-fit mx-auto lg:mx-0'>
                <img src='/images/footerlogo.png' alt='logo' className='w-full h-full object-cover'/>
            </div>
            <p className='mt-6 md:mt-8 lg:mt-10 mb-3 md:mb-4 lg:mb-5 text-[#F5F7FA] font-inter font-normal text-sm md:text-base'>
              Copyright © 2020 Nexcent ltd.
            </p>
            <p className='text-[#F5F7FA] mb-6 md:mb-8 lg:mb-10 font-inter font-normal text-sm md:text-base'>
              All rights reserved
            </p>
            <div className='flex gap-4 justify-center lg:justify-start'>
                <div className='p-2 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer'>
                    <FaInstagram className='text-lg md:text-xl'/>
                </div>
                <div className='p-2 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer'>
                    <FaDribbble className='text-lg md:text-xl'/>
                </div>
                <div className='p-2 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer'>
                    <FaTwitter className='text-lg md:text-xl'/>
                </div>
                <div className='p-2 rounded-full bg-white/20 h-8 w-8 text-white flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer'>
                    <BsYoutube className='text-lg md:text-xl'/>
                </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className='flex flex-col sm:flex-row justify-between gap-8 md:gap-12 lg:gap-70 px-4 md:px-8 lg:px-0'>
            {/* Company Links */}
            <div className='text-center lg:text-left'>
                <h3 className='mb-4 md:mb-6 text-white font-inter font-semibold text-lg md:text-xl leading-7'>Company</h3>
                <ul className='flex flex-col gap-2 md:gap-3'>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>About us</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Blog</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Contact us</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Pricing</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Testimonials</a>
                    </li>
                </ul>
            </div>

            {/* Support Links */}
            <div className='text-center lg:text-left'>
                <h3 className='mb-4 md:mb-6 text-white font-inter font-semibold text-lg md:text-xl leading-7'>Support</h3>
                <ul className='flex flex-col gap-2 md:gap-3'>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Help center</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Terms of service</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Legal</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Privacy policy</a>
                    </li>
                    <li>
                        <a href='#' className='text-white font-inter font-normal text-sm leading-5 hover:text-gray-300 transition-colors'>Status</a>
                    </li>
                </ul>
            </div>

            {/* Newsletter Section */}
            <div className='text-center lg:text-left flex flex-col items-center lg:items-start'>
                <h3 className='mb-4 md:mb-6 text-white font-inter font-semibold text-lg md:text-xl leading-7'>Stay up to date</h3>
                <div className='w-full max-w-xs'>
                    <div className='flex flex-col sm:flex-row gap-3'>
                        <input 
                            type='email' 
                            placeholder='Your email address' 
                            className='px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 font-inter font-normal text-sm leading-5 focus:outline-none focus:border-[#4CAF4F] transition-colors'
                        />
                        <button className='px-6 py-3 bg-[#4CAF4F] text-white rounded-lg font-inter font-medium text-sm leading-5 hover:bg-[#45a049] transition-colors whitespace-nowrap'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Padding */}
        <div className='pb-6 lg:pb-0'></div>
      </div>
    </footer>
  )
}

export default Footer
