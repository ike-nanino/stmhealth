"use client";

import Image from "next/image";
import MobileNav from "./MobileNav";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function Header() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 72;
      setScrolled(isScrolled);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        handleScroll();
      }
    };

    // Initial check when component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);



  return (
    <header
    className={`${scrolled ? "bg-black shadow-md" : "bg-transparent"}
    text-white p-4 fixed top-0 left-0 right-0 z-50 
    transition-all duration-300 h-18`}
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

        <div className="bg-green-700 hidden lg:flex p-2 md:px-4 md:py-2 mr-4 cursor-pointer text-xs md:text-base h- hover:bg-green-800 transition-colors duration-300">
          Book Now
        </div>
      </div>
    </header>
  );
}

export default Header;