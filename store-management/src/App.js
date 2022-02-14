import React from 'react';
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './components/Login';
import Logout from "./components/Logout";
import Admin from './components/Admin/Admin';
import AddSalesMan from './components/Admin/AddSalesMan';

import CreateOrders from './components/SalesExecutives/CreateOrders';
import CreateOrder from "./components/Admin/CreateOrder"
import Order from './components/Admin/Order';
import SalesOrder from './components/SalesExecutives/SalesOrder';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route index element={<Login/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/addsalesman" element={<AddSalesMan/>}></Route>
     <Route path = "/createorder" element={<CreateOrder/>}/>
        <Route path="/salescreateorder" element={<CreateOrders/>}></Route>
        <Route path = "/orders" element={<Order/>}/>
        <Route path="salesorder"element={<SalesOrder/>}></Route>
     
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App