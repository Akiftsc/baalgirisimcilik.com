"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

function Nav() {

  const path = usePathname().slice(1)
  console.log("%cBir easter egg buldun 🥳 Ofise gel ve sürpriz hediyeni al!", "color: white; background-color: #007acc; font-size: 32px;")


  return (
    <nav className="navigation">
        <Link href="/about">
          {path === "about" ? <span className="navLink underline">Hakkımızda</span>: <span className="navLink">Hakkımızda</span>  }
        </Link>
        <Link href="/register">
            {path === "register" ? <span className="navLink navBtn bg-white !text-black">Kaydol</span>: <span className="navLink navBtn">Kaydol</span>  }
        </Link>
    </nav>
  )
}

export default Nav