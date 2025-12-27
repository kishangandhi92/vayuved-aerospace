import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm({ product, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

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
          product,
        }),
      });

      const data = await res.json();

      if (res.ok && data?.status === true) {
        //toast.success("Inquiry sent successfully");
        setSubmitStatus({
          type: "success",
          message: data.message || "Inquiry sent successfully",
        });
        setForm({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
        setTimeout(() => {
          onSuccess();
        }, 3000);
      } else {
        // toast.error("Failed to send inquiry");
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Failed to submit inquiry",
        });
        throw new Error(data?.message || "Failed to submit inquiry");
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
    <>
      <h3 className="text-2xl font-secondary text-ink">Product Inquiry</h3>

      <p className="mt-2 text-sm text-steel">We’ll get back to you shortly.</p>

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

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full input"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="form-error">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full input"
            value={form.mobile}
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          />
          {errors.mobile && <p className="form-error">{errors.mobile}</p>}
        </div>

        {/* Product */}
        <input
          type="text"
          value={product}
          readOnly
          className="w-full input bg-gray-100 cursor-not-allowed"
        />

        {/* Message */}
        <div>
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full input"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <p className="form-error">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer bg-primary text-white py-3 rounded-lg font-medium hover:bg-surface transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Inquiry"}
        </button>
      </form>
    </>
  );
}
