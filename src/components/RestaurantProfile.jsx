import { FaWhatsapp, FaUtensils, FaReceipt, FaCalendarAlt, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './RestaurantProfile.css';

const RestaurantProfile = () => {
  const navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I would like to :');
    window.open(`https://wa.me/+212612455372?text=${message}`, '_blank');
  };

  return (
    <div className="restaurant-profile">
      <div className="hero-section">
        <div className="overlay"></div>
        <img 
          src="http://dishelinguide.com/wp-content/uploads/2017/05/DSC06535-e1495639819446-993x1024.jpg" 
          alt="Restaurant" 
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Restaurant Tolba</h1>
          <p className="tagline">Experience the finest dining in town</p>
          <div className="quick-info">
            <div className="social-icons">
              <a href="https://www.instagram.com/your-restaurant" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/your-restaurant" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.tiktok.com/@your-restaurant" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
                <FaTiktok />
              </a>
            </div>
            <div className="info-item">
              <FaClock />
              <span>Open: 12:00 PM - 10:00 PM</span>
            </div>
           
          </div>
        </div>
      </div>
      
      <div className="content-section">
        <div className="action-buttons">
          <button className="action-button menu" onClick={() => navigate('/menu')}>
            <div className="button-content">
              <FaUtensils className="icon" />
              <div className="button-text">
                <span className="primary-text">View Menu</span>
                <span className="secondary-text">Explore our delicious offerings</span>
              </div>
            </div>
          </button>
          
          <button className="action-button whatsapp" onClick={handleWhatsAppClick}>
            <div className="button-content">
              <FaWhatsapp className="icon" />
              <div className="button-text">
                <span className="primary-text">Order via WhatsApp</span>
                <span className="secondary-text">Quick and easy ordering</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProfile;
