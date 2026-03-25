import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Categories />
      {/* You can add the Categories section here as well */}
      <HowItWorks />
      
      {/* The Bottom CTA Section */}
      <section className="px-10 py-20">
        <div className="bg-[#D98E73] rounded-3xl p-16 text-center text-white max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">READY TO MAKE A DIFFERENCE?</h2>
          <p className="mb-8 opacity-90 max-w-lg mx-auto">
            Join thousands of donors and organizations working together 
            to make the world a better place.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#B33D11] px-8 py-3 rounded-lg font-bold">Start Donating</button>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-bold">Learn More</button>
          </div>
        </div>
      </section>
    </main>
  );
}