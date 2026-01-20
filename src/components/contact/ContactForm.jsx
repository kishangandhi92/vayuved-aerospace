import { memo } from "react";
import { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

const ContactForm = () => {
  const initialForm = {
    name: "",
    email: "",
    mobile: "",
    message: "",
    purpose: "General",
    company: "", // honeypot
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Invalid email address";

    if (!form.mobile) e.mobile = "Mobile number is required";
    else if (!/^\d{10}$/.test(form.mobile))
      e.mobile = "Enter valid 10-digit number";

    if (!form.message.trim()) e.message = "Message is required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "contact",
        }),
      });

      const data = await res.json();

      if (res.ok && data?.status === true) {
        //toast.success("Inquiry sent successfully");
        setSubmitStatus({
          type: "success",
          message: data.message || "Message sent successfully",
        });

        // Auto-reset form
        setForm(initialForm);
      } else {
        // toast.error("Failed to send inquiry");
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Failed to submit message",
        });
        throw new Error(data?.message || "Failed to submit message");
      }
    } catch (err) {
      // toast.error("Failed to send inquiry");
      setSubmitStatus({
        type: "error",
        message: err.message || "Something went wrong",
      });
      setErrors((prev) => ({
        ...prev,
        submit: err.message,
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Let’s Build Reliable Flight Systems Together
          </h2>
          <p className="text-muted-foreground mb-10">
            Engineering-driven support for aerospace and unmanned platforms
          </p>

          <ul className="space-y-6">
            {[
              {
                title: "Engineering & Integration Support",
                desc: "Get technical guidance for system architecture, hardware integration, and deployment planning.",
              },
              {
                title: "Product & Capability Enquiries",
                desc: "Discuss platform capabilities, compliance alignment, and suitability for your application.",
              },
              {
                title: "Long-Term Program Collaboration",
                desc: "We support sustained programs with a focus on reliability, traceability, and lifecycle stability.",
              },
              {
                title: "Standards-Aligned Communication",
                desc: "Clear, transparent discussions aligned with professional aerospace and defence expectations.",
              },
              {
                title: "India-Based Engineering Team",
                desc: "Direct access to the team designing and developing our systems in India.",
              },
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <FiCheckCircle className="text-primary mt-1" size={22} />
                <div>
                  <h4 className="font-medium text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
          {submitStatus && (
            <div
              className={`mb-2 mt-2 rounded-lg px-4 py-3 text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot (anti-spam) */}
            <input
              type="text"
              name="company"
              tabIndex="-1"
              autoComplete="off"
              className="hidden"
              value={form.company}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, company: e.target.value }))
              }
            />

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Manoj Kumar"
                className={`w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? "!border-red-500 focus:border-red-500" : ""
                } `}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="e.g. manoj@companyname.com"
                className={`w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? "!border-red-500 focus:border-red-500" : ""
                }`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Mobile No <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="(+91) 9876543210"
                  required
                  className={`w-full rounded-lg border border-border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.mobile ? "!border-red-500 focus:border-red-500" : ""
                  }`}
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />
                {errors.mobile && <p className="form-error">{errors.mobile}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Purpose
                </label>
                <select
                  name="purpose"
                  value={form.purpose}
                  onChange={(e) =>
                    setForm({ ...form, purpose: e.target.value })
                  }
                  className="w-full rounded-lg border border-border px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>General</option>
                  <option>Consultation</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                required
                className={`w-full rounded-lg border border-border px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.message ? "!border-red-500 focus:border-red-500" : ""
                }`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
    w-full cursor-pointer
    bg-primary text-white
    py-3 rounded-lg font-medium
    transition
    hover:bg-surface
    disabled:opacity-50
    disabled:cursor-not-allowed
    flex items-center justify-center gap-2
  "
            >
              {loading && (
                <svg
                  className="h-4 w-4 animate-spin text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}

              <span>{loading ? "Submitting..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(ContactForm);
