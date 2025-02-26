import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      {children}
    </div>
  );
};

export default Card;
