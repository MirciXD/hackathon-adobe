import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Cart from "./Pages/Cart/Cart";
import Sidebar from './Components/Sidebar/Sidebar';
import { UserContext } from '../src/Pages/Menu/Menu';
import { useState } from 'react';
import Map from './Pages/Map/Map'
import Login from './Pages/Login/Login'

function App() {
  const [menuValue, setMenuValue] = useState([]);


  const updateMenuValue = (newValue) => {
    setMenuValue(newValue);
    console.log(menuValue)
  };

  return (
    <UserContext.Provider value={ menuValue }>
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route index element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu updateMenuValue={updateMenuValue} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
