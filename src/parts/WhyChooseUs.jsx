import React from 'react'

const WhyChooseUs = () => {
    return (
        <div className="whyChooseUsContainer">
            <div className="section-title">
                <h1>Why <span className="highlight">Choose Us?</span></h1>
            </div>

            <div className="features-grid">

                <div className="feature-card">
                    <div className="icon-container">
                        <div className="icon best-industry-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="feature-title">Expert Care</h3>
                    <p className="feature-description">Our team of trained professionals brings years of experience and genuine compassion to every pet we care for. We understand that each pet is unique and deserves personalized attention to ensure their happiness and health.</p>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <div className="icon customer-support-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7C14.5 6.4 13.8 6 13 6V8H11V6C10.2 6 9.5 6.4 9 7L3 7V9H9C9 10.1 9.9 11 11 11V16.5C11 17.9 12.1 19 13.5 19S16 17.9 16 16.5V11C17.1 11 18 10.1 18 9H21ZM7.5 12C8.3 12 9 12.7 9 13.5S8.3 15 7.5 15 6 14.3 6 13.5 6.7 12 7.5 12ZM16.5 12C17.3 12 18 12.7 18 13.5S17.3 15 16.5 15 15 14.3 15 13.5 15.7 12 16.5 12Z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="feature-title">Customized Services</h3>
                    <p className="feature-description">We don’t believe in one-size-fits-all. Whether your pet needs special dietary accommodations, specific grooming styles, or extra playtime, we create care plans tailored to your pet’s individual needs and personality.</p>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <div className="icon emergency-services-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V4C15 2.9 14.1 2 13 2H11C9.9 2 9 2.9 9 4V5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V12L18.92 6.01ZM11 4H13V5H11V4ZM19 20H5V14H19V20ZM17.5 7L19.2 12H4.8L6.5 7H17.5Z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="feature-title">Safe & Comfortable</h3>
                    <p className="feature-description">Your pet’s safety and comfort are our top priorities. Our clean, secure facilities provide a stress-free environment where pets can relax and thrive, giving you peace of mind while you’re away</p>
                </div>

                <div className="feature-card">
                    <div className="icon-container">
                        <div className="icon veterinary-help-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 14.5C12 13.1 13.1 12 14.5 12S17 13.1 17 14.5V17H15V22H13V17H11V22H9V17H7V14.5C7 13.1 8.1 12 9.5 12S12 13.1 12 14.5ZM12 8C8.1 8 5 11.1 5 15H7C7 12.2 9.2 10 12 10S17 12.2 17 15H19C19 11.1 15.9 8 12 8Z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="feature-title">All-in-One Care</h3>
                    <p className="feature-description">From daily walks and grooming to veterinary check-ups and emergency support, we offer a full range of services to keep your pet healthy, happy, and well-cared for so you can find everything you need in one trusted place.</p>
                </div>

            </div>
        </div>
    )
}

export default WhyChooseUs