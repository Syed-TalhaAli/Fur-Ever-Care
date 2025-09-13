import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Section from "../components/Section"
import MasterLayout from "../layouts/MasterLayout"
import "../assets/styles/about.css"

const About = () => {
  return (
    <>
      <Header />
      <MasterLayout>
        <Section>

          <div className="heading">
            <h1><span className="highlight">About FurEver Care</span></h1>
          </div>

          <div className="about-section">
            <div className="about-intro">
              <img src="happy pet.jpg" alt="Happy pet with owner" />
              <div>
                <h2>Our Story</h2>
                <p>
                  At <strong>Furever Care</strong>, we believe every pet deserves love, safety, and the best care
                  possible.
                  Founded by passionate pet lovers, our mission is to provide exceptional care and support to furry
                  friends
                  and their families. From health guidance to emergency help, we stand by your side every step of the
                  way.
                </p>
                <p>
                  With years of experience in pet wellness, we’ve built a trusted community where pets feel at home
                  and
                  pet parents feel reassured. Because for us, it’s not just care, it’s <em>Furever Care</em>.
                </p>
              </div>
            </div>

            <div className="team-section">
              <h2>Meet Our Team</h2>
              <div className="team-members">
                <div className="member">
                  <img src="Director.jpg" alt="Team Member 1" />
                  <h3>Dr. Sarah Williams</h3>
                  <p>Veterinarian & Founder</p>
                </div>
                <div className="member">
                  <img src="expert.jpg" alt="Team Member 2" />
                  <h3>James Carter</h3>
                  <p>Pet Nutrition Expert</p>
                </div>
                <div className="member">
                  <img src="specialist.jpg" alt="Team Member 3" />
                  <h3>Emily Johnson</h3>
                  <p>Behavior Specialist</p>
                </div>
              </div>
            </div>
          </div>

        </Section>
      </MasterLayout>
      <Footer />
    </>
  )
}

export default About