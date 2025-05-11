import React from "react";
import "./PropertyCards.css";
import property1 from "../../assets/images/property-1.jpg";
import property2 from "../../assets/images/property-2.jpg";
import property3 from "../../assets/images/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Oceanview Penthouse",
    location: "Miami Beach, FL",
    price: "$4,200/mo",
    status: "Occupied",
    bedrooms: 3,
    bathrooms: 2.5,
    area: "2,400 sqft",
  },
  {
    id: 2,
    image: property2,
    title: "Downtown Loft",
    location: "New York, NY",
    price: "$5,500/mo",
    status: "Available",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sqft",
  },
  {
    id: 3,
    image: property3,
    title: "Hillside Villa",
    location: "Beverly Hills, CA",
    price: "$8,000/mo",
    status: "Maintenance",
    bedrooms: 4,
    bathrooms: 3.5,
    area: "3,200 sqft",
  },
];

const PropertyCards = () => {
  return (
    <div className="luxury-properties" style={{ gridArea: "properties" }}>
      <div className="section-header">
        <h2>Featured Properties</h2>
        <button className="view-all">View All</button>
      </div>
      <div className="properties-grid">
        {properties.map((property) => (
          <div className="property-card" key={property.id}>
            <div
              className="property-image"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              <span className={`status-badge ${property.status.toLowerCase()}`}>
                {property.status}
              </span>
            </div>
            <div className="property-details">
              <h3>{property.title}</h3>
              <p className="location">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {property.location}
              </p>
              <div className="price">{property.price}</div>
              <div className="features">
                <div className="feature">
                  <span>{property.bedrooms}</span>
                  <small>Beds</small>
                </div>
                <div className="feature">
                  <span>{property.bathrooms}</span>
                  <small>Baths</small>
                </div>
                <div className="feature">
                  <span>{property.area}</span>
                  <small>Area</small>
                </div>
              </div>
              <button className="manage-btn">Manage Property</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCards;
