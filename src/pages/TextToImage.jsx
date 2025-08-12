import { useState } from "react";
import TextToImageForm from "../components/TextToImageForm";
import ImagePreview from "../components/ImagePreview";

export default function TextToImage() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Create from Text
          </h1>
          <TextToImageForm onResult={setResult} />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
          <ImagePreview original={null} result={result} />
        </div>
      </div>
    </div>
  );
}
