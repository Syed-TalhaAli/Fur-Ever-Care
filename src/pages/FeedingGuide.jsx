import React from 'react'
import Header from "../components/Header"
import MasterLayout from "../layouts/MasterLayout"
import "../assets/styles/petstyle.css"
import Footer from '../components/Footer'

const FeedingGuide = () => {
    return (
        <>
            <Header />
            <MasterLayout>
                <div className="feedingSection">

                    <div className="heading">
                        <h1><span className="highlight">Feeding Guide</span></h1>
                    </div>
                    <div className="feedingHero">
                        <img src="feedingHero.png" alt="#" />
                    </div>
                    <div className="subheading">
                        <p>This guide provides tailored nutrition recommendations to help ensure healthy growth and overall
                            well-being.</p>
                    </div>

                    <div className="grid">
                        <article className="card dog" aria-labelledby="dog-title">
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                                <div className="logo" aria-hidden> <i className="fa-solid fa-dog" style={{ color: "#1E3A8A" }}></i></div>
                                <div>
                                    <h3 id="dog-title">Dog Feeding Guide</h3>
                                    <div className="muted">By weight &amp; age — portions in grams</div>
                                </div>
                            </div>

                            <table role="table" aria-label="Dog feeding chart">
                                <thead>
                                    <tr>
                                        <th>Dog Size</th>
                                        <th>Puppy (2–12 mo)</th>
                                        <th>Adult (1–7 yrs)</th>
                                        <th>Senior (7+ yrs)</th>
                                        <th>Meals/Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="small">Small (1–10 kg)</td>
                                        <td>40–120 g</td>
                                        <td>60–180 g</td>
                                        <td>50–150 g</td>
                                        <td>3–4 (puppy) / 2 (adult)</td>
                                    </tr>
                                    <tr>
                                        <td className="small">Medium (10–25 kg)</td>
                                        <td>150–300 g</td>
                                        <td>200–400 g</td>
                                        <td>180–350 g</td>
                                        <td>3 (puppy) / 2 (adult)</td>
                                    </tr>
                                    <tr>
                                        <td className="small">Large (25–40 kg)</td>
                                        <td>300–500 g</td>
                                        <td>400–600 g</td>
                                        <td>350–500 g</td>
                                        <td>3 (puppy) / 2 (adult)</td>
                                    </tr>
                                    <tr>
                                        <td className="small">Giant (40+ kg)</td>
                                        <td>500–800 g</td>
                                        <td>600–900 g</td>
                                        <td>500–700 g</td>
                                        <td>3 (puppy) / 2 (adult)</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="note">Portions are approximate — adjust for activity, breed, or health.</div>
                        </article>

                        <article className="card cat" aria-labelledby="cat-title">
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                                <div className="logo" aria-hidden><i className="fa-solid fa-cat" style={{ color: "#1E3A8A" }} ></i></div>
                                <div>
                                    <h3 id="cat-title">Cat Feeding Guide</h3>
                                    <div className="muted">By weight &amp; purpose — portions in grams</div>
                                </div>
                            </div>

                            <table role="table" aria-label="Cat feeding chart">
                                <thead>
                                    <tr>
                                        <th>Cat Weight</th>
                                        <th>Kitten (2–12 mo)</th>
                                        <th>Adult (1–7 yrs)</th>
                                        <th>Senior (7+ yrs)</th>
                                        <th>Meals/Day</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="small">2–3 kg</td>
                                        <td>40–60 g</td>
                                        <td>35–55 g</td>
                                        <td>30–45 g</td>
                                        <td>4–5 (kitten) / 2–3 (adult)</td>
                                    </tr>
                                    <tr>
                                        <td className="small">3–5 kg</td>
                                        <td>60–90 g</td>
                                        <td>55–80 g</td>
                                        <td>45–70 g</td>
                                        <td>4–5 (kitten) / 2–3 (adult)</td>
                                    </tr>
                                    <tr>
                                        <td className="small">5–7 kg</td>
                                        <td>90–120 g</td>
                                        <td>80–100 g</td>
                                        <td>70–90 g</td>
                                        <td>4–5 (kitten) / 2–3 (adult)</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="note">Cats prefer small, frequent meals — monitor body condition score.</div>
                        </article>
                    </div>

                    <div className="subheading">
                        <p>For more guidence please book an appointment</p>
                        <button>Plan My Pet’s Meals</button>
                    </div>
                </div>
            </MasterLayout>
            <Footer/>
        </>
    )
}

export default FeedingGuide