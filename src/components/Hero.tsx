import Image from 'next/image';
import hero from '@/assent/hero-home.webp'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 gap-10">
      <div className="flex-1 space-y-6">
        <span className="text-[#B33D11] bg-[#FDF2F0] px-4  rounded-full text-sm font-semibold bottom-5 relative">
          Connecting people with each other
        </span>
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Give What You Have, <br />
          <span className="text-[#B33D11]">Change a Life</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-md">
          Donate clothes, furniture, books, and more to local charities and individuals in need. 
          Help us reduce waste and build a stronger community.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#B33D11] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#96320e] transition-all">
            Get Starting →
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all">
            How it works
          </button>
        </div>
      </div>
      
      <div className="flex-1">
        <Image 
          src={hero} 
          alt="Donation Boxes" 
          className="rounded-2xl shadow-xl object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;