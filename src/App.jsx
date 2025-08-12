import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Result from "./pages/Result";
import About from "./pages/About";
import TextToImage from "./pages/TextToImage";  // ✅ new import
import ImageToImage from "./pages/ImageToImage"; // ✅ new import

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100">
        <Header />

        {/* Unified content wrapper */}
        <div className="max-w-6xl mx-auto px-4">
          <nav className="py-3 flex justify-end gap-4">
            <Link to="/" className="text-indigo-600 hover:underline">Home</Link>
            <Link to="/about" className="text-indigo-600 hover:underline">About</Link>
          </nav>

          <main className="pb-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/image-to-image" element={<ImageToImage />} /> {/* ✅ */}
              <Route path="/text-to-image" element={<TextToImage />} />   {/* ✅ */}
              <Route path="/result" element={<Result />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
