import React from 'react'

const Client = () => {
  return (
    <section className='mx-28 container'>
        <h2 className='text-center mt-10 mb-2 font-inter font-semibold text-4xl leading-11'>Our Clients</h2>
        <p className='text-center text-[#717171] pb-4 '>We have been working with some Fortune 500+ clients</p>
        <div className='flex justify-between py-12'>
            <div className='w-fit h-fit'>
                <img src='/images/brand_1.png' alt='brand' className='w-full h-full object-cover' />
            </div>
            <div className='w-fit h-fit'>
                <img src='/images/brand_2.png' alt='brand' className='w-full h-full object-cover' />
            </div>
            <div className='w-fit h-fit'>
                <img src='/images/brand_3.png' alt='brand' className='w-full h-full object-cover' />
            </div>
            <div className='w-fit h-fit'>
                <img src='/images/brand_4.png' alt='brand' className='w-full h-full object-cover' />
            </div>
            <div className='w-fit h-fit'>
                <img src='/images/brand_5.png' alt='brand' className='w-full h-full object-cover' />
            </div>
            <div className='w-fit h-fit'>
                <img src='/images/brand_6.png' alt='brand' className='w-full h-full object-cover' />
            </div>
            <div className='w-fit h-fit'>
                <img src='/images/brand_7.png' alt='brand' className='w-full h-full object-cover' />
            </div>
        </div>
    </section>
  )
}

export default Client
