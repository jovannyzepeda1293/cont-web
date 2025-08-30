// src/services/invoices/InvoicesService.js

class InvoicesService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
    this.token = import.meta.env.VITE_API_TOKEN;
  }

  async getInvoices({ startDate = "", endDate = "", page = 1 } = {}) {
    const query = new URLSearchParams();
    if (startDate) query.append("start_date", startDate);
    if (endDate) query.append("end_date", endDate);
    if (page) query.append("page", page);

    const url = `${this.baseUrl}/internal/v1/invoices?${query.toString()}`;
    let errorMessage = `Error al obtener facturas`;

    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Authorization": `${this.token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        try {
          const errorData = await res.json();
          if (errorData?.error) {
            errorMessage = errorData.error;
          }
        } catch (_) {}

        throw new Error(errorMessage);
      }

      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(errorMessage);
    }
  }
}

export default new InvoicesService();
