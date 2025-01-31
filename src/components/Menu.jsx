import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { 
          name: 'Bruschetta', 
          price: '$8.99', 
          description: 'Toasted bread with fresh tomatoes, garlic, and basil',
          image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&auto=format&fit=crop&q=60'
        },
        { 
          name: 'Calamari', 
          price: '$12.99', 
          description: 'Crispy fried squid with marinara sauce',
          image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=500&auto=format&fit=crop&q=60'
        }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { 
          name: 'Grilled Salmon', 
          price: '$24.99', 
          description: 'Fresh salmon with herbs and lemon butter sauce',
          image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=500&auto=format&fit=crop&q=60'
        },
        { 
          name: 'Beef Tenderloin', 
          price: '$29.99', 
          description: 'Premium cut beef with red wine reduction',
          image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=500&auto=format&fit=crop&q=60'
        }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { 
          name: 'Tiramisu', 
          price: '$8.99', 
          description: 'Classic Italian coffee-flavored dessert',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&auto=format&fit=crop&q=60'
        },
        { 
          name: 'Chocolate Lava Cake', 
          price: '$9.99', 
          description: 'Warm chocolate cake with molten center',
          image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500&auto=format&fit=crop&q=60'
        }
      ]
    }
  ];

  const categories = ['All', ...menuItems.map(item => item.category)];

  const filteredMenu = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p className="menu-subtitle">Discover our culinary delights</p>
        <div className="category-filter">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-content">
        {filteredMenu.map((category, index) => (
          <div key={index} className="menu-category">
            <h2>{category.category}</h2>
            <div className="menu-items">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="menu-item">
                  <img src={item.image} alt={item.name} className="menu-item-image" />
                  <div className="menu-item-content">
                    <div className="item-header">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p className="description">{item.description}</p>
                    <div className="dietary-labels">
                      <span className="dietary-label">Vegetarian</span>
                      <span className="dietary-label">Gluten-free</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
