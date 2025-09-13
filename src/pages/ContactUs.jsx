import React from 'react'
import "../assets/styles/contact.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from "../components/Section"
import MasterLayout from "../layouts/MasterLayout"

const ContactUs = () => {
  return (
    <>
      <Header />
      <MasterLayout>
        <Section>
          <div className="container">
            <div className="header">
              <h1>Contact Furever Care</h1>
              <p>We're here to help you and your beloved pets every step of the way</p>
            </div>

            <div className="contact-grid">
              <div className="contact-info">
                <h2><i className="fas fa-heart"></i>Get In Touch</h2>

                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h4>Call Us</h4>
                    <p>Main: (555) 123-4567</p>
                    <p>Emergency: (555) 987-6543</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@furevercare.com</p>
                    <p>emergency@furevercare.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Visit Us</h4>
                    <p>123 Pet Care Boulevard</p>
                    <p>Happy Tails City, PT 12345</p>
                  </div>
                </div>

                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Hours</h4>
                    <p>Mon-Fri: 8AM - 8PM</p>
                    <p>Sat-Sun: 9AM - 6PM</p>
                  </div>
                </div>

                <div className="social-media">
                  <h3>Follow Us</h3>
                  <div className="social-icons">
                    <a href="#" className="social-icon" aria-label="Instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-icon" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon" aria-label="TikTok">
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form-container">
                <h2><i className="fas fa-paper-plane"></i>Send Message</h2>
                <form id="contactForm">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input type="text" id="name" name="name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Needed</label>
                    <select id="service" name="service">
                      <option value="">Select a service</option>
                      <option value="grooming">Pet Grooming</option>
                      <option value="boarding">Pet Boarding</option>
                      <option value="daycare">Pet Daycare</option>
                      <option value="walking">Dog Walking</option>
                      <option value="sitting">Pet Sitting</option>
                      <option value="training">Pet Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message"
                      placeholder="Tell us about your pet and how we can help..." required></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </Section>
      </MasterLayout>
      <Footer/>
    </>
  )
}

export default ContactUs