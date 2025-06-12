import React from 'react';

function PurchaseTradeEdit() {
  return (
    <div className="container-fluid py-4 px-5 bg-light" style={{ minHeight: '100vh' }}>
      <div className="row g-3 fs-5">
        <div className="col-md-3">
          <label className="form-label">Purchase Date</label>
          <input type="date" className="form-control" defaultValue="2025-01-28" />
        </div>
        <div className="col-md-3">
          <label className="form-label">CD</label>
          <input type="text" className="form-control" defaultValue="2" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Remark</label>
          <textarea className="form-control" placeholder="Enter Remarks" rows="2"></textarea>
        </div>
        <div className="col-md-3">
          <label className="form-label">Party Name</label>
          <select className="form-select">
            <option selected>SF</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Order Weight</label>
          <input type="text" className="form-control" value="34 quintal" readOnly />
        </div>
      </div>

      <hr className="my-4" />

      {/* Item Add Row */}
      <div className="row g-3 align-items-end fs-5">
        <div className="col-md-2">
          <select className="form-select">
            <option>--Select Item--</option>
            <option>Aata</option>
            <option>Maida</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>--Select Size--</option>
            <option>5 kg X 6</option>
            <option>30 kg</option>
          </select>
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" placeholder="Quantity" />
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" placeholder="Rate" />
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" placeholder="Amount" />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary w-100 fs-5">Add +</button>
        </div>
      </div>

      <hr className="my-4" />

      {/* Table */}
      <div className="table-responsive fs-5">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-primary">
            <tr>
              <th>S No.</th>
              <th>Item Type</th>
              <th>Bag Size</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td><td>Aata</td><td>5 kg X 6</td><td>40</td><td>1098</td><td>43920</td>
              <td>
                <button className="btn btn-info btn-sm me-1 fs-6"><i className="bi bi-pencil"></i></button>
                <button className="btn btn-success btn-sm me-1 fs-6">+</button>
                <button className="btn btn-warning btn-sm me-1 fs-6">-</button>
                <button className="btn btn-danger btn-sm fs-6">x</button>
              </td>
            </tr>
            <tr>
              <td>2</td><td>Aata</td><td>30 kg</td><td>40</td><td>1044</td><td>41760</td>
              <td>
                <button className="btn btn-info btn-sm me-1 fs-6"><i className="bi bi-pencil"></i></button>
                <button className="btn btn-success btn-sm me-1 fs-6">+</button>
                <button className="btn btn-warning btn-sm me-1 fs-6">-</button>
                <button className="btn btn-danger btn-sm fs-6">x</button>
              </td>
            </tr>
          </tbody>
          <tfoot className="table-light fw-bold">
            <tr>
              <td colSpan="3" className="text-end">TOTAL</td>
              <td>104</td>
              <td></td>
              <td>122060</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary me-2 fs-5">Update</button>
        <button className="btn btn-secondary fs-5">Cancel</button>
      </div>
    </div>
  );
}

export default PurchaseTradeEdit;
