"use client";
// error.tsx
import { FC } from "react";

interface ErrorProps {
  error?: Error;
  resetErrorBoundary?: () => void;
}

const error: FC<ErrorProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-700">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
        {error?.message && <p className="mt-4 text-lg">{error.message}</p>}
        {resetErrorBoundary && (
          <button
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
            onClick={resetErrorBoundary}>
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default error;
