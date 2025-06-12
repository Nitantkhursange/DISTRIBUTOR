import React, { useEffect, useState } from "react";
// import Sidebar from './Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../assets/BaseUrl";

function Purchase() {
  const navigate = useNavigate();
  const localData1 = sessionStorage.getItem("purchasetradedatalocal");

    const parseData1 = localData1 ? JSON.parse(localData1) : [];

  const [purchaseData1, setPurchaseData1] = useState(parseData1);

const getPuchaseData = (x) => {
    axios
      .get(baseUrl + "purchase?paymentStatus="+x)
      .then((res) => {
        const data = res.data.reverse();
        setPurchaseData1(data);
        sessionStorage.setItem("purchasetradedatalocal", JSON.stringify(data));
      })
      .then(() => {
        setPageLoaded(true);
      });
  };
useEffect(() => {
    getPuchaseData(status);
  }, []);
// const deleteFn = async (x) => {
//     axios.delete(baseUrl + "purchase/" + x).then((res) => getPuchaseData());

  const localFromDate = sessionStorage.getItem("purchasefromdate")
    ? sessionStorage.getItem("purchasefromdate")
    : "";

  const [fromDate, setFromDate] = useState(localFromDate);

  const ddmmyy = (x) => {
    if (x) {
      const date = x.split("-");
      const dd = date[2];
      const mm = date[1];
      const yy = date[0];
      const final = `${dd}/${mm}/${yy}`;
      return final;
    }
  };


    const list = purchaseData1;


  const x = new Date(fromDate);



  const list1 =
    fromDate !== "" ? list.filter((i) => new Date(i.date) >= x) : list;

  const reset = () => {
    sessionStorage.removeItem("purchasefromdate");
    setFromDate("");
  };

  const totalWeight = (x) => {
    const total = x
      .map((i) => i.size * (i.qty || 1) * i.quantity)
      .reduce((a, b) => a + b, 0);
    return total / 100;
  };

  // const totalWeight = (x) => {
  //   const total = x
  //     .map((i) => i.size * (i.qty || 1) * i.quantity)
  //     .reduce((a, b) => a + b, 0);
  //   return total / 100;
  // };

  const totalAmountPayable = (x, y) => {
    const total = x
      ?.map((i) => +i.quantity * i.rate)
      .reduce((a, b) => a + b, 0);
    const cd = y || 0;
    const ecd = 100 - cd;
    const final = Math.round((total * ecd) / 100);
    return final;
  };

  const amtRecived = (x) => {
    const total = x.map((i) => +i.amount).reduce((a, b) => a + b, 0);
    return total;
  };

  const [purchaseData, setPurchaseData] = useState([]);
  const getPurchaseData = () => {
    axios
      .get("http://127.0.0.1:8000/distributordrf/apis/v1/" + "purchase")
      .then((res) => setPurchaseData(res.data));
  };

  const deleteFn = (x) => {
    axios.delete(baseUrl + "purchase/" + x).then((res) => getPurchaseData());
  };

  useEffect(() => {
    getPurchaseData();
  }, []);

  const [partyData, setPartyData] = useState([]);
  const getPartyData = () => {
    axios.get(baseUrl + "party").then((res) => setPartyData(res.data));
  };
  useEffect(() => {
    getPartyData();
  }, []);

  return (
    <div className="body p-5 w-100">
      <div className="d-flex gap-3 mb-4">
        <button
          onClick={() => navigate("/PurchaseAdd")}
          className="btn btn-primary px-4"
        >
          ➕ Add Purchase
        </button>
        <button className="btn btn-secondary px-4">🔁 Reset</button>
      </div>
      <div className="row g-3 mb-4 w-100">
        <div className="col-md-3">
          <div className="summary-box">
            TOTAL BAG <br />
            <strong></strong>
          </div>
        </div>
        <div className="col-md-3">
          <div className="summary-box">TOTAL QUANTITY</div>
        </div>
        <div className="col-md-3">
          <div className="summary-box">TOTAL AMOUNTS</div>
        </div>
        <div className="col-md-3">
          <div className="summary-box">REMAINING AMOUNT</div>
        </div>
      </div>

      <div className="card-wrapper mb-2">
        <div className="row g-3">
          <div className="col-md-2">
            <input
              value={fromDate}
              onChange={(e) => {
                sessionStorage.setItem("purchasefromdate", e.target, value);
                setFromDate(e.target.value);
              }}
              type="date"
              className="form-control"
              placeholder="From"
            />
          </div>
          <div className="col-md-2">
            <input type="date" className="form-control" placeholder="To" />
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>All Employees</option>
              <option>Lalit Rathore</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>Pending</option>
              <option>Paid</option>
            </select>
          </div>
          <div className="col-md-2">
            <select className="form-select">
              <option>Select Party</option>
              <option>Megha Kachori</option>
            </select>
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="table-responsive">
          <table className="table table-bordered text-center align-middle">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Date</th>
                <th>Party Name</th>
                <th>Bag Quantity</th>
                <th>Weight</th>
                <th>Payable Amount</th>
                <th>Remaining Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list1.map((i, n) => (
                <tr className="highlight-row">
                  <td>{n + 1}</td>
                  <td>{i.date?.split("-").reverse().join("/")}</td>
                  <td>
                    <strong>
                      {partyData.find((j) => j.id == i.partyName)?.partyName}
                    </strong>
                  </td>
                  <td>
                    {JSON.stringify(
                      i.itemList
                        .map((j) => +j.quantity)
                        .reduce((a, b) => +a + +b)
                    )}
                  </td>
                  <td>{totalWeight(i.itemList)}quintal</td>
                  <td>{totalAmountPayable(i.itemList, i.cashDiscount)}</td>
                  <td>
                    {" "}
                    {totalAmountPayable(i.itemList, i.cashDiscount) -
                      amtRecived(i.amtR)}
                  </td>
                  <td className="status-pending">{i.paymentStatus}</td>
                  <td>
                    <button
                      onClick={() => {
                        sessionStorage.setItem(
                          "PurchaseData",
                          JSON.stringify(i)
                        );

                        navigate("/PurchaseTradeView");
                      }}
                      className="btn btn-sm btn-outline-primary me-1"
                    >
                      👁️
                    </button>
                    <button
                      onClick={() => {
                        sessionStorage.setItem(
                          "PurchaseData",
                          JSON.stringify(i)
                        );
                        sessionStorage.setItem("purchaseid", i.id);
                        navigate("/PurchaseTradeEdit");
                      }}
                      className="btn btn-sm btn-outline-success me-1"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("are you sure")) deleteFn(i.id);
                      }}
                      className="btn btn-sm btn-outline-danger"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
