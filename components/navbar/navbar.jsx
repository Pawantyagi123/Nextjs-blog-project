"use client";
import { assets } from '@/assets/assets'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className="p-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image src={assets.logo} alt="logo" className="w-[130px] sm:w-auto"/>
          </Link>
          <button className="flex items-center gap-2 px-3 py-1 font-medium border border-black border-solid sm:py-3 sm:px-6 shadow-[-7px_7px_0px_#000]">
            Get Started <ArrowRightIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar
