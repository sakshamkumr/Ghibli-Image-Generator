import { useState } from "react";
import ImageUploadForm from "../components/ImageUploadForm";
import ImagePreview from "../components/ImagePreview";

export default function ImageToImage() {
  const [original, setOriginal] = useState(null);
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Transform an Image
          </h1>
          <ImageUploadForm onResult={setResult} onOriginal={setOriginal} />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
        <ImagePreview 
            original={original} 
            result={result} 
            mode="image-to-image" 
        />

        </div>
      </div>
    </div>
  );
}
