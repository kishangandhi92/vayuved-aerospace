import { products } from "../../data/products";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-secondary text-4xl md:text-5xl text-ink">
            Flight Control Unit Product Line
          </h2>
          <p className="mt-4 font-primary text-lg text-steel">
            Scalable solutions for diverse UAV platforms and operational
            requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ title, status, statusStyle, description, features }) {
  const statusClasses = {
    success: "bg-green-100 text-green-700",
    info: "bg-blue-100 text-blue-700",
    neutral: "bg-gray-200 text-gray-700",
  };

  return (
    <div
      className="
      bg-gray-100 rounded-2xl border border-black/5
      p-8 flex flex-col
      transition
      hover:shadow-md
    "
    >
      {/* Title + Status */}
      <div className="flex items-center justify-between">
        <h3 className="font-secondary text-2xl text-ink">{title}</h3>
        <span
          className={`text-xs px-3 py-1 rounded-full font-primary ${statusClasses[statusStyle]}`}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 font-primary text-steel leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-sm text-steel list-disc list-inside">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className="
          mt-8 w-full border border-ink
          text-ink py-2.5 rounded-lg
          font-primary text-sm
          hover:bg-surface hover:text-white
          transition
          cursor-pointer
        "
      >
        Inquire
      </button>
    </div>
  );
}
