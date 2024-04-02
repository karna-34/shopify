import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route, useLocation} from "react-router-dom"
import SearchAppBar from './components/navbar/navbar';
import Shop from './shop/Shop';

import Product from './pages/Product';
import React, { useState } from 'react';
function App() {
  
  const [searchVal, setSearchVal]=useState("");


  return (
    <div className="App">
      <BrowserRouter>
      <SearchAppBar setSearchVal={setSearchVal} searchVal={searchVal}/>
      <Routes>
      <Route path='/' element={<Shop/> }/>
      <Route path='/furniture' element={<Product searchVal={searchVal}/>}/>
      <Route path='/electronic' element={<Product searchVal={searchVal}/>}/>
      <Route path='/sports' element={<Product searchVal={searchVal}/>}/>
      <Route path='/appliances' element={<Product searchVal={searchVal}/>}/>
      <Route path='/clothing' element={<Product searchVal={searchVal}/>}/>
      <Route path='/beauty' element={<Product searchVal={searchVal}/>}/>
      <Route path='/homedecor' element={<Product searchVal={searchVal}/>}/>
      <Route path='/outdoorgear' element={<Product searchVal={searchVal}/>}/>
      <Route path='/petsupplie' element={<Product searchVal={searchVal}/>}/>
      <Route path='/product' element={<Product searchVal={searchVal}/>}>
        <Route path=":productId" element={<Product/>}/><Route/>
        </Route>
      </Routes>
      </BrowserRouter>
      
      
      </div>
  );
}

export default App;
