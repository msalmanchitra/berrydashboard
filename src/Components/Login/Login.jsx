import { useState } from 'react';
import { Eye, EyeOff, Settings } from 'lucide-react';
import './Login.css';

export default function Login({ onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  // Form States
  const [email, setEmail] = useState('info@codedthemes.com');
  const [password, setPassword] = useState('123456');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert(`Account Created for ${firstName} ${lastName} (${email})`);
    } else {
      onLoginSuccess();
    }
  };

  return (
    <div className="berry-auth-container">
      {/* Right Side Spinning Settings Gear Button */}
      <div className="berry-settings-gear">
        <button type="button" title="Live Customizer" aria-label="Open live customizer" className="berry-gear-btn">
          <Settings className="w-6 h-6 spin-animation" />
        </button>
      </div>

      {/* Main Centered Box Container */}
      <div className="berry-main-wrapper">
        <div className="berry-card-box">
          {/* Berry Logo Header */}
          <div className="berry-logo-header">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="18" r="12" fill="#2196f3" />
              <circle cx="12" cy="15" r="2.5" fill="#1e88e5" />
              <circle cx="20" cy="15" r="2.5" fill="#1e88e5" />
              <circle cx="16" cy="21" r="2.5" fill="#1565c0" />
              <path d="M16 6C16 6 18 3 22 4C22 4 21 8 16 6Z" fill="#00c853" />
              <path d="M16 6C16 6 14 3 10 4C10 4 11 8 16 6Z" fill="#00e676" />
            </svg>
            <span className="berry-logo-text">BERRY</span>
          </div>

          {/* Title and Subtitle */}
          <div className="berry-title-area">
            <h1>{isSignUp ? 'Sign up' : 'Hi, Welcome Back'}</h1>
            <p>Enter your credentials to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="berry-form">
            {/* First & Last Name Inputs for Sign Up Mode */}
            {isSignUp && (
              <div className="berry-name-grid">
                <div>
                  <label htmlFor="first-name">First Name</label>
                  <input
                    id="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    id="last-name"
                    type="text"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Doe"
                  />
                </div>
              </div>
            )}

            {/* Email Address / Username Field */}
            <div className="berry-input-group">
              <label htmlFor="email">Email Address / Username</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="berry-input-group">
              <label htmlFor="password">Password</label>
              <div className="berry-password-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword(!showPassword)}
                  className="berry-eye-btn"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Keep Logged In & Forgot Password Bar */}
            {!isSignUp && (
              <div className="berry-options-row">
                <label className="berry-checkbox-label">
                  <input
                    type="checkbox"
                    checked={keepLoggedIn}
                    onChange={(e) => setKeepLoggedIn(e.target.checked)}
                  />
                  <span>Keep me logged in</span>
                </label>
                <a href="#forgot" className="berry-forgot-link">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="berry-submit-btn">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          {/* Separator / Switch Account Link */}
          <div className="berry-switch-area">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="berry-switch-btn"
            >
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            </button>
          </div>
        </div>

        {/* Third-Party Authentication Provider Buttons */}
        <div className="berry-providers-grid">
          <button type="button" className="berry-provider-card">
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#FFA000" d="M3.8 17.2L6.2 2.8l3.4 6.4z"/><path fill="#FFCA28" d="M13.6 11.5l2.2-4.2 4.4 9.9z"/><path fill="#05A6F0" d="M3.8 17.2l8.2 4.8 8.2-4.8L16 3.5z"/><path fill="#FF3D00" d="M12 22l8.2-4.8-2.4-13.7z"/></svg>
            <span>Firebase</span>
          </button>

          <button type="button" className="berry-provider-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#EB5424"><path d="M21.98 12c0-2.22-.88-4.32-2.44-5.88l-3.23 3.23c.72.72 1.13 1.68 1.13 2.65s-.41 1.93-1.13 2.65l3.23 3.23c1.56-1.56 2.44-3.66 2.44-5.88zM12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 16.21c-3.44 0-6.23-2.79-6.23-6.23S8.56 5.77 12 5.77s6.23 2.79 6.23 6.23-2.79 6.23-6.23 6.23z"/></svg>
            <span>Auth0</span>
          </button>

          <button type="button" className="berry-provider-card">
            <span className="berry-aws-text">aws</span>
            <span>AWS</span>
          </button>

          <button type="button" className="berry-provider-card">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#3ECF8E"><path d="M13.35 20.84L20.5 12h-8.22l2.36-8.84L7.5 12h8.22l-2.37 8.84z"/></svg>
            <span>Supabase</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="berry-footer">
        <span>berrydashboard.com</span>
        <span>© codedthemes.com</span>
      </footer>
    </div>
  );
}