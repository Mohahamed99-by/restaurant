import { FaWhatsapp, FaUtensils, FaReceipt, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './RestaurantProfile.css';

const RestaurantProfile = () => {
  const navigate = useNavigate();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+212612455372', '_blank');
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
          <h1>Your Restaurant Name</h1>
          <p className="tagline">Experience the finest dining in town</p>
          <div className="quick-info">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>123 Gourmet Street, Foodville</span>
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
          
          <button className="action-button invoice" onClick={() => navigate('/invoice')}>
            <div className="button-content">
              <FaReceipt className="icon" />
              <div className="button-text">
                <span className="primary-text">View Invoice</span>
                <span className="secondary-text">Check your orders</span>
              </div>
            </div>
          </button>
          
          <button className="action-button reserve" onClick={() => navigate('/reserve')}>
            <div className="button-content">
              <FaCalendarAlt className="icon" />
              <div className="button-text">
                <span className="primary-text">Reserve Table</span>
                <span className="secondary-text">Book your special evening</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantProfile;
