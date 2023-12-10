import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href="/" className='Logo'>
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