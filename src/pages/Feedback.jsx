import React from "react";
import "../assets/styles/feedback.css";
import Header from "../components/Header";
import MasterLayout from "../layouts/MasterLayout";
import Section from "../components/Section";
import Footer from "../components/Footer";

const Feedback = () => {
  return (
    <>
      <Header />
      <MasterLayout>
        <Section>
          <div className="container" style={{ marginTop: "2rem" }}>
            <div className="header">
              <h1>Feedback Form</h1>
              <p>We value your feedback and strive to provide the best care for your beloved pets</p>
            </div>

            <div className="form-container">
              <form id="feedbackForm">
                <div className="form-group">
                  <label htmlFor="petOwnerName">
                    Pet Owner Name <span className="required">*</span>
                  </label>
                  <input type="text" id="petOwnerName" name="petOwnerName" required />
                </div>

                <div className="form-group">
                  <label htmlFor="petName">
                    Pet Name <span className="required">*</span>
                  </label>
                  <input type="text" id="petName" name="petName" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email Address <span className="required">*</span>
                  </label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="serviceType">
                    Type of Service Received <span className="required">*</span>
                  </label>
                  <select id="serviceType" name="serviceType" required>
                    <option value="">Please select a service</option>
                    <option value="veterinary-checkup">Veterinary Checkup</option>
                    <option value="grooming">Pet Grooming</option>
                    <option value="boarding">Pet Boarding</option>
                    <option value="daycare">Pet Daycare</option>
                    <option value="training">Pet Training</option>
                    <option value="emergency-care">Emergency Care</option>
                    <option value="dental-care">Dental Care</option>
                    <option value="surgery">Surgery</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Feedback
                </button>
              </form>
            </div>
          </div>
        </Section>
      </MasterLayout>
      <Footer/>
    </>
  );
};

export default Feedback;
