import React from 'react';
import {Routes,BrowserRouter,Route} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
   <React.StrictMode>
    <Routes>
    <Route path='*' element={<App />} />
    </Routes>
  </React.StrictMode>
 </BrowserRouter>
);

