export default function InfoCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-12">
      <div className="p-6 bg-white shadow rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Delivery Information</h3>
        <p className="text-gray-600">
          Fast delivery within 30–40 min in your local area.
        </p>
      </div>

      <div className="p-6 bg-white shadow rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Special Instructions</h3>
        <p className="text-gray-600">
          Customize your order based on your preference.
        </p>
      </div>

      <div className="p-6 bg-[#0F172A] text-white shadow rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Operational Hours</h3>
        <p className="text-gray-300">Mon–Sun: 10:00 AM – 11:00 PM</p>
      </div>
    </div>
  );
}
