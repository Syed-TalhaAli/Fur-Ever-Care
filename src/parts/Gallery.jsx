import React, { useState } from 'react';
import "../assets/styles/gallery.css";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const handleFilter = (category) => {
    setFilter(category);
  };

  return (
    <div className="galleryContainer">
      <div className="g-heading">
        <h1><span className="highlight">Pet Profile</span></h1>
      </div>

      {/* Filter Buttons */}
      <div className="filter-tabs">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === "dogs" ? "active" : ""}`}
          onClick={() => handleFilter("dogs")}
        >
          Dogs
        </button>
        <button
          className={`filter-btn ${filter === "cats" ? "active" : ""}`}
          onClick={() => handleFilter("cats")}
        >
          Cats
        </button>
      </div>

      {/* Gallery Items */}
      <div className="gallery">
        {/* Dogs */}
        {["dog 1.jpg","dog 2.jpg","dog 3.jpg","dog 4.jpg","dog 5.jpg","dog 6.jpg"].map((dog, i) => (
          (filter === "all" || filter === "dogs") && (
            <div key={i} className="gallery-item" data-category="dogs">
              <img src={`Gallery/${dog}`} alt={`Dog ${i+1}`} />
              <div className="overlay">
                <h3>Dog {i+1}</h3>
                <p>Friendly description about dog {i+1}</p>
              </div>
            </div>
          )
        ))}

        {/* Cats */}
        {["cat 1.jpg","cat 2.jpg","cat 3.jpg","cat 4.jpg","cat 5.jpg","cat 6.jpg"].map((cat, i) => (
          (filter === "all" || filter === "cats") && (
            <div key={i} className="gallery-item" data-category="cats">
              <img src={`Gallery/${cat}`} alt={`Cat ${i+1}`} />
              <div className="overlay">
                <h3>Cat {i+1}</h3>
                <p>Friendly description about cat {i+1}</p>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Gallery;
