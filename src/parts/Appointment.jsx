import React from 'react'

const Appointment = () => {
    return (
        <div className="main-container">
            <div className="form-section">
                <div className="form-container">
                    <h1 className="form-title">Get A <span className="highlight">Service Now!</span></h1>
                    <p className="form-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim labore iure
                        repellendus quasi nobis.
                    </p>

                    <form className="contact-form" id="serviceForm">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" className="form-input" placeholder="Enter Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-input" placeholder="Enter Email" required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <input type="tel" className="form-input" placeholder="Enter Phone" required />
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-input" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <select className="form-select" required>
                                <option value="">Select Service Type</option>
                                <option value="veterinary">Veterinary Care</option>
                                <option value="grooming">Pet Grooming</option>
                                <option value="boarding">Pet Boarding</option>
                                <option value="training">Pet Training</option>
                                <option value="emergency">Emergency Services</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <textarea className="form-textarea" placeholder="Enter Message" required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <div className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <div className="stat-icon"><i className="fa-solid fa-users"></i></div>
                        <div className="stat-number counter" data-target="754">0</div>
                        <div className="stat-label">Customers</div>
                        <div className="stat-description">Architecto ullam tenetur quia nemo ratione tempora.</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon"><i className="fa-solid fa-user-doctor"></i></div>
                        <div className="stat-number counter" data-target="698">0</div>
                        <div className="stat-label">Professionals</div>
                        <div className="stat-description">Architecto ullam tenetur quia nemo ratione tempora.</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon"><i className="fa-solid fa-calendar"></i></div>
                        <div className="stat-number counter" data-target="1106">0</div>
                        <div className="stat-label">Products</div>
                        <div className="stat-description">Architecto ullam tenetur quia nemo ratione tempora.</div>
                    </div>

                    <div className="stat-item">
                        <div className="stat-icon"><i className="fa-solid fa-dog"></i></div>
                        <div className="stat-number counter" data-target="4469">0</div>
                        <div className="stat-label">Pets Hosted</div>
                        <div className="stat-description">Architecto ullam tenetur quia nemo ratione tempora.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment