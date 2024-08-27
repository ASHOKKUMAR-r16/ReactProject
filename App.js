import React from 'react';
import {  Route, Routes, BrowserRouter,Link } from 'react-router-dom';
import ArtworkList from './ArtworkList';
import ArtworkDetail from './ArtworkDetail';
import "./styles.css"
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
 
 <div className="container-fluid">
      <nav className="navbar1 navbar-expand-lg" >
        
         
          <Link className="navbar-brand" to="ArtworkList/">
          
            <span className='b' >MY BOOK OF ART</span>
          </Link>
 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
                <Link className="nav-link text-light" to="/ArtworkList">
                  
                </Link>
                
              </li>
      
              </ul>
              </div>
      </nav>
      </div>

 
     
 
      <Routes>
        <Route path="/" element={<ArtworkList />}  style={{ textDecoration: 'none' }} />
        <Route path="/ArtworkList" element={<ArtworkList />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
      </Routes>
   
   
 
 
    </BrowserRouter>
  );
};
 
export default App;