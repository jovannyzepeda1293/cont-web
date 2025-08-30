// src/features/invoices/components/InvoiceTableRow.jsx
import React from "react";
import StatusBadge from "../../../shared/StatusBadge";
import { formatDate } from "../../../utils/formatDate";

const InvoiceTableRow = ({ invoice }) => {
  const { invoice_number, total, invoice_date, status, active } = invoice.attributes;

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-2 text-center">{invoice_number}</td>
      <td className="px-4 py-2 text-right">${parseFloat(total).toLocaleString()}</td>
      <td className="px-4 py-2 text-center">{formatDate(invoice_date)}</td>
      <td className="px-4 py-2 text-center">
        <StatusBadge type="status" value={status} />
      </td>
      <td className="px-4 py-2 text-center">
        <StatusBadge 
          type={active ? "active" : "inactive"} 
          value={active ? "Activo" : "Inactivo"} 
        />
      </td>
    </tr>
  );
};

export default InvoiceTableRow;
