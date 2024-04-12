import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' shadow-md border-b sticky top-0 bg-white z-30 p-3'>
      <div className=' flex justify-between items-center max-w-6xl mx-auto'>
          <Link href='/' className=' hidden lg:inline-block'>
            <Image src="/img/insta1.jpg" alt="Logo" width={96} height={96} />
          </Link>
           <Link href='/' className=' lg:hidden '>
            <Image src="/img/insta.png" alt="Logo" width={44} height={44} />
          </Link>
          <input type="text" placeholder="Search" 
          className="bg-slate-100 border border-gray-200 rounded w-full text-sm px-4 py-2 max-w-[210px]" />
          <button onClick={""} className=' font-semibold text-sm text-blue-500' >Sign In</button>
      </div>
    </div>
  )
}

export default Header