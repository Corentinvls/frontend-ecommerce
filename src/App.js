import logo from './logo.svg';
import './App.css';
import Test from "./components/ItemCard/ItemCard";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./View/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
     <Home/>

    </div>
  );
}

export default App;
