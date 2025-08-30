// src/features/invoices/components/InvoiceTable.jsx
import React from "react";
import InvoiceTableRow from "./InvoiceTableRow";

const InvoiceTable = ({ invoices }) => {
  if (!invoices || invoices.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No hay facturas para mostrar.</p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border rounded-lg bg-white shadow-md">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-4 py-2">Factura</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Fecha</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Activo</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <InvoiceTableRow key={invoice.id} invoice={invoice} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
