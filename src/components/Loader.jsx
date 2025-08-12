import React from "react";

/**
 * Simple reusable loader component.
 * Usage: <Loader text="Generating..." />
 */
export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <svg
        className="animate-spin h-10 w-10 text-indigo-600 mb-3"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        />
      </svg>
      <div className="text-indigo-700 font-medium">{text}</div>
    </div>
  );
}
