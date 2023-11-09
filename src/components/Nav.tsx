'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='h-[70px] flex flex-row justify-center w-full border-b-[1px] border-gray-100'>
        <div className='h-full content-center w-[90%] w-max-[1440px] flex flex-row justify-between'>
            <div className='flex flex-row justify-between gap-1 content-center h-full items-center'>
                <Image src='/ot.png' alt='logo-nav' width={90} height={90} />
            {/* <h1 className='h-full flex text-center place-content-center content-center items-center font-bold text-xs text-black '>
            Twitter Thread
            </h1> */}
            </div>
           
            <div className='flex flex-row justify-between gap-4 content-center h-full items-center'>
                <Link href={'/pricing'}>
                Pricing
                </Link>
                <Link href={'/signin'}>
                Sign in
                </Link>
            </div>
        </div>
    </nav>
    
  )
}

export default Nav
