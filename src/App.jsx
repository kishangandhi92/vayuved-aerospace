import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./components/pages/Home";
import JTA01 from "./components/pages/jta-01";
import NotFound from "./components/pages/NotFound";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-bg text-steel font-primary">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/jta-01" element={<JTA01 />} />
          {/* <Route path="/products" element={<Products />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* 404 MUST be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}
