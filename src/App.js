
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Forside from "./pages/Forside";
import React from "react";
import "./App.css";
import "./index.css";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
     <Routes>
      <Route path="/" element={<Forside/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
