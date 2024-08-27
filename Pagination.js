import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"
 
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };
 
  return (
    <div className='bottom'>
      <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
  
    < div className='footer'>
    <div className='col-md-12 mt-4'>  
      </div>
    </div>
 
   
    <footer id='ba'>
   <div>
   <span style={{color:'white',fontSize:'40px', marginRight:'20px'}}><FaTwitterSquare /></span>
    <span style={{color:'white',fontSize:'40px', marginRight:'20px'}}><SiLinkedin /></span>
    <span style={{color:'white',fontSize:'40px',marginRight:'20px'}}><FaFacebook /></span>
    <span style={{color:'white',fontSize:'40px',marginRight:'20px'}}><FaInstagramSquare /></span>
   
<h5>created By ASHOK KUMAR</h5>
</div>
    </footer>
    </div>
 
    
    
  );
};
 
export default Pagination;
 
