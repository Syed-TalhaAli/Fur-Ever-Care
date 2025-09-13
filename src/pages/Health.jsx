import React from 'react'
import Header from "../components/Header"
import MasterLayout from "../layouts/MasterLayout"
import "../assets/styles/petstyle.css"

const Health = () => {
    return (
        <>
            <Header />
            <MasterLayout>
                <div class="healthTips">
                    <div class="heading">
                        <h1><span class="highlight">Wellness for Every Paw.</span></h1>
                    </div>
                    <div class="healthHero">
                        <img src="healthTips.png" alt="#" />
                    </div>
                    <div class="subheading">
                        <p>Regular vet check-ups, vaccinations, and parasite prevention are essential for your pet's health.
                            Maintain a balanced diet, provide fresh water, and ensure daily exercise to keep your pet fit and
                            happy. Grooming and dental care are also important to prevent health issues.</p>
                    </div>
                    <main class="container-health">
                        <div class="card">
                            <h2>🐾 Daily Care</h2>
                            <ul>
                                <li>Fresh clean water always available</li>
                                <li>Balanced diet (dogs vs cats specific food)</li>
                                <li>Regular walks & playtime</li>
                                <li>Grooming & coat brushing</li>
                            </ul>
                        </div>

                        <div class="card">
                            <h2>💉 Preventive Health</h2>
                            <ul>
                                <li>Vaccination schedules for dogs & cats</li>
                                <li>Flea & tick prevention</li>
                                <li>Deworming reminders</li>
                                <li>Spaying / Neutering benefits</li>
                            </ul>
                        </div>

                        <div class="card">
                            <h2>🍽️ Nutrition & Feeding</h2>
                            <ul>
                                <li>Portion guide by age/weight</li>
                                <li>Feeding frequency (puppies/kittens vs adults)</li>
                                <li>Foods to avoid (chocolate, grapes, onions, bones)</li>
                                <li>Healthy treat ideas</li>
                            </ul>
                        </div>

                        <div class="card">
                            <h2>🩺 Health Signs</h2>
                            <ul>
                                <li>Healthy pets: bright eyes, shiny coat, active</li>
                                <li>Warning signs: vomiting, loss of appetite, lethargy</li>
                                <li>Bad breath or skin irritation = check vet</li>
                            </ul>
                        </div>

                        <div class="card">
                            <h2>🦷 Dental Care</h2>
                            <ul>
                                <li>Brush teeth regularly</li>
                                <li>Use dental chews & toys</li>
                                <li>Check gums for redness/bleeding</li>
                            </ul>
                        </div>

                        <div class="card">
                            <h2>🚑 Emergency Tips</h2>
                            <ul>
                                <li>First aid for cuts & small wounds</li>
                                <li>Choking rescue basics</li>
                                <li>Heatstroke warning signs</li>
                                <li>Call vet immediately for poison ingestion</li>
                            </ul>
                        </div>

                        <div class="card">
                            <h2>🌦️ Seasonal Care</h2>
                            <ul>
                                <li><b>Summer:</b> prevent overheating, provide shade</li>
                                <li><b>Winter:</b> warm bedding & paw protection</li>
                                <li><b>Festivals:</b> reduce stress from fireworks</li>
                            </ul>
                        </div>
                    </main>


                </div>
            </MasterLayout>
        </>
    )
}

export default Health