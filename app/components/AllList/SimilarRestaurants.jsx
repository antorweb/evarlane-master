export default function SimilarRestaurants() {
  const brands = ["/mcd.png", "/kfc.png", "/pizza.png", "/burgerking.png"];

  return (
    <div className="my-16">
      <h2 className="text-xl font-semibold mb-4">Similar Restaurants</h2>

      <div className="flex gap-6 flex-wrap">
        {brands.map((b, i) => (
          <img
            key={i}
            src={b}
            className="w-28 h-auto object-contain"
            alt="brand"
          />
        ))}
      </div>
    </div>
  );
}
