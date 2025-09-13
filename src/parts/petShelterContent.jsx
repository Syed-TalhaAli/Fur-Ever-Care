import React, { useContext, useState } from "react";
import "../assets/styles/shellter.css";
import { AnimalesContext } from "../context/services";

const PetShelterContent = () => {
    const data = useContext(AnimalesContext);

    const [activeSection, setActiveSection] = useState("pet-adoption");

    // ✅ Fixed: Added 'type' filter
    const [filters, setFilters] = useState({
        type: "",
        age: "",
        breed: "",
    });

    const handleFilterChange = (e) => {
        const { id, value } = e.target;
        setFilters({ ...filters, [id.replace("pet-", "")]: value });
    };

    // ✅ Fixed: Added type filter to the filtering logic
    const filteredPets = data.petData.filter((pet) => {
        return (
            (filters.type === "" ||
                pet.type.toLowerCase() === filters.type.toLowerCase()) &&
            (filters.age === "" ||
                pet.age.toLowerCase() === filters.age.toLowerCase()) &&
            (filters.breed === "" ||
                pet.breed.toLowerCase().includes(filters.breed.toLowerCase()))
        );
    });

    return (
        <div className="container">
            <div className="header">
                <h1>🐾 Caring Paws Animal Shelter</h1>
                <p>Finding Forever Homes for Our Furry Friends</p>
            </div>

            <div className="nav-containerr">
                <div className="main-nav">
                    <button
                        className={`nav-btn ${activeSection === "pet-adoption" ? "active" : ""}`}
                        onClick={() => setActiveSection("pet-adoption")}
                    >
                        Pet Adoption
                    </button>
                    <button
                        className={`nav-btn ${activeSection === "gallery" ? "active" : ""}`}
                        onClick={() => setActiveSection("gallery")}
                    >
                        Gallery
                    </button>
                    <button
                        className={`nav-btn ${activeSection === "success-stories" ? "active" : ""}`}
                        onClick={() => setActiveSection("success-stories")}
                    >
                        Success Stories
                    </button>
                    <button
                        className={`nav-btn ${activeSection === "events" ? "active" : ""}`}
                        onClick={() => setActiveSection("events")}
                    >
                        Events
                    </button>
                    <button
                        className={`nav-btn ${activeSection === "shelter-contact" ? "active" : ""}`}
                        onClick={() => setActiveSection("shelter-contact")}
                    >
                        Shelter Contact
                    </button>
                </div>
            </div>

            {activeSection === "pet-adoption" && (
                <div id="pet-adoption" className="content-section active">
                    <h2 className="section-title">Pet Adoption</h2>

                    <div className="filter-section">
                        <h3 style={{ color: "#2c5aa0", marginBottom: "15px" }}>
                            🔍 Pet Filter
                        </h3>
                        <div className="filter-group">
                            <label>Type:</label>
                            <select id="pet-type" onChange={handleFilterChange}>
                                <option value="">All</option>
                                <option value="dog">Dogs</option>
                                <option value="cat">Cats</option>
                            </select>


                            <label>Breed:</label>
                            <input
                                type="text"
                                id="pet-breed"
                                placeholder="Search breed..."
                                onChange={handleFilterChange}
                            />
                        </div>
                    </div>

                    <div className="pet-grid" id="pet-listings">
                        {filteredPets.length > 0 ? (
                            filteredPets.map((pet) => (
                                <div key={pet.id} className="pet-card">
                                    <img src={pet.image} alt={pet.name} className="pet-image" />
                                    <h3>{pet.name}</h3>
                                    <p>
                                        {pet.breed} • {pet.age}
                                    </p>
                                    <small>Type: {pet?.type}</small>
                                </div>
                            ))
                        ) : (
                            <p>No pets found matching your filters 🐾</p>
                        )}
                    </div>
                </div>
            )}

            {/* ✅ Fixed: Gallery section now uses data.petData instead of data */}
            {activeSection === "gallery" && (
                <div id="gallery" className="content-section active">
                    <h2 className="section-title">Photo Gallery</h2>
                    <div className="pet-grid">
                        {data.petData && data.petData.length > 0 ? (
                            data.petData.map((pet) => (
                                <div key={pet.id} className="pet-card">
                                    <img src={pet.image} alt={pet.name} className="pet-image" />
                                    <h3>{pet.name}</h3>
                                    <p>{pet.breed} • {pet.type}</p>
                                </div>
                            ))
                        ) : (
                            <p>No images available 🐾</p>
                        )}
                    </div>
                </div>
            )}

            {activeSection === "success-stories" && (
                <div id="success-stories" className="content-section active">
                    <h2 className="section-title">Success Stories</h2>

                    <div className="success-story">
                        <h3>🐕 Max's Journey</h3>
                        <p>
                            Max was a shy rescue dog who found his confidence with the Johnson
                            family. After 6 months of love and training, he's now a certified
                            therapy dog helping children at the local hospital!
                        </p>
                        <small>Adopted: March 2024</small>
                    </div>

                    <div className="success-story">
                        <h3>🐱 Luna & Shadow</h3>
                        <p>
                            This bonded pair of cats were adopted together by the Martinez
                            family. They now rule their new home with purrs and cuddles,
                            bringing endless joy to their adoptive family.
                        </p>
                        <small>Adopted: January 2024</small>
                    </div>

                    <div className="success-story">
                        <h3>🐰 Coco the Bunny</h3>
                        <p>
                            Coco was found abandoned but has blossomed into a playful
                            companion. Her new family built her an amazing outdoor hutch where
                            she loves to hop around!
                        </p>
                        <small>Adopted: February 2024</small>
                    </div>
                </div>
            )}

            {activeSection === "events" && (
                <div id="events" className="content-section active">
                    <h2 className="section-title">Upcoming Events</h2>

                    <div className="event-item">
                        <h3>🏠 Adoption Drive Weekend</h3>
                        <p><strong>Date:</strong> September 21-22, 2025</p>
                        <p><strong>Time:</strong> 10:00 AM - 4:00 PM</p>
                        <p>
                            Special adoption event with reduced fees and meet & greet sessions
                            with all our available pets.
                        </p>
                    </div>

                    <div className="event-item">
                        <h3>🎓 Pet Training Workshop</h3>
                        <p><strong>Date:</strong> September 28, 2025</p>
                        <p><strong>Time:</strong> 2:00 PM - 5:00 PM</p>
                        <p>
                            Free workshop covering basic obedience training and behavioral
                            tips for new pet parents.
                        </p>
                    </div>

                    <div className="event-item">
                        <h3>🏃 Paws for a Cause 5K Run</h3>
                        <p><strong>Date:</strong> October 5, 2025</p>
                        <p><strong>Time:</strong> 8:00 AM</p>
                        <p>
                            Annual fundraising run to support our shelter operations. Bring
                            your four-legged friends!
                        </p>
                    </div>
                </div>
            )}

            {activeSection === "shelter-contact" && (
                <div id="shelter-contact" className="content-section active">
                    <h2 className="section-title">Contact Our Shelter</h2>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "30px",
                            marginBottom: "30px",
                        }}
                    >
                        <div>
                            <h3 style={{ color: "#2c5aa0", marginBottom: "15px" }}>📍 Visit Us</h3>
                            <p>
                                <strong>Address:</strong>
                                <br />
                                123 Compassion Street
                                <br />
                                Heartville, State 12345
                            </p>

                            <p>
                                <strong>Phone:</strong> (555) 123-PETS
                            </p>
                            <p>
                                <strong>Email:</strong> adopt@caringpaws.org
                            </p>

                            <h4 style={{ color: "#2c5aa0", margin: "20px 0 10px 0" }}>🕒 Hours</h4>
                            <p>
                                Monday - Friday: 10 AM - 6 PM
                                <br />
                                Saturday - Sunday: 9 AM - 5 PM
                            </p>
                        </div>

                        <div>
                            <h3 style={{ color: "#2c5aa0", marginBottom: "15px" }}>💌 Send Us a Message</h3>
                            <div className="contact-form">
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" name="firstName" required />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" required />
                                </div>
                                <div className="form-group full-width">
                                    <label>Email</label>
                                    <input type="email" name="email" required />
                                </div>
                                <div className="form-group full-width">
                                    <label>Interest</label>
                                    <select name="interest" required>
                                        <option value="">Select...</option>
                                        <option value="adoption">Pet Adoption</option>
                                        <option value="volunteer">Volunteering</option>
                                        <option value="donation">Donations</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group full-width">
                                    <label>Message</label>
                                    <textarea name="message" rows="4" required></textarea>
                                </div>
                                <div className="form-group full-width">
                                    <button type="submit" className="submit-btn">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PetShelterContent;