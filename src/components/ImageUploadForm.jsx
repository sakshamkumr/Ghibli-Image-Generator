import { useState } from "react";
import { generateFromImage } from "../services/api";

export default function ImageUploadForm({ onResult, onOriginal }) {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !prompt) return;
    setLoading(true);
    onOriginal(URL.createObjectURL(file));
    try {
      const url = await generateFromImage(file, prompt);
      onResult(url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <input
        type="text"
        placeholder="Describe the scene..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {loading ? "Generating..." : "Generate from Image"}
      </button>
    </form>
  );
}
