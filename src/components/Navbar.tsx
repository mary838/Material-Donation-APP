import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assent/logo.jpg';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-10 py-1 bg-white border-b border-gray-100 shadow-sm">
      
      {/* 1. Left Section: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-1">
          {/* Important: Ensure you have your logo file in your 'public' folder. 
            I am assuming its name is 'logo.png'. 
          */}
          <Image 
            src={logoImg} 
            alt="KindDrop Logo" 
            width={110} 
            height={40} 
            priority // Preloads for performance
            className="object-contain"
          />
        </Link>
      </div>

      {/* 2. Middle Section: Primary Navigation */}
      <div className="hidden md:flex items-center gap-10 font-medium text-[#444] text-base">
        <Link href="/" className="bg-kind-pink-light text-black px-6 py-2.5 rounded-md bg-[#F094B5] transition-colors">
          Home
        </Link>
        <Link href="/donate" className="hover:text-black transition-colors">
          Donate
        </Link>
        <Link href="/browse" className="hover:text-black transition-colors">
          Browse
        </Link>
        <Link href="/how-it-works" className="hover:text-black transition-colors">
          How It Work
        </Link>
        <Link href="/contact" className="hover:text-black transition-colors">
          Contact
        </Link>
      </div>

      {/* 3. Right Section: Login & Sign Up */}
      <div className="flex items-center gap-6 text-base font-medium">
        <Link href="/login" className="text-[#444] hover:text-black transition-colors">
          Login
        </Link>
        <Link href="/signup" className="bg-kind-pink-button text-white px-7 py-3 rounded-lg bg-[#E03080] transition-colors font-semibold">
          Sign Up
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;