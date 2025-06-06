import React from 'react'
import './SaleAdd.css';

function SaleAdd() {
  return (
    <div className='body1'>
       <div class="form-section">
    <div class="row g-4">
      <div class="col-md-4">
        <label class="form-label">Sale Date</label>
        <input type="date" class="form-control" value="2025-06-06"/>
      </div>
      <div class="col-md-4">
        <label class="form-label">Party Name</label>
        <select class="form-select">
          <option>Select...</option>
          <option>Megha Kachori</option>
          <option>Sourabh Jain</option>
        </select>
      </div>
      <div class="col-md-4">
        <label class="form-label">Order Weight</label>
        <input type="text" class="form-control bg-light" readonly value="0 quintal" />
      </div>

      <div class="col-md-12">
        <label class="form-label">Remark</label>
        <textarea class="form-control" rows="2" placeholder="Enter Remarks"></textarea>
      </div>
    </div>

    <div class="form-divider"></div>

    <div class="row g-3 align-items-end">
      <div class="col-md-2">
        <select class="form-select">
          <option>--Select Item--</option>
        </select>
      </div>
      <div class="col-md-2">
        <select class="form-select">
          <option>--Select Size--</option>
        </select>
      </div>
      <div class="col-md-2">
        <input type="number" class="form-control" placeholder="Quantity"/>
      </div>
      <div class="col-md-2">
        <input type="number" class="form-control" placeholder="Rate"/>
      </div>
      <div class="col-md-2">
        <input type="number" class="form-control" placeholder="Amount"/>
      </div>
      <div class="col-md-2 d-flex align-items-center gap-2">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="type" checked />
          <label class="form-check-label">Bag</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="type" />
          <label class="form-check-label">Pouch</label>
        </div>
      </div>
    </div>

    <div class="text-center mt-4">
      <button class="btn btn-purple">Add +</button>
    </div>

    <div class="form-divider"></div>

    <div class="table-responsive custom-table">
      <table class="table table-bordered text-center mb-0">
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
         </tbody>
        <tfoot>
          <tr>
            <td colspan="3">TOTAL</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="text-center mt-4">
      <button class="btn btn-purple me-2">Submit</button>
      <button class="btn btn-light-gray">Cancel</button>
    </div>
  </div>
    </div>
  )
}

export default SaleAdd
