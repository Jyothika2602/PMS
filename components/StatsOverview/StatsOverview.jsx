import React from 'react';
import './StatsOverview.css';
import { FaHome, FaUsers, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

const stats = [
  {
    title: "Total Properties",
    value: "24",
    change: "+2.4%",
    icon: <FaHome className="stat-icon" />,
    color: "var(--gold-orange)"
  },
  {
    title: "Active Tenants",
    value: "18",
    change: "+3.1%",
    icon: <FaUsers className="stat-icon" />,
    color: "var(--luxury-orange)"
  },
  {
    title: "Monthly Revenue",
    value: "$42,560",
    change: "+12.7%",
    icon: <FaMoneyBillWave className="stat-icon" />,
    color: "#4CAF50"
  },
  {
    title: "Occupancy Rate",
    value: "87%",
    change: "+5.2%",
    icon: <FaChartLine className="stat-icon" />,
    color: "#2196F3"
  }
];

const StatsOverview = () => {
  return (
    <div className="luxury-stats" style={{ gridArea: 'stats' }}>
      <h2>Performance Overview</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon-container" style={{ backgroundColor: `${stat.color}20` }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-change" style={{ color: stat.color }}>
                {stat.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;