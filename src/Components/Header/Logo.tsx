import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" className='flex flex-col items-center justify-center'>
        <span className='logoText'>
            BAAL
        </span>
        <span className="text-base md:text-xl font-light text-white">
            GİRİŞİMCİLİK
        </span>
    </Link>
  )
}

export default Logo