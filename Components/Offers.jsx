const offers = [
  {
    title: "Travel Deals",
    desc: "Promote flights, hotels, and experiences from global partners.",
    link: "#",
  },
  {
    title: "Fashion & Beauty",
    desc: "Earn from trending outfits, accessories, and beauty products.",
    link: "#",
  },
  {
    title: "Health & Wellness",
    desc: "Affiliate with top supplements, skincare, and fitness brands.",
    link: "#",
  },
]

export default function Offers() {
  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-900">Affiliate Offers</h2>
        <p className="mt-4 text-gray-600">Choose from multiple niches to promote and maximize your earnings.</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {offers.map((offer, i) => (
            <div key={i} className="p-8 border rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-blue-600">{offer.title}</h3>
              <p className="mt-3 text-gray-600">{offer.desc}</p>
              <a href={offer.link} className="mt-5 inline-block text-blue-600 font-medium hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
