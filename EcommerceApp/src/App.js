import React, {useState} from "react"
import'./App.css';
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/NavBar/Navbar"
import Home from "./componentes/Home"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
  <>
  <Navbar/>
  <Home/>
  <ItemListContainer/>
</>
);
}




export default App