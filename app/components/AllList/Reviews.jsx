import { FaUserCircle } from "react-icons/fa";

export default function Reviews() {
  const reviews = [
    { name: "John Doe", review: "Great taste & fast service!" },
    { name: "Adam Roy", review: "Loved their burgers!" },
  ];

  return (
    <div className="my-12">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-6 shadow rounded-xl">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-4xl text-gray-400" />
              <div>
                <h4 className="font-semibold">{r.name}</h4>
              </div>
            </div>

            <p className="text-gray-600 mt-3">{r.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
