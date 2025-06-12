import React from 'react';

function PurchaseTradeView() {
  return (
    <div>
      <div class="container py-4">
  <div class="row g-3">
    <div class="col-md-3">
      <label class="form-label">Purchase Date</label>
      <input type="text" class="form-control" value="28-01-2025" readonly />
    </div>
    <div class="col-md-3">
      <label class="form-label">CD</label>
      <input type="text" class="form-control" value="2" readonly />
    </div>
    <div class="col-md-3">
      <label class="form-label">Payable Amount</label>
      <input type="text" class="form-control" value="119619" readonly />
    </div>
    <div class="col-md-3">
      <label class="form-label">Payment Status</label>
      <input type="text" class="form-control" value="Pending" readonly />
    </div>

    <div class="col-md-3">
      <label class="form-label">Party Name</label>
      <input type="text" class="form-control" value="SF" readonly />
    </div>
    <div class="col-md-3">
      <label class="form-label">Order Weight</label>
      <input type="text" class="form-control" value="34 quintal" readonly />
    </div>
    <div class="col-md-3">
      <label class="form-label">Remaining Amount</label>
      <input type="text" class="form-control" value="119619" readonly />
    </div>
    <div class="col-md-3">
      <label class="form-label">Remark</label>
      <textarea class="form-control" rows="1" readonly></textarea>
    </div>
  </div>

  <hr class="my-4" />

  <div class="table-responsive">
    <table class="table table-bordered text-center align-middle">
      <thead class="table-primary">
        <tr>
          <th>S No.</th>
          <th>Item Type</th>
          <th>Bag Size</th>
          <th>Quantity</th>
          <th>Weight</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Aata</td><td>5 kg X 6</td><td>40</td><td>12 quintal</td><td>1098</td><td>43920</td></tr>
        <tr><td>2</td><td>Aata</td><td>30 kg</td><td>40</td><td>12 quintal</td><td>1044</td><td>41760</td></tr>
        <tr><td>3</td><td>Aata</td><td>10 kg X 3</td><td>10</td><td>3 quintal</td><td>1098</td><td>10980</td></tr>
        <tr><td>4</td><td>Maida</td><td>50 kg</td><td>12</td><td>6 quintal</td><td>1800</td><td>21600</td></tr>
        <tr><td>5</td><td>Rawa</td><td>50 kg</td><td>2</td><td>1 quintal</td><td>1900</td><td>3800</td></tr>
      </tbody>
      <tfoot class="table-light fw-bold">
        <tr>
          <td colspan="3" class="text-end">TOTAL</td>
          <td>104</td>
          <td>34 QUINTAL</td>
          <td></td>
          <td>122060</td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="d-flex justify-content-between align-items-center my-4">
    <h5 class="m-0">Transactions</h5>
    <button class="btn btn-primary">Add Transactions</button>
  </div>

  
  <div class="table-responsive">
    <table class="table table-bordered text-center">
      <thead class="table-primary">
        <tr>
          <th>S No.</th>
          <th>Date</th>
          <th>Employee Name</th>
          <th>Amount Received</th>
          <th>Mode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="6">0</td>
        </tr>
      </tbody>
    </table>
  </div>

 
  <div class="text-center">
    <button class="btn btn-secondary">Close</button>
  </div>
</div>

    </div>
  );
}

export default PurchaseTradeView;

