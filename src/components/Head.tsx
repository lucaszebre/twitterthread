'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Head = () => {
  return (
    <div className='flex flex-row justify-center w-full items-center mt-[60px]'>
        <div className='w-[90%] flex flex-col justify-center items-center'>
        <h1 className='font-bold text-[48px] text-black'>
            You write the title and we do the rest!
        </h1>
        <p>We browse the internet look for the information and write the best thread just from a title</p>
        <div className='flex flex-row justify-between gap-8'>
            <Button>Try it for free</Button>
            <Button asChild>
                <Link href="/signin">Signin</Link>
            </Button>
        </div>
        <div>
            <div>
                <div>
                    <svg data-v-5fc8d38d="" className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="" fill="currentColor" d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z"></path></svg>
                </div>
                <p>Simplicity</p>
            </div>
            <div>
                <div>
                    <svg data-v-5fc8d38d="" className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="" fill="currentColor" d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z"></path></svg>
                </div>
                <p>Powered by the Ai</p>
            </div>
            <div>
                <div>
                    <svg data-v-5fc8d38d="" className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="" fill="currentColor" d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z"></path></svg>
                </div>
                <p>Earn a shit tons of time</p>
            </div>
        </div>
        
    </div>
    </div>
    
  )
}

export default Head
