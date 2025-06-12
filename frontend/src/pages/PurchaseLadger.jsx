import React from 'react';

function PurchaseLadger() {
  return (
       <div className="container-fluid px-3 py-4" style={{ background: "#f8f9fa" }}>
  {/* Filters Section */}
  <div className="row g-3 align-items-end mb-4">
    
    {/* TOTAL AMOUNT */}
    <div className="col-lg-2 col-md-4 col-6">
      <label className="form-label fw-bold text-muted">TOTAL AMOUNT</label>
      <input type="text" className="form-control" value="77878363.81" disabled />
    </div>

    {/* FROM */}
    <div className="col-lg-2 col-md-4 col-6">
      <label className="form-label fw-bold text-muted">FROM</label>
      <input type="date" className="form-control" />
    </div>

    {/* TO */}
    <div className="col-lg-2 col-md-4 col-6">
      <label className="form-label fw-bold text-muted">TO</label>
      <input type="date" className="form-control" />
    </div>

    {/* PARTY */}
    <div className="col-lg-2 col-md-4 col-6">
      <label className="form-label fw-bold text-muted">PARTY</label>
      <select className="form-select">
        <option>Select...</option>
      </select>
    </div>

    {/* MODE */}
    <div className="col-lg-2 col-md-4 col-6">
      <label className="form-label fw-bold text-muted">MODE</label>
      <select className="form-select">
        <option>All</option>
      </select>
    </div>

    {/* EMPLOYEE */}
    <div className="col-lg-2 col-md-4 col-6">
      <label className="form-label fw-bold text-muted">EMPLOYEE</label>
      <select className="form-select">
        <option>All</option>
      </select>
    </div>

    {/* GLOBAL SEARCH */}
    <div className="col-lg-3 col-md-6 col-12">
      <label className="form-label fw-bold text-muted">SEARCH</label>
      <input type="text" className="form-control" placeholder="Global Search" />
    </div>
  </div>

  {/* Table Section */}
  <div className="table-responsive bg-white rounded shadow-sm">
    <table className="table table-bordered align-middle text-center mb-0">
      <thead className="text-uppercase fw-bold" style={{ backgroundColor: "#e8e9ff" }}>
        <tr>
          <th>S. NO.</th>
          <th>TRANSACTION DATE</th>
          <th>ORDER DATE</th>
          <th>EMPLOYEE NAME</th>
          <th>PARTY NAME</th>
          <th>AMOUNT</th>
          <th>MODE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>22</td>
          <td>22</td>
          <td>vinay yadav</td>
          <td>pta nahi</td>
          <td>0</td>
          <td>phone pay</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  );
}

export default PurchaseLadger;
