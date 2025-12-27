import { useState } from "react";
import { products } from "../../data/products";
import Modal from "../common/Modal";
import ContactForm from "../common/ContactForm";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-secondary  text-3xl lg:text-4xl text-ink">
            Flight Control Unit Product Line
          </h2>
          <p className="mt-4 font-primary text-lg text-steel">
            Scalable solutions for diverse UAV platforms and operational
            requirements.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  title,
  status,
  statusStyle,
  description,
  features,
  emphasize = false,
}) {
  const statusClasses = {
    success: "bg-green-100 text-green-700",
    info: "bg-blue-100 text-blue-700",
    neutral: "bg-gray-200 text-gray-700",
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`
        rounded-2xl border border-black/5
        p-8
        flex flex-col
        transition
        hover:shadow-md
        ${emphasize ? "bg-secondary text-white" : "bg-gray-100"}
      `}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between">
            <h3
              className={`font-secondary text-2xl ${
                emphasize ? "text-white" : "text-ink"
              }`}
            >
              {title}
            </h3>

            <span
              className={`text-xs px-3 py-1 rounded-full font-primary ${statusClasses[statusStyle]}`}
            >
              {status}
            </span>
          </div>

          {/* Description */}
          <p
            className={`mt-4 leading-relaxed ${
              emphasize ? "text-white/80" : "text-steel"
            }`}
          >
            {description}
          </p>

          {/* Features */}
          <ul
            className={`mt-6 mb-2 space-y-2 text-sm list-disc list-inside ${
              emphasize ? "text-white/80" : "text-steel"
            }`}
          >
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* CTA — ALWAYS BOTTOM */}
        <button
          className={`
          mt-auto
          w-full
          rounded-lg
          py-2.5
          font-primary
          text-sm
          transition
          cursor-pointer
          ${
            emphasize
              ? "bg-white text-secondary hover:bg-white/90"
              : "border border-ink text-ink hover:bg-surface hover:text-white"
          }
        `}
          onClick={() => setOpen(true)}
        >
          Inquire
        </button>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ContactForm
          product={title}
          onSuccess={() => {
            setOpen(false);
          }}
        />
      </Modal>
    </>
  );
}
