import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, Github, Combine, Leaf } from "lucide-react";
import "./AuthPage.css";

const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
    
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "Farmer",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (formData.password.length < 6) newErrors.password = "Minimum 6 characters";
    if (!isLogin) {
      if (!formData.fullName) newErrors.fullName = "Name is required";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onLogin && onLogin();
      }, 1500);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <div className="auth-container">
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      
      <div className="auth-card glass-panel">
        
        <div className="auth-illustration">
          <div className="illustration-overlay">
            <Combine className="logo-icon" size={48} />
            <h2>AgriMind <span>AI</span></h2>
            <p>Empowering agriculture with futuristic intelligence.</p>
          </div>
          <img src="/ai_farming_illustration.png" alt="AI Farming Concept" className="bg-image" />
        </div>

        <div className="auth-form-wrapper">
          <div className="form-header">
            <h3>{isLogin ? "Welcome Back" : "Create Account"}</h3>
            <p>{isLogin ? "Login to access your AI dashboard" : "Join the future of smart agriculture"}</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            {!isLogin && (
              <div className="input-group">
                <div className={`input-wrapper ${errors.fullName ? "error" : ""}`}>
                  <User size={20} className="input-icon" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>
            )}

            <div className="input-group">
              <div className={`input-wrapper ${errors.email ? "error" : ""}`}>
                <Mail size={20} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="input-group">
              <div className={`input-wrapper ${errors.password ? "error" : ""}`}>
                <Lock size={20} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            {!isLogin && (
              <>
                <div className="input-group">
                  <div className={`input-wrapper ${errors.confirmPassword ? "error" : ""}`}>
                    <Lock size={20} className="input-icon" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <span className="error-text">{errors.confirmPassword}</span>
                  )}
                </div>

                <div className="input-group role-selector">
                  <label>Select Role:</label>
                  <div className="role-options">
                    {['Farmer', 'Researcher', 'Admin'].map((role) => (
                      <button
                        type="button"
                        key={role}
                        className={`role-btn ${formData.role === role ? "active" : ""}`} 
                        onClick={() => setFormData({ ...formData, role })}
                      >
                        {role === 'Farmer' ? <Leaf size={16} /> : null}
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {isLogin && (
              <div className="form-actions-row">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </label>
                <a href="#forgot" className="forgot-password">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className={`submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? (
                <div className="loader"></div>
              ) : (
                isLogin ? "Authenticate" : "Initialize Account"
              )}
            </button>

            {isLogin && (
              <div className="social-login">
                <div className="divider">
                  <span>OR CONTINUE WITH</span>
                </div>
                <div className="social-buttons">
                  <button type="button" className="google-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                  <button type="button" className="github-btn">
                    <Github size={20} />
                    GitHub
                  </button>
                </div>
              </div>
            )}

            <div className="switch-mode">
              <span>{isLogin ? "Don't have an AI profile?" : "Already have an account?"}</span>
              <button 
                type="button" 
                className="switch-btn" 
                onClick={() => {
                  setIsLogin(!isLogin);
                  setErrors({});
                }}
              >
                {isLogin ? "Register Now" : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
