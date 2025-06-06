import React from 'react';
import './OD.css';

const data = [
  { party: "AFSAR TEA", bags: 11, weight: "4.30 quintal", amount: 16100, days: 143 },
  { party: "Aap Ki Dukan Naharsayyed road", bags: 6, weight: "2.20 quintal", amount: 7740, days: 154 },
  { party: "Aarif Bhai Tiffin", bags: 15, weight: "4.48 quintal", amount: 29310, days: 133 },
  { party: "Aashirwad Kirana Sneh Nagar", bags: 5, weight: "1.10 quintal", amount: 2810, days: 138 },
  { party: "Aayush Shree Ram Oil Mill", bags: 17, weight: "2.55 quintal", amount: 47020, days: 555 },
  { party: "Advance Kirana Abhinandan", bags: 13, weight: "3.12 quintal", amount: 16064, days: 138 },
  { party: "Agarwal Traders Dashrath Nagar", bags: 1, weight: "0.30 quintal", amount: 1150, days: 137 },
  { party: "Agrawal Restaurant Mandi", bags: 1, weight: "0.50 quintal", amount: 1750, days: 181 },
  { party: "Agrawal Super Khanpura", bags: 20, weight: "6.00 quintal", amount: 22800, days: 138 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Summary Boxes */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="summary-box border border-info rounded bg-white text-center p-3 shadow-sm">
            <div className="text-muted small fw-semibold">TOTAL AMOUNT</div>
            <div className="fs-5 fw-bold text-primary">1664138</div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="summary-box border border-success rounded bg-white text-center p-3 shadow-sm">
            <div className="text-muted small fw-semibold">GREEN AMOUNT</div>
            <div className="fs-5 fw-bold text-success">0</div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="summary-box border border-warning rounded bg-white text-center p-3 shadow-sm">
            <div className="text-muted small fw-semibold">YELLOW AMOUNT</div>
            <div className="fs-5 fw-bold text-warning">0</div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="summary-box border border-danger rounded bg-white text-center p-3 shadow-sm">
            <div className="text-muted small fw-semibold">RED AMOUNT</div>
            <div className="fs-5 fw-bold text-danger">1664138</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="row g-3 mb-3">
        <div className="col-md-4">
          <label className="form-label fw-semibold">Party</label>
          <select className="form-select">
            <option>Select…</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold">Color</label>
          <select className="form-select">
            <option>All</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-semibold">Search</label>
          <input type="text" className="form-control" placeholder="Search party or details..." />
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive bg-white rounded shadow-sm p-3">
        <table className="table table-bordered text-center">
          <thead className="table-primary">
            <tr>
              <th>S. NO.</th>
              <th>PARTY NAME</th>
              <th>BAG QUANTITY</th>
              <th>WEIGHT</th>
              <th>REMAINING AMOUNT</th>
              <th>DUE BY</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ backgroundColor: '#ffe5e5' }}>
                <td>{index + 1}</td>
                <td className="text-start">{row.party}</td>
                <td>{row.bags}</td>
                <td>{row.weight}</td>
                <td>{row.amount}</td>
                <td>{row.days} days</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
