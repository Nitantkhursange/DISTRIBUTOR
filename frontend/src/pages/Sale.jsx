import React from 'react'
import './Sale.css';

function Sale() {
  return (
    <div  class="p-4  body">
      

  <div class="d-flex gap-3 mb-4">
    <button class="btn btn-primary px-4">➕ Add Sale</button>
    <button class="btn btn-secondary px-4">🔁 Reset</button>
  </div>

  <div class="row g-3 mb-4">
    <div class="col-md-3">
      <div class="summary-box">
        TOTAL BAG<br />
        <strong>1735 bags 1 pouch</strong>
      </div>
    </div>
    <div class="col-md-3">
      <div class="summary-box">
        TOTAL QUANTITY<br />
        <strong>529.8072 quintal</strong>
      </div>
    </div>
    <div class="col-md-3">
      <div class="summary-box">
        TOTAL AMOUNT<br />
        <strong>₹21,19,478.00</strong>
      </div>
    </div>
    <div class="col-md-3">
      <div class="summary-box">
        REMAINING AMOUNT<br />
        <strong>₹16,64,138.00</strong>
      </div>
    </div>
  </div>

  <div class="card-wrapper mb-4">
    <div class="row g-3 filters">
      <div class="col-md-2">
        <input type="date" class="form-control" placeholder="From" />
      </div>
      <div class="col-md-2">
        <input type="date" class="form-control" placeholder="To" />
      </div>
      <div class="col-md-2">
        <select class="form-select">
          <option selected>All Employees</option>
          <option>Lalit Rathore</option>
        </select>
      </div>
      <div class="col-md-2">
        <select class="form-select">
          <option selected>Pending</option>
          <option>Paid</option>
        </select>
      </div>
      <div class="col-md-2">
        <select class="form-select">
          <option selected>Select Party</option>
          <option>Megha Kachori</option>
        </select>
      </div>
      <div class="col-md-2">
        <input type="text" class="form-control" placeholder="🔍 Search" />
      </div>
    </div>
  </div>

 
  <div class="card-wrapper">
    <div class="table-responsive">
      <table class="table table-bordered text-center align-middle">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Date</th>
            <th>Party Name</th>
            <th>Employee Name</th>
            <th>Bag Quantity</th>
            <th>Weight</th>
            <th>Amount</th>
            <th>Remaining</th>
            <th>Remark</th>
            <th>Status</th>
            <th>Due By</th>
          </tr>
        </thead>
        <tbody>
          <tr class="highlight-row">
            <td>1</td>
            <td>28/01/2025</td>
            <td>Megha Kachori<br/><small>Sanjeet Naka</small></td>
            <td><strong>LALIT RATHORE</strong></td>
            <td>1 bags 0 pouch</td>
            <td>0.148 quintal</td>
            <td>₹2100.00</td>
            <td>₹2100.00</td>
            <td>–</td>
            <td class="status-pending">Pending</td>
            <td>130</td>
          </tr>
          <tr class="highlight-row">
            <td>2</td>
            <td>28/01/2025</td>
            <td>Sourabh Jain<br/><small>Anant Sales Bada Chowk</small></td>
            <td><strong>LALIT RATHORE</strong></td>
            <td>1 bags 0 pouch</td>
            <td>0.3 quintal</td>
            <td>₹1110.00</td>
            <td>₹1110.00</td>
            <td>–</td>
            <td class="status-pending">Pending</td>
            <td>130</td>
          </tr>
          <tr class="highlight-row">
            <td>3</td>
            <td>28/01/2025</td>
            <td>Nizami Super<br/><small>Khanpura</small></td>
            <td><strong>LALIT RATHORE</strong></td>
            <td>3 bags 0 pouch</td>
            <td>0.75 quintal</td>
            <td>₹4140.00</td>
            <td>₹4140.00</td>
            <td>–</td>
            <td class="status-pending">Pending</td>
            <td>130</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
     </div>
  )
}

export default Sale
