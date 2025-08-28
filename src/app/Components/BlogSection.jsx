"use client";

const blogs = [
  {
    id: 1,
    title: "Roof Maintenance Tips for Summer",
    excerpt:
      "Keep your roof in top condition this summer with these easy maintenance tips...",
    date: "2025-08-28",
    image: "/Services/commercial-roofing.jpg",
  },
  {
    id: 2,
    title: "How to Clean Your Gutters Safely",
    excerpt:
      "Gutter cleaning is essential to prevent water damage. Learn safe methods here...",
    date: "2025-08-20",
    image: "/Services/roof-inspection.jpg",
  },
  {
    id: 3,
    title: "Storm Damage Prevention Tips",
    excerpt:
      "Protect your home from storm damage with these essential roofing tips...",
    date: "2025-08-15",
    image: "/Services/storm-damage.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Latest Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border border-gray-400 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <p className="text-gray-400 text-sm">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
