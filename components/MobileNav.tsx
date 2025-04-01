"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from "next/image";
config.autoAddCss = false;

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
        name: 'TEAM',
        path: '/team',
    },
    {
        name: 'CONTACT',
        path: '/contact',
    }, 
    
]

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" asChild>
        <button
          className="flex justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
            <FontAwesomeIcon icon={faBars} className="text-lg font-semibold text-grey-400" />
          
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex flex-col bg-white border-none shadow-none w-[280px] h-screen"
      >
        <SheetTitle>
           <Image
                      src="/assets/icons/logo.png"
                      width={40}
                      height={40}
                      alt="logo"
                      className="object-cover my-6 mx-auto"
                    />
        </SheetTitle>

        <nav className="flex flex-col justify-center text-xl text-black items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && "text-green-700 font-semibold"
                }  capitalize hover:text-green-800 ease-in duration-500`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;