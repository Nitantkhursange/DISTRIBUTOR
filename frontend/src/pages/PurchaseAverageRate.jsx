import React from 'react';

function PurchaseAverageRate() {
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
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: '#f8f9fa',
        padding: '20px 20px', // padding thoda kam kiya
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Summary and Filters in maxWidth container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Top Summary */}
        <div className="row mb-4 text-center">
          {[
            { label: 'AVERAGE PER KG', value: '32.81' },
            { label: 'TOTAL QUANTITY', value: '24245.88 q' },
            { label: 'TOTAL AMOUNT', value: '79541110.49' },
          ].map(({ label, value }, idx) => (
            <div className="col-md-4 mb-3" key={idx}>
              <div className="bg-white p-4 rounded shadow-sm">
                <small className="text-muted">{label}</small>
                <h3 className="mb-0">{value}</h3>
              </div>
            </div>
          ))}
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
      </div>

      {/* Table Full Width */}
      <div
        className="table-responsive"
        style={{
          width: '100%',  // full width screen
          flexGrow: 1,
          overflowY: 'auto',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          backgroundColor: 'white',
          marginTop: '20px',
        }}
      >
        <table className="table table-bordered table-hover align-middle mb-0" style={{ minWidth: '1000px' }}>
          <thead className="table-light sticky-top" style={{ zIndex: 10 }}>
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
}

export default PurchaseAverageRate;
