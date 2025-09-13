import "../assets/styles/footer.css"
import Logo from "../assets/images/Logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo-section">
                        <div className="footer-logo">
                            <img src={Logo} alt="logo" />
                        </div>
                        <p className="footer-description">
                            Dedicated to providing exceptional care for your beloved pets. From routine check-ups to emergency care, we're here for you and your furry family members 24/7.
                        </p>
                    </div>

                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Pet Care</a></li>
                            <li><a href="#">Product Showcase</a></li>
                            <li><a href="#">Emergency & Vet</a></li>
                            <li><a href="#">Health Check-ups</a></li>
                            <li><a href="#">Grooming</a></li>
                            <li><a href="#">Pet Training</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Appointments</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>Contact Info</h3>
                        <ul>
                            <li><a href="tel:+1234567890">📞 (021) 123-45678</a></li>
                            <li><a href="mailto:info@furevercare.com">✉️ info@furevercare.com</a></li>
                            <li><a href="#">📍 Karachi, Sindh, Pakistan</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        © 2025 Furever Care. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;