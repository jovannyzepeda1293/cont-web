// src/shared/StatusBadge.jsx
import React from "react";

const StatusBadge = ({ value }) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-800`}
    >
      {value}
    </span> 
  );
};

export default StatusBadge;
