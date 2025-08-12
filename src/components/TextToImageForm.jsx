import { useState } from "react";
import { generateFromText } from "../services/api";

export default function TextToImageForm({ onResult }) {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("anime");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt) return;
    setLoading(true);
    try {
      const url = await generateFromText(prompt, style);
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
        type="text"
        placeholder="Describe the scene..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="anime">Anime</option>
        <option value="general">General</option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        {loading ? "Generating..." : "Generate from Text"}
      </button>
    </form>
  );
}
