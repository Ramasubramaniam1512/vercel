import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
    >
      {children}
    </button>
  );
};

export default Button;
