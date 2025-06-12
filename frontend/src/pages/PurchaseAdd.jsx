import React from 'react';

function PurchaseAdd() {
  return (
    <div className="container-fluid px-4 py-3 bg-light min-vh-100">
      <div className="form-section">
        {/* Row 1 */}
        <div className="row g-4 justify-content-around">
          <div className="col-md-4">
            <label className="form-label">Purchase Date</label>
            <input type="date" className="form-control" defaultValue="2025-06-06" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Party Name</label>
            <select className="form-select">
              <option>Select...</option>
              <option>Megha Kachori</option>
              <option>Sourabh Jain</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row g-4 mt-2 justify-content-around">
          <div className="col-md-4">
            <label className="form-label">CD</label>
            <input type="text" className="form-control bg-light" readOnly value="0 quintal" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Order Weight</label>
            <input type="text" className="form-control bg-light" readOnly value="0 quintal" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row g-4 mt-2">
          <div className="col-md-12">
            <label className="form-label">Remark</label>
            <textarea className="form-control" rows="2" placeholder="Enter Remarks"></textarea>
          </div>
        </div>

        <hr className="my-4" />

        {/* Item Entry Row */}
        <div className="row g-3 justify-content-around">
          <div className="col-md-3">
            <select className="form-select">
              <option>--Select Item--</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>--Select Size--</option>
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
          <div className="col-md-2 d-flex align-items-center gap-2">
            {/* Reserved space for future add/delete icons */}
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary">Add +</button>
        </div>

        <hr className="my-4" />

        {/* Table Section */}
        <div className="table-responsive">
          <table className="table table-bordered text-center mb-0">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Item Type</th>
                <th>Bag Size</th>
                <th>Quantity</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Table rows will be dynamically inserted here */}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">TOTAL</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-success me-2">Submit</button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseAdd;
