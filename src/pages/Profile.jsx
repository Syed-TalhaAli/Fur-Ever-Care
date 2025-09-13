import React from "react";
import Header from "../components/Header";
import MasterLayout from "../layouts/MasterLayout";
import Section from "../components/Section";
import "../assets/styles/profile.css"

const Profile = () => {
    return (
        <>
            <Header />
            <MasterLayout>
                <Section>
                    <div className="container" style={{ marginTop: "4rem" }}>
                        {/* Profile Section */}
                        <div className="section">
                            <h2 className="section-title">Veterinarian Profile</h2>

                            <div className="profile-grid">
                                <div className="profile-image">
                                    <div className="profile-img">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSleborUKlDqo2xbo3qSyXDV1Fs8B-4M9v6og&s"
                                            alt="Veterinarian"
                                        />
                                    </div>
                                    <div className="profile-name">Dr. Sarah Johnson</div>
                                    <div className="profile-title">
                                        Doctor of Veterinary Medicine
                                    </div>
                                </div>
                                <div className="profile-info">
                                    <h3>My Profile</h3>

                                    <div className="info-item">
                                        <span className="info-icon">
                                            <i className="fa-solid fa-graduation-cap"></i>
                                        </span>
                                        <div>
                                            <strong>Education:</strong> DVM from Cornell University
                                            College of Veterinary Medicine (2009)
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <span className="info-icon">
                                            <i className="fa-solid fa-clock"></i>
                                        </span>
                                        <div>
                                            <strong>Experience:</strong> 15+ years in veterinary
                                            medicine with focus on innovative care
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <span className="info-icon">
                                            <i className="fa-solid fa-hospital"></i>
                                        </span>
                                        <div>
                                            <strong>Specializations:</strong> Emergency Care, Small
                                            Animal Surgery, Digital Diagnostics
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <span className="info-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </span>
                                        <div>
                                            <strong>Contact:</strong> 0300-999888887 |
                                            dr.johnson@vetcarepro.com
                                        </div>
                                    </div>

                                    <div className="info-item">
                                        <span className="info-icon">
                                            <i className="fa-solid fa-trophy"></i>
                                        </span>
                                        <div>
                                            <strong>Philosophy:</strong> Bridging traditional
                                            veterinary wisdom with cutting-edge medical technology
                                        </div>
                                    </div>

                                    <div className="specialty-tags">
                                        <span className="tag">Emergency Medicine</span>
                                        <span className="tag">Orthopedic Surgery</span>
                                        <span className="tag">Digital Imaging</span>
                                        <span className="tag">Pain Management</span>
                                        <span className="tag">Preventive Care</span>
                                        <span className="tag">Exotic Animals</span>
                                        <span className="tag">Telemedicine</span>
                                        <span className="tag">Research</span>
                                    </div>
                                </div>
                            </div>

                            {/* needed location code */}
                        </div>

                        {/* Time Slots Section */}
                        <div className="section">
                            <h2 className="section-title">
                                <i className="fa-solid fa-calendar-days"></i> Available Time
                                Slots
                            </h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>
                                                <i className="fa-solid fa-calendar"></i> Date
                                            </th>
                                            <th>
                                                <i className="fa-solid fa-clock"></i> Time
                                            </th>
                                            <th>
                                                <i className="fa-solid fa-stethoscope"></i> Service Type
                                            </th>
                                            <th>
                                                <i className="fa-solid fa-clock"></i> Duration
                                            </th>
                                            <th>
                                                <i className="fa-solid fa-money-check-dollar"></i> Fee
                                            </th>
                                            <th>
                                                <i className="fa-solid fa-chart-simple"></i> Status
                                            </th>
                                            <th>
                                                <i className="fa-solid fa-bolt"></i> Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12/4/2024</td>
                                            <td>12pm to 9pm</td>
                                            <td>Surgery</td>
                                            <td>2 hours</td>
                                            <td>1000 pkr</td>
                                            <td>
                                                <span className="status-available">Active</span>
                                            </td>
                                            <td>
                                                <button className="book-btn">Book Now</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12/4/2024</td>
                                            <td>12pm to 9pm</td>
                                            <td>Surgery</td>
                                            <td>2 hours</td>
                                            <td>1000 pkr</td>
                                            <td>
                                                <span className="status-booked">Booked</span>
                                            </td>
                                            <td>
                                                <button className="book-btn">Book Now</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12/4/2024</td>
                                            <td>12pm to 9pm</td>
                                            <td>Surgery</td>
                                            <td>2 hours</td>
                                            <td>1000 pkr</td>
                                            <td>
                                                <span className="status-available">Active</span>
                                            </td>
                                            <td>
                                                <button className="book-btn">Book Now</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12/4/2024</td>
                                            <td>12pm to 9pm</td>
                                            <td>Surgery</td>
                                            <td>2 hours</td>
                                            <td>1000 pkr</td>
                                            <td>
                                                <span className="status-booked">Booked</span>
                                            </td>
                                            <td>
                                                <button className="book-btn">Book Now</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12/4/2024</td>
                                            <td>12pm to 9pm</td>
                                            <td>Surgery</td>
                                            <td>2 hours</td>
                                            <td>1000 pkr</td>
                                            <td>
                                                <span className="status-available">Active</span>
                                            </td>
                                            <td>
                                                <button className="book-btn">Book Now</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Case Studies Section */}
                        <div className="section">
                            <h2 className="section-title">
                                <i className="fa-solid fa-book"></i> Clinical Case Studies
                            </h2>
                            <div className="case-studies-grid">
                                <div className="case-card">
                                    <h4>
                                        <i className="fa-solid fa-dog"></i> Advanced Orthopedic
                                        Surgery
                                    </h4>
                                    <div className="case-details">
                                        Our specialized techniques ensure precise treatment for
                                        complex bone and joint conditions. We are dedicated to
                                        restoring mobility and improving quality of life for every
                                        canine patient.
                                    </div>
                                    <div className="outcome">
                                        <strong>Outcome:</strong> Complete recovery within 8
                                        weeks...
                                    </div>
                                </div>

                                <div className="case-card">
                                    <h4>
                                        <i className="fa-solid fa-cat"></i> Revolutionary Feline
                                        Cardiology
                                    </h4>
                                    <div className="case-details">
                                        Our advanced diagnostics and innovative treatments target
                                        complex heart conditions with precision. We are committed to
                                        extending longevity and enhancing the quality of life for
                                        every feline patient.
                                    </div>
                                    <div className="outcome">
                                        <strong>Outcome:</strong> 60% improvement in cardiac
                                        function...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </MasterLayout>
        </>
    );
};

export default Profile;
