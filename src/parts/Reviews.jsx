import React from 'react'
import SectionHeading from '../components/SectionHeading'

const Reviews = () => {
    return (
        <>
        <SectionHeading text="Customers Reviews" size="60" />
            <div className="reviews-container">
                <div className="review-card">
                    <div className="reviewer-info">
                        <img src="reviews/1.jpg"
                            alt="Sarah Miller" className="reviewer-avatar" />
                        <div className="reviewer-details">
                            <h3>SARAH MILLER</h3>
                            <div className="reviewer-title">Pet Owner, Golden Retriever</div>
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>
                    </div>
                    <p className="review-text">
                        The care my Golden Retriever Max received was absolutely exceptional. The veterinary team was incredibly
                        knowledgeable and gentle.
                    </p>
                </div>

                <div className="review-card">
                    <div className="reviewer-info">
                        <img src="reviews/2.jpg"
                            alt="Michael Johnson" className="reviewer-avatar" />
                        <div className="reviewer-details">
                            <h3>MICHAEL JOHNSON</h3>
                            <div className="reviewer-title">Cat Parent, Rescue Cats</div>
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>
                    </div>
                    <p className="review-text">
                        As someone with two rescue cats, I needed a veterinary clinic that understood their special needs.
                        Highly recommended!
                    </p>
                </div>

                <div className="review-card">
                    <div className="reviewer-info">
                        <img src="reviews/3.jpg"
                            alt="Lisa Wang" className="reviewer-avatar" />
                        <div className="reviewer-details">
                            <h3>LISA WANG</h3>
                            <div className="reviewer-title">Dog Groomer, French Bulldog</div>
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>
                    </div>
                    <p className="review-text">
                        Working as a professional dog groomer, I have high standards for pet care. This clinic exceeded my
                        expectations when my French Bulldog Benny needed emergency treatment.
                    </p>
                </div>

                <div className="review-card">
                    <div className="reviewer-info">
                        <img src="reviews/4.jpg"
                            alt="Robert Davis" className="reviewer-avatar" />
                        <div className="reviewer-details">
                            <h3>ROBERT DAVIS</h3>
                            <div className="reviewer-title">Senior Pet Owner, Border Collie</div>
                            <div className="stars">
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                                <span className="star">★</span>
                            </div>
                        </div>
                    </div>
                    <p className="review-text">
                        My Border Collie Luna has been coming here for three years now, and the consistency of excellent care
                        never ceases to amaze me.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Reviews