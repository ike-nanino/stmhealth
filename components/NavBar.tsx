"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation"




const links = [
    {
        name: 'HOME',
        path: '/',
    },
    {
        name: 'ABOUT',
        path: '/about',
    },
    {
        name: 'Team',
        path: '/team',
    },
    {
        name: 'Treatments',
        path: '/treatments',
    },
    {
        name: 'Blog',
        path: '/blog',
    }, 
    {
        name: 'Contact',
        path: '/contact',
    }, 
    
]



function NavBar() {
    const pathname = usePathname();
  return (
   <nav className="flex gap-8 text-xl">
    
    {
        links.map((link, index) => {
        return (
            <Link 
            key={index} 
            href={link.path}
            className={`${link.path === pathname && 'text-green-700 text-sm'} capitalize hover:text-green-800 text-xs ease-in duration-500`}
            prefetch={true}
            >{link.name}</Link>
        )
  
    })
   }</nav>
  )
}

export default NavBar