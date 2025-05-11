// src/pages/TenantsPage.jsx
import React from 'react';
import './Tenants.css';

const tenants = [
  {
    id: 1,
    name: 'John Doe',
    phone: '+1 234 567 8901',
    email: 'john.doe@example.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    phone: '+1 987 654 3210',
    email: 'jane.smith@example.com'
  },
  {
    id: 3,
    name: 'Robert Brown',
    phone: '+1 456 789 1234',
    email: 'robert.brown@example.com'
  },

];

const TenantsPage = () => {
  return (
    <div className="tenants-page">
      <h2>Tenant Details</h2>
      <div className="tenant-card-container">
        {tenants.map(tenant => (
          <div className="tenant-card" key={tenant.id}>
            <h3>{tenant.name}</h3>
            <p><strong>Phone:</strong> {tenant.phone}</p>
            <p><strong>Email:</strong> {tenant.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantsPage;
