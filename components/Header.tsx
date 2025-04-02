"use client";

import Image from "next/image";
import MobileNav from "./MobileNav";
import PhoneTab from "./PhoneTab";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function Header() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <header
      className={`${scrolled ? "bg-black shadow-md" : "bg-transparent"
        } text-white p-4 fixed top-0 left-0 right-0 z-50 
      transition-all duration-300 ${scrolled ? "h-18" : "h-18"
        }`}
    >
      <div className="lg:hidden flex items-center justify-between w-full">

        {/* Added mobile book now button */}
        <div className="bg-green-700 p-2 cursor-pointer text-xs lg:p-4 lg:text-sm">
          Book Now
        </div>



        <MobileNav />




      </div>

      <div className="lg:flex items-center justify-between hidden w-full">
        <div className="flex items-center">
          <Image
            src="/assets/icons/logo.png"
            width={40}
            height={40}
            alt="logo"
            className="object-cover mr-8"
          />

        </div>

        <div className="hidden lg:flex">
          <NavBar />
        </div>

        <div className="bg-green-700 hidden lg:flex p-2 md:px-4 md:py-3 mr-4 cursor-pointer text-xs md:text-base h- hover:bg-green-800 transition-colors duration-300">
          Book Now
        </div>
      </div>
    </header>
  );
}

export default Header;