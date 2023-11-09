import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='h-[70px]  w-full border-b-2 border-gray-400'>
        <div className='h-full w-[90%] w-max-[1440px] flex flex-row justify-between'>
            <h1 className=''>
            Twitter Thread
            </h1>
            <div className='flex flex-row justify-between w-7 items-center'>
                <Link href={'/pricing'}>
                Pricing
                </Link>
                <Link href={'/pricing'}>
                Sign in
                </Link>
            </div>
        </div>
    </nav>
    
  )
}

export default Nav
