// src/pages/PropertiesPage.jsx
import React from 'react';
import './PropertiesPage.css'; // Make sure this CSS file exists

const properties = [
  {
    id: 1,
    title: 'Ocean View Villa',
    location: 'Malibu, California',
    price: '$4,500,000',
    image: 'src/assets/images/home3.jpg',
    bedrooms: 5,
    bathrooms: 4,
    area: '5,000 sqft'
  },
  {
    id: 2,
    title: 'Modern City Apartment',
    location: 'New York, NY',
    price: '$2,100,000',
    image: 'src/assets/images/home2.jpeg',
    bedrooms: 3,
    bathrooms: 2,
    area: '1,800 sqft'
  },
  {
    id: 3,
    title: 'Country Estate Home',
    location: 'Nashville, TN',
    price: '$1,750,000',
    image: 'src/assets/images/home1.jpg',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,200 sqft'
  }
];

const PropertiesPage = () => {
  return (
    <div className="properties-page">
      <h2>Available Properties</h2>
      <div className="property-card-container">
        {properties.map(property => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-details">
              <h3>{property.title}</h3>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Price:</strong> {property.price}</p>
              <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
              <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
              <p><strong>Area:</strong> {property.area}</p>
              <button className="view-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;
