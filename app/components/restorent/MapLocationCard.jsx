"use client";

export default function MapLocationCard() {
  return (
    <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg mb-[124px]">

        <div className="container">

      
      {/* MAP BACKGROUND */}
      <img
        src="/map.png" // replace with your map image
        alt="Map"
        className="w-full h-[659px] object-cover"
      />

      {/* LEFT INFORMATION CARD */}
      <div className="absolute top-6 left-6 bg-[#070b16] text-white p-6 rounded-lg w-80 shadow-xl">
        <h2 className="text-2xl font-semibold">McDonald’s</h2>
        <p className="text-yellow-400 mt-1 font-medium">South London</p>

        <p className="mt-4 text-gray-300 leading-relaxed text-sm">
          Tooley St, London Bridge, London SE1 2TF,<br />
          United Kingdom
        </p>

        <p className="mt-5 text-sm text-gray-400">Phone number</p>
        <p className="text-lg font-medium mt-1">+934443-43</p>

        <p className="mt-5 text-sm text-gray-400">Website</p>
        <a
          href="http://mcdonalds.uk/"
          className="text-blue-400 underline mt-1 block"
        >
          http://mcdonalds.uk/
        </a>
      </div>

      {/* RIGHT FLOATING MARKER CARD */}
      <div className="absolute right-10 top-24 bg-white p-3 rounded-md shadow-lg flex items-center gap-2 w-52">
        <div>
          <p className="font-semibold text-sm">McDonald's</p>
          <p className="text-gray-600 text-xs">South London</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
          <span className="text-orange-400 text-xl">📍</span>
        </div>
      </div>
        </div>

    </div>
  );
}
