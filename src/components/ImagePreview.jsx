export default function ImagePreview({ original, result, mode }) {
  return (
    <div
      className={`grid gap-4 mt-4 ${
        mode === "image-to-image" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
      }`}
    >
      {mode === "image-to-image" && (
        <div className="bg-gray-100 p-2 rounded flex items-center justify-center h-[250px] md:h-[300px]">
          {original ? (
            <img
              src={original}
              alt="Original"
              className="max-h-full max-w-full object-contain rounded"
            />
          ) : (
            <span className="text-gray-400">Original image preview</span>
          )}
        </div>
      )}

      <div className="bg-white p-2 rounded shadow flex flex-col items-center justify-center h-[250px] md:h-[300px] relative">
        {result ? (
          <>
            <img
              src={result}
              alt="Generated"
              className="max-h-full max-w-full object-contain rounded"
            />
            <a
              href={result}
              download="generated-image.png"
              className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600"
            >
              Download
            </a>
          </>
        ) : (
          <span className="text-gray-400">Generated image preview</span>
        )}
      </div>
    </div>
  );
}
