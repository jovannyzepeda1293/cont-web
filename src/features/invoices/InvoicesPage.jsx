import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InvoiceSearchForm from "./components/InvoiceSearchForm";
import InvoiceTable from "./components/InvoiceTable";
import Pagination from "../../shared/Pagination";
import { useInvoices } from "../../hooks/invoices/useInvoices";

const useQuery = () => new URLSearchParams(useLocation().search);

const InvoicesPage = () => {
  const query = useQuery();
  const startDateParam = query.get("startDate") || "";
  const endDateParam = query.get("endDate") || "";

  const [filters, setFilters] = useState({
    startDate: startDateParam,
    endDate: endDateParam,
  });

  const { invoices, meta, loading, error, fetchInvoices } = useInvoices({
    startDate: filters.startDate,
    endDate: filters.endDate,
  });

  const handleSearch = ({ startDate, endDate }) => {
    setFilters({ startDate, endDate });
    fetchInvoices({ startDate, endDate, page: 1 });
  };

  const handlePageChange = (newPage) => {
    fetchInvoices({
      page: newPage,
      startDate: filters.startDate,
      endDate: filters.endDate,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Consultar Facturas</h1>

        <InvoiceSearchForm
          initialStartDate={filters.startDate}
          initialEndDate={filters.endDate}
          onSubmit={handleSearch}
        />

        {loading && <p className="text-center mt-4 text-gray-500">Cargando...</p>}
        {error && <p className="text-center mt-4 text-red-500">{error}.</p>}

        {!loading && !error && <InvoiceTable invoices={invoices} />}

        {!loading && !error && (
          <Pagination
            currentPage={meta.page}
            totalPages={meta.pages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default InvoicesPage;
