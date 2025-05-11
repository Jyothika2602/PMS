import React from 'react';
import './RecentActivity.css';
import { FaKey, FaFileInvoiceDollar, FaTools, FaUserCheck } from 'react-icons/fa';

const activities = [
  {
    id: 1,
    type: 'Lease Signed',
    property: 'Oceanview Penthouse',
    tenant: 'Michael Johnson',
    time: '2 hours ago',
    icon: <FaKey className="activity-icon" />,
    color: "var(--gold-orange)"
  },
  {
    id: 2,
    type: 'Payment Received',
    property: 'Downtown Loft',
    tenant: 'Sarah Williams',
    time: '5 hours ago',
    icon: <FaFileInvoiceDollar className="activity-icon" />,
    color: "#4CAF50"
  },
  {
    id: 3,
    type: 'Maintenance Request',
    property: 'Hillside Villa',
    tenant: 'Robert Chen',
    time: '1 day ago',
    icon: <FaTools className="activity-icon" />,
    color: "var(--luxury-orange)"
  },
  {
    id: 4,
    type: 'New Tenant Approved',
    property: 'Urban Studio',
    tenant: 'Emily Rodriguez',
    time: '2 days ago',
    icon: <FaUserCheck className="activity-icon" />,
    color: "#2196F3"
  }
];

const RecentActivity = () => {
  return (
    <div className="luxury-activity" style={{ gridArea: 'activity' }}>
      <h2>Recent Activity</h2>
      <div className="activity-list">
        {activities.map(activity => (
          <div className="activity-item" key={activity.id}>
            <div className="activity-icon-container" style={{ backgroundColor: `${activity.color}20` }}>
              {activity.icon}
            </div>
            <div className="activity-details">
              <h3>{activity.type}</h3>
              <p>{activity.property} · {activity.tenant}</p>
              <small>{activity.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;