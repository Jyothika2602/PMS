import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [profile, setProfile] = useState({ name: 'Jyothika', email: 'user@example.com' });
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>Profile Information</h3>
        <input type="text" name="name" value={profile.name} onChange={handleProfileChange} placeholder="Full Name" />
        <input type="email" name="email" value={profile.email} onChange={handleProfileChange} placeholder="Email" />
      </div>

      <div className="settings-section">
        <h3>Change Password</h3>
        <input type="password" name="current" value={passwords.current} onChange={handlePasswordChange} placeholder="Current Password" />
        <input type="password" name="new" value={passwords.new} onChange={handlePasswordChange} placeholder="New Password" />
        <input type="password" name="confirm" value={passwords.confirm} onChange={handlePasswordChange} placeholder="Confirm New Password" />
        <button className="save-btn" onClick={handleSave}>Update</button>
      </div>

      <div className="settings-section">
        <h3>Appearance</h3>
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          Enable Dark Mode
        </label>
      </div>

      <div className="settings-section">
        <h3>Notification Preferences</h3>
        <label>
          <input type="checkbox" name="email" checked={notifications.email} onChange={handleNotificationsChange} />
          Email Notifications
        </label>
        <label>
          <input type="checkbox" name="sms" checked={notifications.sms} onChange={handleNotificationsChange} />
          SMS Alerts
        </label>
        <label>
          <input type="checkbox" name="push" checked={notifications.push} onChange={handleNotificationsChange} />
          Push Notifications
        </label>
      </div>
     <div className="settings-section">
  <h3>Contact Support</h3>
  <p><strong>Email:</strong> support@eliteestate.com</p>
  <p><strong>Phone:</strong> +91 98765 43210</p>
  <p><strong>Address:</strong> 2nd Floor, Tech Tower, Hyderabad, India</p>
  <p><strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
</div>

      <button className="save-btn" onClick={handleSave}>Save Changes</button>

    </div>
    
  );
};

export default Settings;