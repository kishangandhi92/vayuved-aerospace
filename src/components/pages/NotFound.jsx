import { Link } from "react-router-dom";
import NotFoundIllustration from "../../assets/404.svg";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-gray-50 px-6 py-10 pb-20">
      <div className="max-w-2xl text-center">
        {/* Illustration */}
        <img
          src={NotFoundIllustration}
          alt="Page Not Found"
          className="mx-auto w-full max-w-md"
        />

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-steel">
          Page Not Found
        </h1>

        <p className="mt-4 text-muted">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-medium text-white hover:bg-surface transition"
          >
            Go to Home
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-medium text-steel hover:bg-border/30 transition"
          >
            Contact Engineering
          </Link>
        </div>
      </div>
    </div>
  );
}
