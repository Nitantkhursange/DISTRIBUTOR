import React from 'react';
import {HashRouter, Routes, Route,} from 'react-router-dom'
import Sidebar from './pages/Sidebar';
import Purchase from './pages/Purchase';

function App() {
  return (
    <HashRouter>
  <Sidebar/>
      <Routes>
        {/* <Route path='/Sidebar' element={<Sidebar/>}/> */}
        <Route path='/' element={<Purchase/>}/>
        
      </Routes>
    </HashRouter>
  );
}

export default App;
