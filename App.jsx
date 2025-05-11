import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import PropertyCards from './components/PropertyCards/PropertyCards';
import StatsOverview from './components/StatsOverview/StatsOverview';
import RecentActivity from './components/RecentActivity/RecentActivity';
import SignIn from './components/Auth/SignIn';
import Signup from './components/Auth/SignUp';
import PropertiesPage from './components/pages/PropertiesPage';

// ✅ Import new pages
import Tenants from './components/pages/Tenants';
import Settings from './components/pages/Settings';
import Payments from './components/pages/Payments';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <div className="luxury-app">
        <Routes>
          <Route path="/login" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={
            <ProtectedRoute>
              <div className="app-layout">
                <div className="sidebar-container"><Sidebar /></div>
                <div className="main-content-container">
                  <div className="navbar-container"><Navbar setIsAuthenticated={setIsAuthenticated} /></div>
                  <div className="content-wrapper">
                    <div className="dashboard-hero">
                      <div className="hero-overlay"></div>
                      <div className="hero-content">
                        <h1>Manage Your Luxury Properties</h1>
                        <p>Premium real estate portfolio management at your fingertips</p>
                      </div>
                    </div>
                    <div className="dashboard-grid">
                      <div className="stats-section"><StatsOverview /></div>
                      <div className="properties-section"><PropertyCards /></div>
                      <div className="activity-section"><RecentActivity /></div>
                    </div>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />

          {/* ✅ Properties Route */}
          <Route path="/properties" element={
            <ProtectedRoute>
              <div className="app-layout">
                <div className="sidebar-container"><Sidebar /></div>
                <div className="main-content-container">
                  <div className="navbar-container"><Navbar setIsAuthenticated={setIsAuthenticated} /></div>
                  <div className="content-wrapper">
                    <PropertiesPage />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />

          {/* ✅ Tenants Route */}
          <Route path="/tenants" element={
            <ProtectedRoute>
              <div className="app-layout">
                <div className="sidebar-container"><Sidebar /></div>
                <div className="main-content-container">
                  <div className="navbar-container"><Navbar setIsAuthenticated={setIsAuthenticated} /></div>
                  <div className="content-wrapper">
                    <Tenants />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />

          {/* ✅ Payments Route */}
          <Route path="/payments" element={
            <ProtectedRoute>
              <div className="app-layout">
                <div className="sidebar-container"><Sidebar /></div>
                <div className="main-content-container">
                  <div className="navbar-container"><Navbar setIsAuthenticated={setIsAuthenticated} /></div>
                  <div className="content-wrapper">
                    <Payments />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />

          {/* ✅ Settings Route */}
          <Route path="/settings" element={
            <ProtectedRoute>
              <div className="app-layout">
                <div className="sidebar-container"><Sidebar /></div>
                <div className="main-content-container">
                  <div className="navbar-container"><Navbar setIsAuthenticated={setIsAuthenticated} /></div>
                  <div className="content-wrapper">
                    <Settings />
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;