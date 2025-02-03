import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { MapPin, Clock, Utensils, Coffee, Pizza, Star, QrCode } from 'lucide-react';
import './QRCodePage.css';
import { BsTiktok } from 'react-icons/bs';
import { FaBurger } from 'react-icons/fa6';

const QRCodePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const restaurantUrl = window.location.origin;

  return (
    <div className="qr-page">
      <div
        className="qr-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="gradient-background" />

        <div className="content">
          <div className="header">
            <div className="restaurant-info">
              <h1 className="restaurant-name">Restaurant Tolba</h1>
              <div className="rating">
                <Star className="icon star" fill="currentColor" />
                <span>4.8</span>
                <span className="reviews">(200+ Reviews)</span>
              </div>
              <p className="description">
                Experience authentic Mediterranean cuisine in a cozy atmosphere
              </p>
            </div>
          </div>

          <div className="main-content">
            <div className="left-section">
              <div className="info-grid">
                <div className="info-item">
                  <MapPin className="icon" />
                  <div>
                    <h3>Location</h3>
                    <p>123 Main Street, Downtown</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>

                <div className="info-item">
                  <Clock className="icon" />
                  <div>
                    <h3>Hours</h3>
                    <p>Mon-Fri: 11:00 AM - 10:00 PM</p>
                    <p>Sat-Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="restaurant-links flex justify-center gap-6 p-4 rounded-lg shadow-lg">
                  <span className="cursor-pointer hover:text-gray-700 transition-all duration-300">
                    <Utensils className="icon text-3xl" />
                  </span>
                  <span className="cursor-pointer hover:text-gray-700 transition-all duration-300">
                    <Coffee className="icon text-3xl" />
                  </span>
                  <span className="cursor-pointer hover:text-gray-700 transition-all duration-300">
                    <Pizza className="icon text-3xl" />
                  </span>
                  <span className="cursor-pointer hover:text-gray-700 transition-all duration-300">
                    <FaBurger className="icon text-3xl" />
                  </span>
                </div>


              </div>


            </div>

            <div className="right-section">
              <div className="qr-box">
                <div className="qr-header">
                  <QrCode className="qr-icon" />
                  <span>SCAN TO ORDER</span>
                </div>

                <div className="qr-code-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <div className="qr-pulse" />
                  <QRCodeSVG
                    value={restaurantUrl}
                    size={200}
                    level="H"
                    includeMargin={true}
                    className="qr-code"
                    style={{ display: 'block', margin: '0 auto' }}
                  />
                </div>

                <div className="qr-footer">
                  <p>Scan to explore our</p>
                  <p className="menu-text">DIGITAL MENU</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <p>Valid until March 31, 2024 • Terms & Conditions Apply</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;