import { ClipboardList, Search, CalendarClock, LineChart, Bell, Star } from 'lucide-react';

const features = [
  { title: "Easy Item Listing", icon: <ClipboardList size={24} />, desc: "List your surplus items with ease for charities to find." },
  { title: "Find Nearby Charities", icon: <Search size={24} />, desc: "Discover active local charities in your neighborhood." },
  { title: "Schedule Pickup", icon: <CalendarClock size={24} />, desc: "Easily arrange a time for items to be collected." },
  { title: "Track Your Impact", icon: <LineChart size={24} />, desc: "See exactly how your donations are helping people." },
  { title: "Real-time Notifications", icon: <Bell size={24} />, desc: "Stay updated on your donation status instantly." },
  { title: "Rate & Review", icon: <Star size={24} />, desc: "Share your experience and build trust in the community." },
];

const Features = () => {
  return (
    <section className="bg-[#F9F9F9] py-20 px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-[#B33D11] font-bold mb-2">Features</h4>
        <h2 className="text-4xl font-bold mb-12">Everything You Need to Give Back</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-left hover:shadow-md transition-all">
              <div className="text-gray-700 mb-4">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;