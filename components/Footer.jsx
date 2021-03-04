
export const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="footer-about">
          <img className='footer-logo' src="logo.svg" alt="Footer Logo" />
          <div className="social">
            <img src="social/facebook.svg" alt="FB" />
            <img src="social/linkedin.svg" alt="FB" />
            <img src="social/whatsapp.svg" alt="FB" />
          </div>
        </div>
        <div className="footer-contact">
          <h5>Contact Details</h5>
          <div className="contact">
            <a href="https://g.page/Sankara-Eye" target="_blank">
            <span>
              <span>📌 &nbsp; </span>
            Varthur Rd, Vaikuntam Layout, <br />
            Lakshminarayana Pura, Kundalahalli, <br />
             Bengaluru, Karnataka 560037
            </span>
            </a>
            <a href="tel:8867298110" target="_blank">
              <span>☎️ &nbsp; </span>
              +91 88672 98110
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h5>Useful Links</h5>
          <div className="useful-links">
            <a href="#about">About Us</a>
            <a href="#business">Business Plan</a>
            <a href="#contact">Contact Us</a>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
      <div className="line" />
      <div className="content">
        <span>© 2019 All Right Reserved</span>
        <span>Designed by <a target="_blank" href="https://www.linkedin.com/in/raghuveerbharadwaj">Raghuveer Bharadwaj</a></span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  )
}
