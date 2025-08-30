// src/hooks/invoices/useInvoices.js
import { useState, useEffect } from "react";
import InvoicesService from "../../services/invoices/InvoicesService";

export const useInvoices = ({ startDate = "", endDate = "" } = {}) => {
  const [invoices, setInvoices] = useState([]);
  const [meta, setMeta] = useState({ page: 1, count: 0, pages: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchInvoices = async ({ startDate: s = startDate, endDate: e = endDate, page = 1 } = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await InvoicesService.getInvoices({ startDate: s, endDate: e, page });
      setInvoices(response.data);
      setMeta(response.meta);
    } catch (err) {
      setError(err.message || "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices({ startDate, endDate, page: 1 });
  }, []);

  return { invoices, meta, loading, error, fetchInvoices };
};
