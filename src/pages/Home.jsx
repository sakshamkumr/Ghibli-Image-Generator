import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
          Studio Ghibli Art Generator
        </h1>
        <p className="text-gray-600 mb-12 text-lg">
          Choose how you want to create your Ghibli-inspired masterpiece.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image to Image */}
          <div
            onClick={() => navigate("/image-to-image")}
            className="cursor-pointer p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Transform an Image
            </h2>
            <p className="text-gray-600">
              Upload your own image and convert it into Studio Ghibli art style.
            </p>
          </div>

          {/* Text to Image */}
          <div
            onClick={() => navigate("/text-to-image")}
            className="cursor-pointer p-8 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Create from Text
            </h2>
            <p className="text-gray-600">
              Describe a scene in words, and watch it become beautiful Ghibli art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
