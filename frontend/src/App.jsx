import React from 'react';
import {HashRouter, Routes, Route,} from 'react-router-dom'
import Sidebar from './pages/Sidebar';
import Purchase from './pages/Purchase';
import Sale from './pages/Sale';
import SaleAdd from './pages/SaleAdd';
import OD from './pages/OD';
import SaleLadger from './pages/SaleLadger';
import SaleAverageRate from './pages/SaleAverageRate';
function App() {
  return (
    <HashRouter>
       <div className="layout-container">
  <Sidebar/>
      <Routes>
        {/* <Route path='/Sidebar' element={<Sidebar/>}/> */}
        <Route path='/' element={<SaleAverageRate/>}/>
        <Route path='/Purchase' element={<Purchase/>}/>
        <Route path='/Sale' element={<Sale/>}/>
        <Route path='/SaleAdd' element={<SaleAdd/>}/>
        <Route path='/OD' element={<OD/>}/>
        <Route path='/SaleLadger' element={<SaleLadger/>}/>
        
      </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
