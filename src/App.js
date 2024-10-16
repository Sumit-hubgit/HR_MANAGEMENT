import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom';
import Login from './login';
function App() {
  return (
    <>
   
    <Router>
  <Routes>
    <Route path="/" exact element={<Login />} />
  </Routes>
  <Routes>
    <Route path="/Header" exact element={<Header />} />
  </Routes>
</Router>
   </>
  );
}

export default App
