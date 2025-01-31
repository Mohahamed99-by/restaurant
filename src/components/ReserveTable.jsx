import React, { useState } from 'react';
import './ReserveTable.css';

const ReserveTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTimes = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
  };

  // Get tomorrow's date as the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  if (isSubmitted) {
    return (
      <div className="reserve-container">
        <div className="reserve-content success-message">
          <div className="success-icon">✓</div>
          <h1>Reservation Confirmed!</h1>
          <p>Thank you for your reservation, {formData.name}!</p>
          <div className="reservation-details">
            <h2>Reservation Details:</h2>
            <ul>
              <li><strong>Date:</strong> {formData.date}</li>
              <li><strong>Time:</strong> {formData.time}</li>
              <li><strong>Guests:</strong> {formData.guests}</li>
            </ul>
          </div>
          <p>We will send a confirmation email to {formData.email} shortly.</p>
          <p>If you need to make any changes, please contact us at your convenience.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="reserve-container">
      <div className="reserve-content">
        <h1>Reserve a Table</h1>
        <p className="reservation-intro">
          Make your dining experience special by reserving your table in advance.
        </p>
        
        <form onSubmit={handleSubmit} className="reservation-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={minDate}
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="specialRequests">Special Requests</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Any special requests or dietary requirements?"
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Reserve Table
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveTable;
