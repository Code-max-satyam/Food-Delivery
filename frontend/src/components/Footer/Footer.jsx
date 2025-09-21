import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logos} alt="" />
          <p>Made with ❤️ in India</p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/share/177QVmZN2k/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Visit our Facebook"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>

            <a
              href="https://www.linkedin.com/in/satyam-singh-3505b425b/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Visit our LinkedIn"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>

        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy and Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9161440593</li>
            <li>satyam10april02@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright"> Copyright 2025 code-max-satyam - All Right Reserved.</p>
    </div>
  )
}

export default Footer