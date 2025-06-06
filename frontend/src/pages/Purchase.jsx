import React from 'react';
// import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Purchase() {
  return (
    <div>
       
         <div className="container mt-5">
        
        
      {/* Buttons */}
      <div className="mb-3 d-flex gap-2">
        <button className="btn btn-primary">Add Purchase</button>
        <button className="btn btn-secondary">Reset</button>
      </div>

      {/* Summary Section */}
      <div className="row bg-white p-3 rounded mb-3">
        <div className="col-md-3">
          <label className="form-label">Total Bag</label>
          <input type="text" className="form-control" value="2823" readOnly />
        </div>
        <div className="col-md-3">
          <label className="form-label">Total Quantity</label>
          <input type="text" className="form-control" value="649.436 quintal" readOnly />
        </div>
        <div className="col-md-3">
          <label className="form-label">Total Amount</label>
          <input type="text" className="form-control" value="3938828" readOnly />
        </div>
        <div className="col-md-3">
          <label className="form-label">Remaining Amount</label>
          <input type="text" className="form-control" value="3540717" readOnly />
        </div>
      </div>

      {/* Filters Section */}
      <div className="row bg-white p-3 rounded mb-3">
        <div className="col-md-2">
          <label className="form-label">From</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-2">
          <label className="form-label">To</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-md-4">
          <label className="form-label">Party</label>
          <select className="form-select">
            <option>Select...</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Status</label>
          <select className="form-select">
            <option>Pending</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>S. No.</th>
              <th>Date</th>
              <th>Party Name</th>
              <th>Bag Quantity</th>
              <th>Weight</th>
              <th>Payable Amount</th>
              <th>Remaining Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
              <tr >
                <td>1</td>
                <td>1-2-200</td>
                <td>nkk</td>
                <td>411</td>
                <td>20</td>
                <td>711</td>
                <td>dfef</td>
                <td>fff</td>
                <td>
                  <i className="bi bi-eye mx-1 text-primary" role="button"></i>
                  <i className="bi bi-pencil-square mx-1 text-warning" role="button"></i>
                  <i className="bi bi-trash mx-1 text-danger" role="button"></i>
                </td>
              </tr>
         
          </tbody>
        </table>
      </div>
    </div>
      
    </div>
  );
}

export default Purchase;

