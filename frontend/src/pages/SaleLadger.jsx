import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaPrint } from "react-icons/fa";

const SalesDashboard = () => {
  const data = [
    {
      transactionDate: "28/01/2025",
      orderDate: "28/01/2025",
      employee: "Lalit Rathore",
      party: "Cash Sale",
      amount: 4280,
      mode: "Cash",
    },
    {
      transactionDate: "28/01/2025",
      orderDate: "28/01/2025",
      employee: "Lalit Rathore",
      party: "Cash Sale",
      amount: 1070,
      mode: "Cash",
    },
    {
      transactionDate: "28/01/2025",
      orderDate: "28/01/2025",
      employee: "Lalit Rathore",
      party: "Cash Sale",
      amount: 7070,
      mode: "Cash",
    },
    {
      transactionDate: "28/01/2025",
      orderDate: "28/01/2025",
      employee: "Lalit Rathore",
      party: "Cash Sale",
      amount: 990,
      mode: "Bank",
    },
    {
      transactionDate: "28/01/2025",
      orderDate: "28/01/2025",
      employee: "Lalit Rathore",
      party: "Cash Sale",
      amount: 57290,
      mode: "Cash",
    },
  ];

  return (
    <div className="container-fluid px-3 py-4" style={{ background: "#f8f9fa" }}>
      {/* Top Filters */}
      <div className="row g-3 align-items-end mb-4">
        <div className="col-lg-2 col-md-4 col-6">
          <label className="form-label fw-bold text-muted">TOTAL AMOUNT</label>
          <input type="text" className="form-control" value="77878363.81" disabled />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <label className="form-label fw-bold text-muted">FROM</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <label className="form-label fw-bold text-muted">TO</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <label className="form-label fw-bold text-muted">PARTY</label>
          <select className="form-select">
            <option>Select...</option>
          </select>
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <label className="form-label fw-bold text-muted">MODE</label>
          <select className="form-select">
            <option>All</option>
          </select>
        </div>
        <div className="col-lg-2 col-md-4 col-6">
          <label className="form-label fw-bold text-muted">EMPLOYEE</label>
          <select className="form-select">
            <option>All</option>
          </select>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mt-2">
          <input type="text" className="form-control" placeholder="Global Search" />
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive bg-white rounded shadow-sm">
        <table className="table table-bordered align-middle text-center mb-0">
          <thead className="bg-light text-uppercase fw-bold" style={{ backgroundColor: "#e8e9ff" }}>
            <tr>
              <th>S. NO.</th>
              <th>TRANSACTION DATE</th>
              <th>ORDER DATE</th>
              <th>EMPLOYEE NAME</th>
              <th>PARTY NAME</th>
              <th>AMOUNT</th>
              <th>MODE</th>
              <th>RECEIPT</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{entry.transactionDate}</td>
                <td>{entry.orderDate}</td>
                <td>{entry.employee}</td>
                <td>{entry.party}</td>
                <td>{entry.amount}</td>
                <td>{entry.mode}</td>
                <td>
                  <button className="btn btn-sm btn-info me-2 text-white">
                    <FaEye />
                  </button>
                  <button className="btn btn-sm btn-warning text-white">
                    <FaPrint />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesDashboard;
