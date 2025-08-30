// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import InvoicesPage from "./features/invoices/InvoicesPage";
import InvoiceSearchForm from "./features/invoices/components/InvoiceSearchForm";

const HomePage = () => {
  const handleSubmit = ({ startDate, endDate }) => {
    const query = new URLSearchParams({ startDate, endDate }).toString();
    window.location.href = `/invoices?${query}`;
  };

  return (
    <MainLayout>
      <InvoiceSearchForm onSubmit={handleSubmit} textColor="text-white" />
    </MainLayout>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
