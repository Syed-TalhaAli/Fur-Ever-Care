import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/auth.css"
import Logo from "../assets/images/logo.png";


const Auth = () => {
    const [formData, setFormData] = useState({
        userName: "",
        userType: "",
    });

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUserData = localStorage.getItem("fureverCareUser");
        if (savedUserData) {
            setIsLoggedIn(true);
            navigate("/home");
        }
    }, [navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.userName.trim() || !formData.userType) {
            alert("Please fill in all fields");
            return;
        }

        const userData = {
            name: formData.userName.trim(),
            userType: formData.userType,
            loginTime: new Date().toISOString(),
        };

        localStorage.setItem("fureverCareUser", JSON.stringify(userData));
        setIsLoggedIn(true);

        navigate("/home");
    };

    return (
        <div className="authPage">
            <div className="authBox">
                <img src={Logo} style={{ width: "180px" }} alt="logo" />
                <h1 className="authTitle">WELCOME</h1>

                <form onSubmit={handleSubmit} className="authForm">
                    <div className="authGroup">
                        <label htmlFor="userName">Enter Your Name:</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                            className="authInput"
                            placeholder="Your name here..."
                            required
                        />
                    </div>

                    <div className="authGroup">
                        <label>Who's Using FurEver Care Today?</label>
                        <div className="authRadioGroup">
                            <div className="authRadioOption">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="owner"
                                    id="owner"
                                    checked={formData.userType === "owner"}
                                    onChange={handleInputChange}
                                />
                                <span className="authLabelText">Pet Owner</span>
                            </div>
                            <div className="authRadioOption">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="vet"
                                    id="vet"
                                    checked={formData.userType === "vet"}
                                    onChange={handleInputChange}
                                />
                                <span className="authLabelText">Veterinarian</span>
                            </div>
                            <div className="authRadioOption">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="volunteer"
                                    id="volunteer"
                                    checked={formData.userType === "volunteer"}
                                    onChange={handleInputChange}
                                />
                                <span className="authLabelText">Volunteer</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="authBtn">
                        Join FurEver Care Family
                    </button>
                </form>
            </div>
        </div>
    );

};

export default Auth;
