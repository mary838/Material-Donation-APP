import { Shirt, Book, Sofa, Laptop, Baby, Boxes } from 'lucide-react';

const cats = [
  { name: "Clothing", icon: <Shirt size={32} /> },
  { name: "Furniture", icon: <Sofa size={32} /> },
  { name: "Books", icon: <Book size={32} /> },
  { name: "Electronics", icon: <Laptop size={32} /> },
  { name: "Baby & Kids", icon: <Baby size={32} /> },
  { name: "Others", icon: <Boxes size={32} /> },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
       <div className="max-w-6xl mx-auto text-center px-10">
          <h4 className="text-[#B33D11] font-bold mb-2">Categories</h4>
          <h2 className="text-4xl font-bold mb-12">What Can You Donate?</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {cats.map((c, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center gap-3 hover:border-[#B33D11] hover:text-[#B33D11] transition-all cursor-pointer">
                <div className="text-gray-600">{c.icon}</div>
                <span className="font-bold text-sm text-black">{c.name}</span>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default Categories;