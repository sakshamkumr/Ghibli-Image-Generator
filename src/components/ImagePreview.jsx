export default function ImagePreview({ original, result, mode }) {
  return (
    <div
      className={`grid gap-4 mt-4 ${
        mode === "image-to-image" ? "grid-cols-2" : "grid-cols-1"
      }`}
    >
      {mode === "image-to-image" && (
        <div className="bg-gray-100 p-2 rounded flex items-center justify-center h-[300px]">
          {original ? (
            <img src={original} alt="Original" className="max-h-full" />
          ) : (
            <span className="text-gray-400">Original image preview</span>
          )}
        </div>
      )}

      <div className="bg-white p-2 rounded shadow flex items-center justify-center h-[300px]">
        {result ? (
          <img src={result} alt="Generated" className="max-h-full" />
        ) : (
          <span className="text-gray-400">Generated image preview</span>
        )}
      </div>
    </div>
  );
}
