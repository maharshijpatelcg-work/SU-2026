import React from 'react';
import { 
  CloudRain, Leaf, TrendingUp, CheckCircle2, 
  BarChart2, ShieldCheck, Route, CircleDollarSign, 
  MapPin, Scaling, User, LineChart, Sparkles, Sprout
} from 'lucide-react';
import './LandingPage.css';

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-container">
      {/* --- Navigation --- */}
      <nav className="landing-nav">
        <div className="nav-logo">
          <Leaf className="logo-icon green" size={28} />
          <span>CropSphere</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#ai-tech">AI Technology</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <button className="nav-btn-primary" onClick={() => onNavigate("auth")}>Login / Sign Up</button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Grow Smarter,<br />Harvest Better</h1>
          <p className="hero-subtitle">
            AI-powered crop intelligence that helps farmers choose the best crops using weather data, soil conditions, and predictive analytics.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => onNavigate("auth")}>Start Smart Farming</button>
            <button className="btn-secondary">View Demo</button>
          </div>
          
          <div className="trusted-by">
            <p className="trusted-text"><CheckCircle2 size={16} color="#16A34A" /> trusted by thousands of farmers</p>
            <div className="trusted-logos">
              <span className="logo-placeholder">Google</span>
              <span className="logo-placeholder">TechCrunch</span>
              <span className="logo-placeholder">WIRED</span>
              <span className="logo-placeholder">Forbes</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="image-wrapper">
             <img src="/landing_hero_image.png" alt="Smart Farming AI" className="hero-img" />
             <div className="hero-glow"></div>
          </div>
        </div>
      </section>

      {/* --- Flow Chart: How It Works --- */}
      <section className="process-section" id="how-it-works">
        <div className="process-header">
           <h2>AI-Powered Crop Decision Engine</h2>
           <p>Real-time analysis of weather patterns, soil health, and market trends to recommend the optimal crops for your farm.</p>
        </div>
        
        <div className="diagram-container">
           <div className="diagram-row top-row">
              <div className="diagram-card blue-glow">
                <CloudRain className="card-icon blue" size={24} />
                <span>Weather Data</span>
              </div>
              <div className="diagram-arrow">?</div>
              <div className="diagram-card green-glow">
                <Sprout className="card-icon green" size={24} />
                <span>Soil Conditions</span>
              </div>
              <div className="diagram-arrow">?</div>
              <div className="diagram-card yellow-glow">
                <TrendingUp className="card-icon yellow" size={24} />
                <span>Market Prices</span>
              </div>
           </div>
           
           <div className="diagram-connector">
              <div className="connector-icon-wrapper">
                <Leaf size={24} />
              </div>
           </div>

           <div className="diagram-row bottom-row">
              <div className="diagram-card main-ai pulse-glow">
                <Sparkles className="card-icon green" size={24} />
                <span>CropSphere AI Model</span>
              </div>
           </div>
        </div>
      </section>

      {/* --- Features Grid --- */}
      <section className="features-grid-section" id="features">
        <div className="grid-header">
          <h2>Everything you need for smart agriculture</h2>
          <p>The standard in modern farming. Experience real-time AI analytics today.</p>
        </div>
        <div className="features-grid">
          <div className="feature-col">
            <div className="f-icon-box"><Leaf size={24} /></div>
            <h3>AI Crop Recommendation</h3>
            <p>Get personalized crop suggestions matched to your specific land and climate conditions.</p>
          </div>
          <div className="feature-col">
            <div className="f-icon-box"><CloudRain size={24} /></div>
            <h3>Real-time Weather</h3>
            <p>Seamlessly integrate live and forecasted meteorology directly into your planning pipeline.</p>
          </div>
          <div className="feature-col">
            <div className="f-icon-box"><CircleDollarSign size={24} /></div>
            <h3>Smart Farm Budgeting</h3>
            <p>Predict costs and forecast ROI before you plant your very first seed.</p>
          </div>
          <div className="feature-col">
            <div className="f-icon-box"><Route size={24} /></div>
            <h3>Crop Rotation Intel</h3>
            <p>Maintain earth vitality with AI-guided automated season-to-season crop rotation schedules.</p>
          </div>
          <div className="feature-col">
            <div className="f-icon-box"><ShieldCheck size={24} /></div>
            <h3>Risk Analysis Engine</h3>
            <p>Anticipate anomalies. The AI engine detects possible blights and historical crop failures.</p>
          </div>
          <div className="feature-col">
            <div className="f-icon-box"><BarChart2 size={24} /></div>
            <h3>Yield Prediction AI</h3>
            <p>Advanced statistical models to estimate tons per acre reliably based on prior data models.</p>
          </div>
        </div>
      </section>

      {/* --- Dashboard Mockup Section --- */}
      <section className="dashboard-preview" id="ai-tech">
        <div className="grid-header">
           <h2>A platform built for precision</h2>
           <p>Beautiful, robust, and predictive dashboard interfaces.</p>
        </div>
        
        <div className="mockup-container">
          <div className="mockup-sidebar">
             <div className="m-logo"><Leaf size={20} color="#16A34A" /> CropSphere</div>
             <div className="menu-item active"><MapPin size={18} /> Phase 1: Planning</div>
             <div className="menu-item"><ShieldCheck size={18} /> Phase 2: Health</div>
             <div className="menu-item"><LineChart size={18} /> Phase 3: Harvesting</div>
             <div className="menu-item"><TrendingUp size={18} /> Phase 4: Selling</div>
          </div>
          <div className="mockup-main">
             <div className="m-header">
                <h3>Pre-Season Planning</h3>
                <p>Input your parameters to get an AI optimized farming layout.</p>
             </div>
             
             <div className="m-cards">
                <div className="m-card">
                  <span>Farm Location</span>
                  <div>Andhra Pradesh, WG</div>
                </div>
                <div className="m-card">
                  <span>Land Area</span>
                  <div>5.0 Acres</div>
                </div>
                <div className="m-card">
                  <span>Budget Capital</span>
                  <div>? 50,000</div>
                </div>
                <div className="m-card">
                  <span>Labour Status</span>
                  <div>High Availability</div>
                </div>
             </div>
             
             <button className="m-generate-btn" onClick={() => onNavigate("auth")}> 
               Generate Crop Recommendations 
             </button>
          </div>
        </div>
      </section>
      
      {/* --- Call To Action Footer --- */}
      <section className="cta-section">
        <div className="cta-bg-pattern"></div>
        <div className="cta-content">
          <h2>Start Your AI Farming Journey Today</h2>
          <p>Join thousands of farmers embracing real-time predictive agriculture to multiply their yield and profits.</p>
          <button className="btn-cta" onClick={() => onNavigate("auth")}>Create Free Account</button>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
