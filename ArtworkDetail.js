import  React, { useEffect, useState } from 'react';
import { SiLinkedin } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchArtworkDetails } from './artworkService';
import CommentsForm from './CommentsForm';
import "./styles.css"
 
 
const dummyImageUrl = 'https://via.placeholder.com/843x843.png?text=Image+Not+Available';
 
 
const handleImgError = (event) => {
  event.target.src = dummyImageUrl;
};
 
const ArtworkDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const previousPage = location.state?.from || '/';
 
  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchArtworkDetails(id);
        setArtwork(data.data);
      } catch (error) {
        setError('Error fetching artwork details');
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!artwork) return <p>No artwork found</p>;
 
  return (
    <div className='articletop'>
      <h1>{artwork.title}</h1>
      
 
      <img
        src={
          artwork?.image_id
            ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
            : dummyImageUrl
        }
        
        
        alt={artwork?.title || 'Artwork image'}
        
        className="descriptionImage "style={{width:"350px",height:"400px", borderRadius:"20px" }}
        onError={handleImgError}
      />
      
     
      <p><strong>Artist:</strong> {artwork.artist_display}</p>
      <p><strong>Date:</strong> {artwork.date_display}</p>
      <p><strong>Reference Number:</strong> {artwork.main_reference_number}</p>
      <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
      <Link to={previousPage} className='link1'><strong>Back to Gallery</strong></Link>
      <CommentsForm />
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
 
export default ArtworkDetail;
 
 
 