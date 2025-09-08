import React from "react";

export default function WelcomeCard() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          background-color: white;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        
        .outer-wrapper {
          position: relative;
          padding: 30px 50px;
          background: linear-gradient(to right, #2648EF, #252F8B);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          border-radius: 16px;
        }
        
        .card {
          position: relative;
          background: white;
          padding: 24px;
          text-align: center;
          height: 725px;
          width: 480px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .top-content h2 {
          font-size: 28px;
          font-weight: 700;
          color: black;
          margin-bottom: 8px;
        }
        
        .top-content p {
          font-size: 20px;
          color: #374151;
          line-height: 1.5;
        }
        
        .illustration {
          display: flex;
          justify-content: center;
          margin: 16px 0;
        }
        
        .illustration img {
          width: 176px;
          height: auto;
          object-fit: contain;
        }
        
        .button-container {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }
        
        .cta-button {
          width: 200px;
          background: linear-gradient(to right, #2648EF, #252F8B);
          color: white;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 6px;
          border: none;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: opacity 0.2s;
        }
        
        .cta-button:hover {
          opacity: 0.9;
        }
        
        .support-section {
          margin-top: auto;
        }
        
        .heart-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 8px;
          font-size: 18px;
        }
        
        .support-title {
          font-size: 20px;
          font-weight: 700;
          color: #1e2a78;
        }
        
        .support-subtitle {
          font-weight: 700;
          font-size: 20px;
          color: #1e2a78;
          margin-top: 4px;
        }
        
        .support-description {
          font-size: 12px;
          color: #374151;
          line-height: 1.5;
          margin-top: 4px;
          padding: 0 12px;
        }
        
        .contact-icons {
          display: flex;
          justify-content: space-around;
          margin-top: 8px;
        }
        
        .contact-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
        }
        
        .contact-icon {
          width: 16px;
          height: 16px;
          color: #2648EF;
          margin-bottom: 4px;
        }
        
        .contact-label {
          font-size: 12px;
          color: #2648EF;
        }
        
        .social-icons {
          margin-top: 8px;
        }
        
        .social-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        
        .social-icon {
          width: 42px;
          height: 42px;
          border: 1px solid black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .social-icon img {
          width: 20px;
          height: 20px;
          display: block;
        }
        
        .footer {
          margin-top: 16px;
          width: 480px;
          background-color: black;
          color: white;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          margin-left: -24px;
        }
        
        .footer p {
          text-align: center;
          font-size: 14px;
          margin: 0;
        }
        
        .footer a {
          color: white;
          text-decoration: underline;
          font-weight: 700;
          font-size: 16px;
        }
        
        .footer p:last-child {
          margin-top: 8px;
        }
      `}</style>

      <div className="outer-wrapper">
        <div className="card">
          <div className="top-content">
            <h2>Hey, AwesomeCo!</h2>
            <p>
              Welcome to ChatSupplies. <br /> We are so happy to have you here!
            </p>
          </div>

          <div className="illustration">
            <img
              src="/WelcomeEmail/WelcomeEmail.jpg"
              alt="Illustration"
            />
          </div>

          <div className="button-container">
            <button className="cta-button">Go to your account</button>
          </div>

          <div className="support-section">
            <div className="heart-icon">❤️</div>
            <p className="support-title">24/7/365</p>
            <h3 className="support-subtitle">Enterprise-grade Support</h3>
            <p className="support-description">
              Know that you are in good hands. <br /> We always have your back
              every day of the week, any time.
            </p>

            <div className="contact-icons">
              <div className="contact-item">
                {/* Phone SVG */}
                <svg
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="contact-label">Phone</span>
              </div>
              <div className="contact-item">
                {/* Mail SVG */}
                <svg
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="contact-label">Email</span>
              </div>
              <div className="contact-item">
                {/* Chat SVG */}
                <svg
                  className="contact-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="contact-label">Chat</span>
              </div>
            </div>

            <div className="social-icons">
              <div className="social-container">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <img
                    src="/SocialIcons/fb.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <img
                    src="/SocialIcons/linkedin-in.svg"
                    alt="LinkedIn"
                  />
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <img
                    src="/SocialIcons/x-twitter.svg"
                    alt="Twitter"
                  />
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <img
                    src="/SocialIcons/instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <img
                    src="/SocialIcons/youtube.svg"
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>

            <div className="footer">
              <p>
                You're receiving this email because you are a subscriber of
                NextMockup.com
              </p>
              <p>
                If you feel you received it by mistake or wish to unsubscribe.{" "}
                <a className="unsubscribe-link" href="#">
                  click here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
