// src/shared/InvoiceSearchForm.jsx
import React, { useState } from "react";

const InvoiceSearchForm = ({
  initialStartDate = "",
  initialEndDate = "",
  textColor="text-gray-700",
  onSubmit
}) => {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ startDate, endDate });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-4 items-end max-w-xl mx-auto"
    >
      <div className="flex flex-col flex-1">
        <label htmlFor="startDate" className={`${textColor} font-medium mb-1`}>
          Fecha inicio
        </label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>

      <div className="flex flex-col flex-1">
        <label htmlFor="endDate" className={`${textColor} font-medium mb-1`}>
          Fecha fin
        </label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-purple-400 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={!startDate || !endDate}
        className={`px-6 py-3 rounded-md font-semibold transition-colors self-start md:self-auto 
          ${!startDate || !endDate 
            ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
            : "bg-purple-600 hover:bg-purple-700 text-white"}`}
      >
        Consultar
      </button>

    </form>
  );
};

export default InvoiceSearchForm;
