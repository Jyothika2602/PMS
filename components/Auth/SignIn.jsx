import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import { FiLock, FiMail } from 'react-icons/fi';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import luxuryPropertyImage from '../../assets/images/property-1.jpg';

const SignIn = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Basic validation
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Successful login
      setIsAuthenticated(true);
      navigate('/');
      
      // Store auth state if remember me is checked
      if (rememberMe) {
        localStorage.setItem('pms-auth', 'true');
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Implement social login logic here
    console.log(`Logging in with ${provider}`);
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div 
          className="auth-overlay"
          style={{ backgroundImage: `url(${luxuryPropertyImage})` }}
        ></div>
        <div className="auth-content">
          <h1>Elite<span>Estate</span></h1>
          <p>Premium Property Management Solution</p>
          <div className="auth-features">
            <div className="feature-item">
              <div className="feature-icon">🏢</div>
              <p>Manage all your properties</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <p>Track rent payments</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🛠️</div>
              <p>Handle maintenance requests</p>
            </div>
          </div>
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-form-container">
          <h2>Welcome Back</h2>
          <p className="auth-subtitle">Sign in to access your dashboard</p>
          
          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <FiMail className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            
            <div className="input-group">
              <FiLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
                minLength={6}
              />
            </div>
            
            <div className="auth-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  disabled={isLoading}
                />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            </div>
            
            <button 
              type="submit" 
              className="auth-button"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
            
            <div className="auth-divider">
              <span>or continue with</span>
            </div>
            
            <div className="social-auth">
              <button 
                type="button" 
                className="social-button google"
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
              >
                <FaGoogle className="social-icon" />
                Google
              </button>
              <button 
                type="button" 
                className="social-button microsoft"
                onClick={() => handleSocialLogin('microsoft')}
                disabled={isLoading}
              >
                <FaMicrosoft className="social-icon" />
                Microsoft
              </button>
            </div>
            
            <p className="auth-footer">
              Don't have an account? <a href="/SignUp">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;