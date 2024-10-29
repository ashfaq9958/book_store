import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-blue-500 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-black transition duration-300"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFound;
