import React, { useState, useEffect } from 'react'

const Auth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(null)
    const [formData, setFormData] = useState({
        userName: '',
        userType: ''
    })

    // Check if user is already logged in on component mount
    useEffect(() => {
        // Note: In Claude.ai artifacts, localStorage is not supported
        // In your actual project, uncomment these lines:
        /*
        const savedUserData = localStorage.getItem('fureverCareUser')
        if (savedUserData) {
            const parsedData = JSON.parse(savedUserData)
            setUserData(parsedData)
            setIsLoggedIn(true)
        }
        */
    }, [])

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!formData.userName.trim() || !formData.userType) {
            alert('Please fill in all fields')
            return
        }

        const userData = {
            name: formData.userName.trim(),
            userType: formData.userType,
            loginTime: new Date().toISOString()
        }

        // For your actual project, uncomment this line:
        // localStorage.setItem('fureverCareUser', JSON.stringify(userData))
        
        setUserData(userData)
        setIsLoggedIn(true)
        
        console.log('User logged in:', userData)
    }

    // Handle logout
    const handleLogout = () => {
        // localStorage.removeItem('fureverCareUser')
        setUserData(null)
        setIsLoggedIn(false)
        setFormData({ userName: '', userType: '' })
    }

    // If user is logged in, show welcome message
    if (isLoggedIn && userData) {
        return (
            <div className="authOverly">
                <div className="authContainer">
                    <h1 className='authHeading'>WELCOME {userData.name}!</h1>
                    <p className="subtitle">You are logged in as: {userData.userType}</p>
                    <p className="tagline">Login Time: {new Date(userData.loginTime).toLocaleString()}</p>
                    
                    <button onClick={handleLogout} className="submit-btn">
                        Logout
                    </button>
                </div>
            </div>
        )
    }

    // Login form (if user is not logged in)
    return (
        <div className="authOverly">
            <div className="authContainer">
                <h1 className='authHeading'>WELCOME</h1>
                <p className="subtitle">FurEver Care - Where Compassion Meets Expertise</p>
                <p className="tagline">Love. Care. Rescue. Repeat</p>

                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="userName">Enter Your Name:</label>
                        <input 
                            type="text" 
                            id="userName" 
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                            className="name-input" 
                            placeholder="Your name here..." 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Who's Using FurEver Care Today?</label>
                        <div className="radio-group">
                            <div className="radio-option">
                                <input 
                                    type="radio" 
                                    name="userType" 
                                    value="owner" 
                                    id="owner" 
                                    checked={formData.userType === 'owner'}
                                    onChange={handleInputChange}
                                />
                                <span className="icon"><i className="fa-solid fa-house"></i></span>
                                <span className="label-text">Pet Owner</span>
                            </div>
                            <div className="radio-option">
                                <input 
                                    type="radio" 
                                    name="userType" 
                                    value="vet" 
                                    id="vet" 
                                    checked={formData.userType === 'vet'}
                                    onChange={handleInputChange}
                                />
                                <span className="icon"><i className="fa-solid fa-user-doctor"></i></span>
                                <span className="label-text">Veterinarian</span>
                            </div>
                            <div className="radio-option">
                                <input 
                                    type="radio" 
                                    name="userType" 
                                    value="volunteer" 
                                    id="volunteer" 
                                    checked={formData.userType === 'volunteer'}
                                    onChange={handleInputChange}
                                />
                                <span className="icon"><i className="fa-solid fa-handshake-angle"></i></span>
                                <span className="label-text">Animal Shelter / Rescue Volunteer</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleSubmit} className="submit-btn">
                        Join FurEver Care Family
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth