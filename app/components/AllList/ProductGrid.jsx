"use client";

export default function ProductGrid({ title }) {
  const products = Array(6).fill({
    name: "Chicken Burger",
    price: "£6.99",
    img: "/burger.png",
  });

  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 hover:shadow-md transition"
          >
            <img
              src={p.img}
              className="w-full h-40 object-cover rounded-lg"
              alt=""
            />

            <h3 className="text-lg font-semibold mt-3">{p.name}</h3>
            <p className="text-[#FF8C00] font-bold mt-1">{p.price}</p>

            <button
              className="mt-3 w-full py-2 bg-[#FF8C00] text-white rounded-lg 
                        font-medium hover:bg-[#ff7a00]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
