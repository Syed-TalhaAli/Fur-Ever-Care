import React from 'react'
import Header from "../components/Header"
import MasterLayout from "../layouts/MasterLayout"
import "../assets/styles/petstyle.css"


const Training = () => {
    return (
        <>
            <Header />
            <MasterLayout>
                <div class="heading">
                    <h1><span class="highlight">Smart Training, Happy Pets</span></h1>
                </div>
                <div class="trainingHero">
                    <img src="trainingHero.png" alt="#" />
                </div>
                <div class="subheading">
                    <p>Regular vet check-ups, vaccinations, and parasite prevention are essential for your pet's health.
                        Maintain a balanced diet, provide fresh water, and ensure daily exercise to keep your pet fit and
                        happy. Grooming and dental care are also important to prevent health issues.</p>
                </div>
                <section class="container section">
                    <h2>Dog Training Tips</h2>
                    <div class="grid">
                        <div class="card">
                            <h3>Start Early & Stay Consistent</h3>
                            <p>Begin training as soon as possible. Puppies learn quickly, and older dogs can adapt too with
                                patience.</p>
                        </div>
                        <div class="card">
                            <h3>Positive Reinforcement</h3>
                            <p>Reward good behavior with treats, toys, or praise. Dogs repeat behaviors that earn rewards.</p>
                        </div>
                        <div class="card">
                            <h3>Basic Commands</h3>
                            <p>Teach sit, stay, come, down, and heel with short, fun sessions.</p>
                        </div>
                        <div class="card">
                            <h3>Leash Training</h3>
                            <p>Practice calm walking. Stop walking if your dog pulls until they calm down.</p>
                        </div>
                        <div class="card">
                            <h3>House Training</h3>
                            <p>Stick to a potty routine and reward your dog for doing it right.</p>
                        </div>
                        <div class="card">
                            <h3>Socialization</h3>
                            <p>Expose your dog to different people, pets, and places to reduce fear and anxiety.</p>
                        </div>
                        <div class="card">
                            <h3>Crate Training</h3>
                            <p>Make the crate a safe den for rest, not punishment.</p>
                        </div>
                        <div class="card">
                            <h3>Avoid Punishment</h3>
                            <p>Redirect unwanted behavior instead of shouting or hitting.</p>
                        </div>
                        <div class="card">
                            <h3>Patience & Repetition</h3>
                            <p>Keep training short, repeat often, and stay calm.</p>
                        </div>
                        <div class="card">
                            <h3>Common Issues</h3>
                            <p>Barking, chewing, and jumping can be managed with consistency and redirection.</p>
                        </div>
                    </div>
                </section>

                <section class="container section">
                    <h2>Cat Training Tips</h2>
                    <div class="grid">
                        <div class="card">
                            <h3>Motivate with Rewards</h3>
                            <p>Cats respond best to small treats, praise, or gentle petting.</p>
                        </div>
                        <div class="card">
                            <h3>Litter Training</h3>
                            <p>Keep the litter box clean and easily accessible.</p>
                        </div>
                        <div class="card">
                            <h3>Clicker Training</h3>
                            <p>Teach simple tricks like sit or high-five with a clicker and treats.</p>
                        </div>
                        <div class="card">
                            <h3>Redirect Scratching</h3>
                            <p>Provide posts and pads, and gently guide cats to them.</p>
                        </div>
                        <div class="card">
                            <h3>Carrier Training</h3>
                            <p>Make the carrier a positive space with toys and bedding.</p>
                        </div>
                        <div class="card">
                            <h3>Short Sessions</h3>
                            <p>Keep training 2–5 minutes long to maintain interest.</p>
                        </div>
                        <div class="card">
                            <h3>Play as Training</h3>
                            <p>Interactive toys help prevent boredom and build trust.</p>
                        </div>
                        <div class="card">
                            <h3>Introducing New Pets</h3>
                            <p>Start slow with scent swapping before direct contact.</p>
                        </div>
                        <div class="card">
                            <h3>Respect Boundaries</h3>
                            <p>Never force training—cats learn best when relaxed.</p>
                        </div>
                        <div class="card">
                            <h3>Routine & Stability</h3>
                            <p>Consistent feeding and play schedules build trust.</p>
                        </div>
                    </div>
                </section>

            </MasterLayout>
        </>
    )
}

export default Training