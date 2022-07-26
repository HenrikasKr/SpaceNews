import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login/Login'
import AddNews from './components/AddNews/AddNews';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/addnews" element={<AddNews />}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

