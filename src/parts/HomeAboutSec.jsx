import React from 'react'
import Button from '../components/Button'

const HomeAboutSec = () => {
    return (

        <div className="homeAboutSecGrid">
            <div className="homeAboutSecGridItem1">
                <h2>Welcome to <span style={{ color: "#1B308D" }}>Furever Care!</span> </h2>
                <p>At Furever Care, we’re passionate about providing everything your beloved pets need to live happy, healthy lives. From expert pet care and high-quality pet products to reliable emergency and veterinary help, we’re here to support you every step of the way. Whether it’s daily care, finding the best supplies, or urgent medical assistance, our dedicated team is committed to ensuring your pets receive the love and attention they deserve—because they’re part of your family, Furever. <br />
                    We believe every pet deserves personalized care and a safe, loving environment. Join us and experience a community that truly cares for your furry friends as much as you do.</p>
                    <Button text="Read More" color="#1B308D" />
            </div>
            <div className="homeAboutSecGridItem2">
                <img src="home-abt-img.png" alt="" />
            </div>
            
        </div>

    )
}

export default HomeAboutSec