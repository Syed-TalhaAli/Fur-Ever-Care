import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import MasterLayout from '../layouts/MasterLayout';
import Section from '../components/Section';
import Footer from '../components/Footer';

const PetStore = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const productsRef = useRef(null);

    const categories = [
        { id: 'dog-food', name: 'Dog Food', image: 'Store/dog food.jpg' },
        { id: 'cat-food', name: 'Cat Food', image: 'Store/cat food.jpg' },
        { id: 'toys', name: 'Toys', image: 'Store/Toys.jpg' },
        { id: 'grooming', name: 'Grooming Essentials', image: 'Store/Grooming Essentials.jpg' },
        { id: 'bedding', name: 'Bedding & Apparel', image: 'Store/Bedding & Apparel.jpg' },
        { id: 'supplements', name: 'Health Supplements', image: 'Store/Health Supplements.jpg' }
    ];

    const products = {
        'dog-food': {
            title: 'Dog Food',
            items: [
                { name: 'Premium Chicken Kibble', price: 25, image: 'Store/premium chicken kiddi.jpg' },
                { name: 'Beef & Veggie Mix', price: 28, image: 'Store/Beef and veg mix.jpg' },
                { name: 'Salmon Energy Meal', price: 30, image: 'Store/salmon dog food.jpg' },
                { name: 'Lamb Grain-Free', price: 26, image: 'Store/Lamb Grain-Free.jpg' },
                { name: 'Puppy Starter Pack', price: 20, image: 'Store/Puppy Starter Pack.jpg' }
            ]
        },
        'cat-food': {
            title: 'Cat Food',
            items: [
                { name: 'Salmon Crunch', price: 15, image: 'Store/salmon cat food.jpg' },
                { name: 'Chicken & Rice Blend', price: 17, image: 'Store/chicken and rice for cat.jpg' },
                { name: 'Tuna Delight', price: 16, image: 'Store/tuna delight for cat.jpg' },
                { name: 'Lamb Formula', price: 18, image: 'Store/lamb formula for cat.jpg' },
                { name: 'Hairball Care Mix', price: 19, image: 'Store/hairballs care for cat.jpg' }
            ]
        },
        'toys': {
            title: 'Toys',
            items: [
                { name: 'Rubber Chew Bone', price: 10, image: 'Store/Rubber Chew Bone.jpg' },
                { name: 'Cat Teaser Wand', price: 12, image: 'Store/Cat Teaser Wand.jpg' },
                { name: 'Tennis Ball Pack', price: 8, image: 'Store/Tennis Ball Pack.jpg' },
                { name: 'Interactive Puzzle Toy', price: 15, image: 'Store/Interactive Puzzle Toy.jpg' },
                { name: 'Feather Mouse', price: 7, image: 'Store/Feather Mouse.jpg' }
            ]
        },
        'grooming': {
            title: 'Grooming Essentials',
            items: [
                { name: 'Pet Shampoo', price: 12, image: 'Store/Pet Shampoo.jpg' },
                { name: 'Fur Brush', price: 10, image: 'Store/Fur Brush.jpg' },
                { name: 'Nail Clipper', price: 8, image: 'Store/Nail Clipper.jpg' },
                { name: 'Paw Balm', price: 9, image: 'Store/Paw Balm.jpg' },
                { name: 'Detangling Spray', price: 11, image: 'Store/Detangling Spray.jpg' }
            ]
        },
        'bedding': {
            title: 'Bedding & Apparel',
            items: [
                { name: 'Cozy Pet Bed', price: 35, image: 'Store/Cozy Pet Bed.jpg' },
                { name: 'Warm Blanket', price: 20, image: 'Store/Warm Blanket.jpg' },
                { name: 'Raincoat', price: 18, image: 'Store/Raincoat.jpg' },
                { name: 'Winter Jacket', price: 25, image: 'Store/Winter Jacket.jpg' },
                { name: 'Cooling Mat', price: 22, image: 'Store/Cooling Mat.jpg' }
            ]
        },
        'supplements': {
            title: 'Health Supplements',
            items: [
                { name: 'Joint Care Tablets', price: 30, image: 'Store/Joint Care Tablets.jpg' },
                { name: 'Omega-3 Oil', price: 28, image: 'Store/Omega-3 Oil.jpg' },
                { name: 'Multivitamins', price: 25, image: 'Store/Multivitamins.jpg' },
                { name: 'Probiotic Powder', price: 27, image: 'Store/Probiotic Powder.jpg' },
                { name: 'Immune Booster', price: 29, image: 'Store/Immune Booster.jpg' }
            ]
        }
    };

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        setTimeout(() => {
            if (productsRef.current) {
                productsRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 100);
    };

    const handleAddToCart = (productName, price) => {
        alert(`Added "${productName}" ($${price}) to cart!`);
    };

    return (
        <>
            <Header />
            <MasterLayout>
                <Section>
                    <div style={{
                        fontFamily: "'Segoe UI', sans-serif",
                        margin: 0,
                        background: '#f9f9f9',
                        color: '#333',
                        minHeight: '100vh'
                    }}>
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '40px'
                        }}>
                            <h1 style={{
                                fontSize: '5rem',
                                color: '#333',
                                marginBottom: '10px',
                                margin: 0
                            }}>
                                <span style={{ color: '#4CAF50' }}>FurEver Store</span>
                            </h1>
                        </div>

                        <div style={{
                            background: '#fff',
                            borderRadius: '15px',
                            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                            margin: '0 20px',
                            overflow: 'hidden'
                        }}>
                            <img
                                src="Store/Pet Store.png"
                                alt="Pet Store Hero"
                                style={{
                                    width: '100%',
                                    borderRadius: '15px',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>

                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                            fontSize: '1.5rem',
                            color: '#555'
                        }}>
                            <p>Where love meets care, keeping pets happy, healthy, and playful.</p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '20px',
                            margin: '30px auto',
                            maxWidth: '1200px',
                            padding: '0 20px'
                        }}>
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    onClick={() => handleCategoryClick(category.id)}
                                    style={{
                                        background: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease',
                                        textAlign: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-6px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        style={{
                                            width: '100%',
                                            height: '160px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <h3 style={{
                                        margin: '15px 0',
                                        fontSize: '18px',
                                        color: '#444'
                                    }}>
                                        {category.name}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {activeCategory && (
                            <div
                                ref={productsRef}
                                style={{
                                    margin: '40px auto',
                                    maxWidth: '1200px',
                                    padding: '0 20px'
                                }}
                            >
                                <h2 style={{
                                    textAlign: 'center',
                                    marginBottom: '30px',
                                    color: '#222',
                                    fontSize: '2.5rem'
                                }}>
                                    {products[activeCategory].title}
                                </h2>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                    gap: '20px'
                                }}>
                                    {products[activeCategory].items.map((product, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                background: 'white',
                                                borderRadius: '12px',
                                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                                overflow: 'hidden',
                                                paddingBottom: '15px',
                                                textAlign: 'center',
                                                transition: 'transform 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'scale(1.05)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'scale(1)';
                                            }}
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                style={{
                                                    width: '100%',
                                                    height: '180px',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                            <h4 style={{
                                                margin: '10px 0 5px',
                                                fontSize: '17px',
                                                color: '#333'
                                            }}>
                                                {product.name}
                                            </h4>
                                            <p style={{
                                                color: '#1E3A8A',
                                                fontSize: '16px',
                                                fontWeight: 'bold',
                                                margin: '5px 0'
                                            }}>
                                                ${product.price}
                                            </p>
                                            <button
                                                onClick={() => handleAddToCart(product.name, product.price)}
                                                style={{
                                                    marginTop: '10px',
                                                    padding: '8px 16px',
                                                    background: '#1E3A8A',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '20px',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    transition: 'background 0.3s'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.background = '#3d64d0';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.background = '#1E3A8A';
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!activeCategory && (
                            <div style={{
                                textAlign: 'center',
                                padding: '60px 20px',
                                color: '#666',
                                fontSize: '1.2rem'
                            }}>
                                <p>🐾 Click on any category above to explore our products!</p>
                            </div>
                        )}
                    </div>
                </Section>
            </MasterLayout>
            <Footer/>
        </>
    );
};

export default PetStore;