import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./components/pages/Home";
import JTA01 from "./components/pages/jta-01";
import NotFound from "./components/pages/NotFound";
import { Toaster } from "react-hot-toast";
import SAMPATHI1 from "./components/pages/sampathi-1";
import RouteScrollToTop from "./components/common/RouteScrollToTop";

export default function App() {
  return (
    <Router>
      {/* ✅ Route-based scroll reset */}
      <RouteScrollToTop />

      <div className="min-h-screen bg-bg text-steel font-primary">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/jta-01" element={<JTA01 />} />
          <Route path="/products/sampathi-1" element={<SAMPATHI1 />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* 404 MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />

        {/* ✅ UI scroll button */}
        <ScrollToTop />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}
