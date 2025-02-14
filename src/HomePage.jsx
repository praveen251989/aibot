import React from "react";
import "./App.css";
import SignIn from "./SignIn";
import Dialog from "@mui/material/Dialog";
import MedicalBot from "./MedicalBot";
import homeImg from "./img/it_staffing_2.png";

const HomePage = ({ onLoginSuccess }) => {
	const [open, setOpen] = React.useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};
	return (
		<div>
            <MedicalBot/>
            <Dialog onClose={handleClose} open={open}>
                <SignIn onLoginSucces={onLoginSuccess} />
            </Dialog>
        <nav class="container nav">
        <a href="/" class="logo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Dialog IQ
        </a>
        <div class="nav-links">
            <a href="#">Solutions</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a class="login-btn" onClick={handleOpen}>Login</a>
        </div>
        <div class="menu-toggle">☰</div>
    </nav>
    <section class="container hero">
        <div class="hero-content">
            <div class="hero-tag">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                AI-Powered IT Staffing Solutions
            </div>
            <h1 class="hero-title">Find Your Perfect IT Talent Match with AI</h1>
            <p class="hero-description">Our conversational AI revolutionizes IT staffing by understanding your needs and matching you with the perfect candidate instantly.</p>
            <div class="hero-buttons">
                <a href="#" class="btn btn-primary">Start Hiring →</a>
                <a href="#" class="btn btn-secondary">Try Demo</a>
            </div>
        </div>
        <div class="hero-image">
			<img src={homeImg} alt="IT Staffing Illustration"/>
        </div>
    </section>
    <section class="container features">
        <h2 class="section-title">Why Choose Our Dialog IQ Solution?</h2>
        <p class="section-description">Streamline your IT recruitment process with cutting-edge AI technology</p>
        
        <div class="features-grid">
            <div class="feature-card">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <h3 class="feature-title">Instant Matching</h3>
                <p class="feature-description">AI-powered algorithms match your requirements with qualified candidates in real-time.</p>
            </div>

            <div class="feature-card">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <h3 class="feature-title">Smart Screening</h3>
                <p class="feature-description">Advanced screening process ensures only the most qualified candidates are presented.</p>
            </div>

            <div class="feature-card">
                <svg class="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h3 class="feature-title">Skill Verification</h3>
                <p class="feature-description">Automated technical assessment and verification of candidates' skills.</p>
            </div>
        </div>
    </section>

    <section class="container cta">
        <div class="cta-box">
            <h2 class="cta-title">Ready to Transform Your IT Hiring?</h2>
            <p class="cta-description">Start finding the perfect IT talent with our AI-powered platform today.</p>
            <a href="#" class="btn" style={{backgroundColor: 'white', color: "#3B82F6"}}>Get Started Now</a>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Solutions</h3>
                    <ul>
                        <li><a href="#">IT Staffing</a></li>
                        <li><a href="#">AI Matching</a></li>
                        <li><a href="#">Skill Assessment</a></li>
                        <li><a href="#">Remote Hiring</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Case Studies</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">GDPR Compliance</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Dialog IQ. All rights reserved.</p>
                <div class="social-icons">
              <a href="#" aria-label="Facebook">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.5 1a9 9 0 0 1-2.86 1.1A4.52 4.52 0 0 0 16.92 0C14.86 0 13.07 1.79 13.07 4c0 .31.03.61.1.91A12.94 12.94 0 0 1 1.64 1 4.48 4.48 0 0 0 3 8a4.52 4.52 0 0 1-2-.54v.05c0 2.01 1.42 3.69 3.3 4.08a4.57 4.57 0 0 1-2 .08 4.52 4.52 0 0 0 4.21 3.13A9.05 9.05 0 0 1 0 20.29 12.77 12.77 0 0 0 7 22c8.32 0 12.86-6.89 12.86-12.86 0-.19-.01-.39-.02-.58A9.2 9.2 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            </div>
        </div>
    </footer>
    </div>
	);
};

export default HomePage;
