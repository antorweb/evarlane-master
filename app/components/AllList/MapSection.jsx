export default function MapSection() {
  return (
    <div className="my-12">
      <h2 className="text-xl font-semibold mb-4">Location</h2>

      <div className="w-full h-[350px] rounded-xl overflow-hidden shadow">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18..."
        ></iframe>
      </div>
    </div>
  );
}
