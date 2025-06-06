import React from "react";
import "./SaleAverageRate.css"; // optional custom styles

const data = [
  {
    date: "11/11/2023",
    party: "Chandra Kirana",
    item: "SF Aata",
    bagSize: "30kg",
    qty: 5,
    rate: 915,
    total: 5670,
    ratePerKg: 30.5,
  },
  {
    date: "11/11/2023",
    party: "Chandra Kirana",
    item: "SF Maida",
    bagSize: "0.5kg X 60",
    qty: 1,
    rate: 1095,
    total: 5670,
    ratePerKg: 36.5,
  },
  // Add more rows...
];

const App = () => {
  return (
    <div className="container-fluid p-4 bg-light">
      {/* Top Summary */}
      <div className="row mb-4 text-center">
        <div className="col-md-4 mb-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <small className="text-muted">AVERAGE PER KG</small>
            <h5 className="mb-0">32.81</h5>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <small className="text-muted">TOTAL QUANTITY</small>
            <h5 className="mb-0">24245.88 q</h5>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <small className="text-muted">TOTAL AMOUNT</small>
            <h5 className="mb-0">79541110.49</h5>
          </div>
        </div>
      </div>

      {/* Filter Inputs */}
      <div className="row mb-3">
        <div className="col-md-2 mb-2">
          <label className="form-label">FROM</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-2 mb-2">
          <label className="form-label">TO</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-2 mb-2">
          <label className="form-label">PARTY</label>
          <select className="form-select">
            <option>Select...</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <label className="form-label">ITEM</label>
          <select className="form-select">
            <option>All</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <label className="form-label">SIZE</label>
          <select className="form-select">
            <option>All</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <label className="form-label">STATUS</label>
          <select className="form-select">
            <option>All</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>S. NO.</th>
              <th>DATE</th>
              <th>PARTY NAME</th>
              <th>ITEM NAME</th>
              <th>BAG SIZE</th>
              <th>BAG QTY</th>
              <th>RATE</th>
              <th>TOTAL AMOUNT</th>
              <th>RATE/KG</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.date}</td>
                <td>{row.party}</td>
                <td>{row.item}</td>
                <td>{row.bagSize}</td>
                <td>{row.qty}</td>
                <td>{row.rate}</td>
                <td>{row.total}</td>
                <td>{row.ratePerKg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
