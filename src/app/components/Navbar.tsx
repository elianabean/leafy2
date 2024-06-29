import Link from 'next/link'

export default function Navbar() {
      return (
            <nav
    id="navbar"
    className="w-full bg-white top-0 flex items-center justify-between px-16 py-6 z-50 sticky border-b-2 border-green-700"
    >
    <a href="/">
        <div className="flex items-center">
        {/* Logo and Title */}
        <img src="/images/other/logo.png" alt="Logo" className="h-6" />
        <h1 className="ml-2 text-lg font-bold">Leafy</h1>
        </div>
    </a>

    {/* Hamburger menu button */}
    <button className="md:hidden z-50" aria-label="navbar">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
    </button>

    <div id="menu" className="md:flex items-center md:items-center hidden gap-4 font-sans ">
       {/*Navlinks*/} 
        {/* from https://birdeatsbug.com/blog/creating-hover-effects-with-tailwind-css */} 
        <a href="/" className="mr-4">
        <p className="relative group hover:text-primary">
            <span>Home</span>
            <span
            className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"
            ></span>
            <span
            className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"
            ></span>
        </p>
        </a>

        <a href="/careers" className="mr-4 hover:text-primary">
        <p className="relative group">
            <span>Careers</span>
            <span
            className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"
            ></span>
            <span
            className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"
            ></span>
        </p>
        </a>
        <a href="/apply/2" className="mr-4">
        <p className="relative group hover:text-primary">
            <span>Join Us</span>
            <span
            className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"
            ></span>
            <span
            className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"
            ></span>
        </p>
        </a>

        {/* Button */}
        <a
        href="/growwithus"
        className="px-4 py-2 bg-primary text-white rounded hover:bg-white hover:text-primary hover:shadow-[inset_0_0_0_0.5px_#3FA929] hover:transition-all duration-200"
        >Grow With Us</a>
    </div>

    {/* Mobile Nav Menu opening from the Side */}
    <div
        id="mobmenu"
        className="flex-col justify-end text-end absolute top-0 right-0 bg-card border-primary border-l-2 border-b-2 p-8 pt-16 hidden z-40"
    >
        <div className="flex flex-col items-end gap-4">
        {/* Navlinks */}
        <a href="/" className="mr-4">Home</a>
        <a href="/careers" className="mr-4">Careers</a>
        <a href="/apply/2" className="mr-4">Join Us</a>

        {/* Button */}
        <a href="/growwithus" className="px-4 py-2 bg-primary text-white rounded"
            >Grow With Us</a>
        </div>
    </div>
    </nav>

      );
    }
    