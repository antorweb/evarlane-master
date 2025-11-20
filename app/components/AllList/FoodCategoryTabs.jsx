"use client";

export default function FoodCategoryTabs() {
  const categories = ["All", "Burgers", "Fries", "Drinks", "Combo", "Snacks"];

  return (
    <div className="flex gap-4 overflow-x-auto py-4 mb-6">
      {categories.map((item, i) => (
        <button
          key={i}
          className="px-6 py-2 bg-[#FF8C00] text-white rounded-full 
                    font-medium hover:bg-[#ff7a00] transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
