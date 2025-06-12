import React from 'react';
import {HashRouter, Routes, Route,} from 'react-router-dom'
import Sidebar from './pages/Sidebar';
import Purchase from './pages/Purchase';
import Sale from './pages/Sale';
import SaleAdd from './pages/SaleAdd';
import OD from './pages/OD';
import SaleLadger from './pages/SaleLadger';
import SaleAverageRate from './pages/SaleAverageRate';
import PurchaseLadger from './pages/PurchaseLadger';
import PurchaseAverageRate from './pages/PurchaseAverageRate';
import PurchaseAdd from './pages/PurchaseAdd';
import PurchaseTradeView from './pages/PurchaseTradeView';
import PurchaseTradeEdit from './pages/PurchaseTradeEdit';
function App() {
  return (
    <HashRouter>
       <div className="layout-container">
  <Sidebar/>
      <Routes>
        {/* <Route path='/Sidebar' element={<Sidebar/>}/> */}
        <Route path='/SaleAverageRate' element={<SaleAverageRate/>}/>
        <Route path='/' element={<Purchase/>}/>
        <Route path='/Sale' element={<Sale/>}/>
        <Route path='/SaleAdd' element={<SaleAdd/>}/>
        <Route path='/OD' element={<OD/>}/>
        <Route path='/SaleLadger' element={<SaleLadger/>}/>
        <Route path='/PurchaseLadger' element={<PurchaseLadger/>}/>
        <Route path='/PurchaseAverageRate' element={<PurchaseAverageRate/>}/>
        <Route path='/PurchaseAdd' element={<PurchaseAdd/>}/>
        <Route path='/PurchaseTradeView' element={<PurchaseTradeView/>}/>
        <Route path='/PurchaseTradeEdit' element={<PurchaseTradeEdit/>}/>
        
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
