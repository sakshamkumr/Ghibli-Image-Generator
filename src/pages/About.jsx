import React from "react";

export default function About() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-3">About this app</h2>

      <p className="text-gray-700 mb-4">
        This frontend connects to your Spring Boot backend to create Studio Ghibli–style images.
        Upload an image or provide a text prompt and the backend will return a PNG image which
        this UI displays.
      </p>

      <h3 className="font-semibold text-gray-800 mt-2">Backend endpoints used</h3>
      <ul className="list-disc list-inside text-gray-600 mt-2">
        <li><code>POST /api/v1/generate</code> — multipart/form-data (fields: <code>image</code>, <code>prompt</code>) → returns image/png bytes</li>
        <li><code>POST /api/v1/generate-from-text</code> — JSON: <code>{'{ prompt, style }'}</code> → returns image/png bytes</li>
      </ul>

      <p className="text-sm text-gray-500 mt-4">
        Note: if you navigate directly to <code>/result</code> (page refresh), any client-only state (like the File object) will be lost.
        For persistence across refreshes you can upload again or implement server-side/temp storage.
      </p>
    </div>
  );
}
