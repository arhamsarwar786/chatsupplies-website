import React from "react";

export default function WelcomeEmail() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * {
        background-color: #f8f9fa ; /* force white background */
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }
        
        .container {
          max-width: 1200px;
          width: 100%;
        }
        
        .gradient-wrapper {
          background: linear-gradient(135deg, #2648EF 0%, #252F8B 100%);
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          position: relative;
          overflow: hidden;
        }
        
        .gradient-wrapper::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%);
          transform: rotate(30deg);
        }
        
        .card {
          background-color: #f8fafc;
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          max-width: 550px;
          margin: 0 auto;
          position: relative;
          z-index: 10;
        }
        
        .top-section {
          padding: 48px 48px 32px;
          text-align: center;
        }
        
        .title {
          color: #1e293b;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 16px;
        }
        
        .subtitle {
          color: #475569;
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        
        .illustration {
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
          display: block;
          border-radius: 12px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .bottom-section {
          padding: 0 48px 32px;
          text-align: center;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #2648EF 0%, #252F8B 100%);
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
          padding: 16px 40px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
        }
        
        .social-icon {
          width: 48px;
          height: 48px;
          border: 1px solid #cbd5e1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          background-color: white;
        }
        
        .social-icon:hover {
          background-color: #f1f5f9;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .social-icon img {
          width: 24px;
          height: 24px;
        }
        
       .footer {
  width: 103%;
  background-color: #000;  /* black footer background */
  color: #fff;             /* force white text */
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  margin-left: -16.5px; 
  border-top: none;
}

.footer p,
.footer a {
  background-color: transparent !important; /* stop inheriting the off-white */
  color: #fff;                              /* readable text */
  font-size: 14px;
  text-align: center;
  margin: 0;
}

.footer a {
  color: #4f9cff; /* light blue link for visibility */
  text-decoration: underline;
  font-weight: 600;
}

        
        .footer p:last-child {
          margin-top: 16px;
        }
        
        @media (max-width: 768px) {
          .gradient-wrapper {
            padding: 30px 20px;
          }
          
          .top-section, .bottom-section {
            padding: 32px 24px 24px;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
          }
          
          .social-icons {
            flex-wrap: wrap;
          }
        }
        
        @media (max-width: 480px) {
          .title {
            font-size: 1.75rem;
          }
          
          .cta-button {
            width: 100%;
            padding: 14px 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="gradient-wrapper">
          <div className="card">
            {/* Top Section */}
            <div className="top-section">
              <h1 className="title">Hey, AwesomeCo!</h1>
              <p className="subtitle">
                Welcome to ChatSupplies. <br /> We are so happy to have you here!
              </p>

              {/* Illustration */}
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Team collaboration illustration"
                className="illustration"
              />
            </div>

            {/* Bottom Section */}
            <div className="bottom-section">
              {/* CTA */}
              <a href="#" className="cta-button">
                Go to your account
              </a>

              {/* Social Icons */}
              <div className="social-icons">
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

            {/* Footer Section */}
            <div className="footer">
              <p>
                You're receiving this email because you are a subscriber of
                NextMockup.com
              </p>
              <p>
                If you feel you received it by mistake or wish to unsubscribe.{" "}
                <a href="#">click here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
