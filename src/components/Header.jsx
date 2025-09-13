import "../assets/styles/header.css";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">

            <div className="logo-section">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </div>

            <nav className="navbar">
                <div className="nav-container">
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">Pet Care</a>
                            <div className="dropdown">
                                <Link to="/petProfile" className="dropdown-item">Pet Profile</Link>
                                <Link to="/feedingguide" className="dropdown-item">Feeding Guide</Link>
                                <a href="#" className="dropdown-item">Grooming Videos</a>
                                <Link to="/health" className="dropdown-item">Health Tips</Link>
                                <Link to="/training" className="dropdown-item">Training Tips</Link>
                            </div>
                        </li>

                        <li className="nav-item">
                            {/* <a href="#" className="nav-link">Pet Product Showcase</a> */}
                            <Link to="/showCaseProduct" className="nav-link">Pet Product Showcase</Link>
                        </li>

                        <li className="nav-item">
                            <a href="#" className="nav-link">Emergency & Vet</a>
                            <div className="dropdown">
                                <a href="#" className="dropdown-item">Emergency Contact Numbers</a>
                                <a href="#" className="dropdown-item">24/7 Vet Hotline</a>
                                <a href="#" className="dropdown-item">Nearest Emergency Clinics</a>
                                <a href="#" className="dropdown-item">First Aid Guide</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <Link to="/feedback" className="nav-link">Feedback</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact Us</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/petshellter" className="nav-link">Pet adoption</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </header>
    );
}

export default Header;