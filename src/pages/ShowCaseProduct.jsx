import React, { useState, useCallback } from "react";
import "../assets/styles/product.css";
import Header from "../components/Header";
import MasterLayout from "../layouts/MasterLayout";

const ShowCaseProduct = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const showProducts = (categoryId) => {
        setActiveCategory(categoryId);
        const element = document.getElementById(categoryId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Product categories
    const categories = [
        { id: "dog-food", name: "Dog Food", image: "Store/dog food.jpg" },
        { id: "cat-food", name: "Cat Food", image: "Store/cat food.jpg" },
        { id: "toys", name: "Toys", image: "Store/Toys.jpg" },
        { id: "grooming", name: "Grooming Essentials", image: "Store/Grooming Essentials.jpg" },
        { id: "bedding", name: "Bedding & Apparel", image: "Store/Bedding & Apparel.jpg" },
        { id: "supplements", name: "Health Supplements", image: "Store/Health Supplements.jpg" }
    ];

    // Products
    const dogFoodProducts = [
        { id: 1, name: "Premium Chicken Kibble", price: 25, image: "Store/premium chicken kiddi.jpg" },
        { id: 2, name: "Beef & Veggie Mix", price: 28, image: "Store/Beef and veg mix.jpg" },
        { id: 3, name: "Salmon Energy Meal", price: 30, image: "Store/salmon dog food.jpg" },
        { id: 4, name: "Lamb Grain-Free", price: 26, image: "Store/Lamb Grain-Free.jpg" },
        { id: 5, name: "Puppy Starter Pack", price: 20, image: "Store/Puppy Starter Pack.jpg" }
    ];

    const catFoodProducts = [
        { id: 6, name: "Salmon Crunch", price: 15, image: "Store/salmon cat food.jpg" },
        { id: 7, name: "Chicken & Rice Blend", price: 17, image: "Store/chicken and rice for cat.jpg" },
        { id: 8, name: "Tuna Delight", price: 16, image: "Store/tuna delight for cat.jpg" },
        { id: 9, name: "Lamb Formula", price: 18, image: "Store/lamb formula for cat.jpg" },
        { id: 10, name: "Hairball Care Mix", price: 19, image: "Store/hairballs care for cat.jpg" }
    ];

    // Add to cart
    const handleAddToCart = useCallback((product) => {
        console.log(`Added ${product.name} to cart`);
    }, []);

    // Product Card
    const renderProductCard = (product) => (
        <div 
            key={product.id} 
            className="product-card"
            style={{ flex: "0 0 23%", margin: "1%" }} // 4 cards per row
        >
            <img 
                src={product.image} 
                alt={product.name}
                loading="lazy"
                onError={(e) => { e.target.src = '/placeholder-product.jpg'; }}
            />
            <h4>{product.name}</h4>
            <p className="price">${product.price}</p>
            <button 
                className="buy-btn"
                onClick={() => handleAddToCart(product)}
                aria-label={`Add ${product.name} to cart`}
            >
                Add to Cart
            </button>
        </div>
    );

    return (
        <>
            <Header />
            <MasterLayout>
                {/* Heading */}
                <div className="heading">
                    <h1><span className="highlight">FurEver Store</span></h1>
                </div>

                {/* Hero Image */}
                <div className="petStoreHero">
                    <img 
                        src="Store/Pet Store.png" 
                        alt="Pet Store - Your one-stop shop for pet supplies"
                        onError={(e) => { e.target.src = '/placeholder-hero.jpg'; }}
                    />
                </div>

                {/* Subheading */}
                <div className="subheading">
                    <p>Where love meets care, keeping pets happy, healthy, and playful.</p>
                </div>

                {/* Categories */}
                <section className="categories" role="navigation" aria-label="Product categories">
                    {categories.map((category) => (
                        <div 
                            key={category.id}
                            className="category-card" 
                            onClick={() => showProducts(category.id)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    showProducts(category.id);
                                }
                            }}
                            role="button"
                            tabIndex={0}
                            aria-label={`View ${category.name} products`}
                        >
                            <img 
                                src={category.image} 
                                alt={category.name}
                                onError={(e) => { e.target.src = '/placeholder-category.jpg'; }}
                            />
                            <h3>{category.name}</h3>
                        </div>
                    ))}
                </section>

                {/* Dog Food Products */}
                <section
                    id="dog-food"
                    className={`products ${activeCategory === "dog-food" ? "active" : ""}`}
                    aria-hidden={activeCategory !== "dog-food"}
                >
                    <h2>Dog Food</h2>
                    <div className="products-grid">
                        {dogFoodProducts.map(renderProductCard)}
                    </div>
                </section>

                {/* Cat Food Products */}
                <section
                    id="cat-food"
                    className={`products ${activeCategory === "cat-food" ? "active" : ""}`}
                    aria-hidden={activeCategory !== "cat-food"}
                >
                    <h2>Cat Food</h2>
                    <div className="products-grid">
                        {catFoodProducts.map(renderProductCard)}
                    </div>
                </section>

                {/* Placeholder Sections */}
                {["toys", "grooming", "bedding", "supplements"].map((categoryId) => (
                    <section
                        key={categoryId}
                        id={categoryId}
                        className={`products ${activeCategory === categoryId ? "active" : ""}`}
                        aria-hidden={activeCategory !== categoryId}
                    >
                        <h2>{categories.find(cat => cat.id === categoryId)?.name}</h2>
                        <div className="products-grid">
                            <p>Products coming soon...</p>
                        </div>
                    </section>
                ))}
            </MasterLayout>
        </>
    );
};

export default ShowCaseProduct;
