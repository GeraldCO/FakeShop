import logo from './logo.svg';
import './App.css';
import {Outlet} from "react-router";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import { useState, useEffect } from 'react';

const App = () => {
  
  return (
        <div className="App">
            <NavBar />
            
            <Outlet />
        </div>
    );
}

export default App;