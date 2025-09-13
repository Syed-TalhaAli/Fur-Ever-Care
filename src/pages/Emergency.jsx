import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import MasterLayout from "../layouts/MasterLayout";
import "../assets/styles/emergency.css"

const Emergency = () => {
  return (
    <>
      <Header />
      <MasterLayout>
        <Section>
          <div className="container">
            <header>
              <div>
                <h1>Pet Emergency & Vet — 24/7 Help</h1>
                <p className="lead">
                  Quick access to emergency contacts, hotline, nearby clinics and
                  first-aid guidance for pets.
                </p>
              </div>
            </header>

            <main className="grid">
              {/* Emergency Contacts */}
              <div className="card contacts" id="contacts">
                <h2>Emergency Contact Numbers</h2>
                <p className="muted">Keep these handy — tap to call on mobile.</p>
                <ul>
                  <li className="contact">
                    <div className="meta">
                      <div className="title">Local Animal Rescue</div>
                      <div className="sub">Open 08:00 — 22:00</div>
                    </div>
                    <a href="tel:+923331234567">Call +92 333 1234567</a>
                  </li>

                  <li className="contact">
                    <div className="meta">
                      <div className="title">Pet Poison Hotline</div>
                      <div className="sub">Immediate advice for poisoning cases</div>
                    </div>
                    <a href="tel:+923001234567">Call +92 300 1234567</a>
                  </li>

                  <li className="contact">
                    <div className="meta">
                      <div className="title">Roadside Animal Rescue</div>
                      <div className="sub">For injured strays/vendor incidents</div>
                    </div>
                    <a href="tel:+923451234567">Call +92 345 1234567</a>
                  </li>
                </ul>
              </div>

              {/* Hotline */}
              <div className="card big-card" id="hotline">
                <h2>24/7 Vet Hotline</h2>
                <div className="hotline">
                  <div>
                    <div className="number">021 111 111 222</div>
                    <small className="muted">
                      Certified veterinary professionals available 24 hours.
                    </small>
                  </div>
                  <div>
                    <a className="cta" href="tel:+18009999999">
                      ☎️ Call Hotline Now
                    </a>
                    <a className="btn ghost" href="#first-aid">
                      View First Aid Guide
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinics */}
              <div className="card" id="clinics">
                <h2>Nearest Emergency Clinic</h2>
                <p className="muted">
                  Use your device location to find clinics nearby or choose one below.
                </p>
                <div
                  style={{
                    margin: "12px 0 18px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <button className="btn" id="find-nearest">
                    Find clinics near me
                  </button>
                  <a
                    className="btn ghost"
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Maps
                  </a>
                </div>

                <div className="clinic-list" id="clinic-list">
                  <div className="clinic">
                    <div className="left">
                      <div style={{ fontWeight: 700 }}>
                        City Animal Emergency
                      </div>
                      <div className="muted" style={{ fontSize: "13px" }}>
                        123 Pet St, Downtown — 2.1 km
                      </div>
                    </div>
                    <div className="actions">
                      <a className="btn" href="tel:+12125559876">
                        Call
                      </a>
                      <a
                        className="btn ghost"
                        href="https://www.google.com/maps/search/?api=1&query=City+Animal+Emergency"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Directions
                      </a>
                    </div>
                  </div>

                  <div className="clinic">
                    <div className="left">
                      <div style={{ fontWeight: 700 }}>
                        24/7 Vet Care Center
                      </div>
                      <div className="muted" style={{ fontSize: "13px" }}>
                        45 Heal Ave — 3.9 km
                      </div>
                    </div>
                    <div className="actions">
                      <a className="btn" href="tel:+12125558765">
                        Call
                      </a>
                      <a
                        className="btn ghost"
                        href="https://www.google.com/maps/search/?api=1&query=24%2F7+Vet+Care+Center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* First Aid Guide */}
              <div className="card" id="first-aid">
                <h2>First Aid Guide</h2>
                <p className="muted">
                  Quick steps to stabilise your pet before getting professional help.
                </p>

                <div className="accordion" style={{ marginTop: "12px" }}>
                  {/* Bleeding */}
                  <div className="acc-item">
                    <div className="acc-head" data-target="acc1">
                      <div>
                        <strong>Bleeding</strong>
                        <div className="muted" style={{ fontSize: "13px" }}>
                          How to control external bleeding
                        </div>
                      </div>
                      <div className="chip">Open</div>
                    </div>
                    <div className="acc-body" id="acc1">
                      <ol>
                        <li>
                          Apply direct pressure with a clean cloth for 5–10 minutes.
                        </li>
                        <li>
                          If bleeding soaks through, do not remove — add another
                          layer and keep pressure.
                        </li>
                        <li>
                          Keep the animal calm and transport to clinic quickly.
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* Choking */}
                  <div className="acc-item">
                    <div className="acc-head" data-target="acc2">
                      <div>
                        <strong>Choking</strong>
                        <div className="muted" style={{ fontSize: "13px" }}>
                          Suspected airway blockage
                        </div>
                      </div>
                      <div className="chip">Open</div>
                    </div>
                    <div className="acc-body" id="acc2">
                      <ol>
                        <li>
                          Look inside the mouth; only remove visible objects with
                          fingers.
                        </li>
                        <li>
                          For dogs, administer 5 back blows between shoulder blades,
                          then 5 abdominal thrusts (Heimlich) if trained.
                        </li>
                        <li>
                          Seek immediate veterinary care if not breathing or blockage
                          remains.
                        </li>
                      </ol>
                    </div>
                  </div>

                  {/* Poisoning */}
                  <div className="acc-item">
                    <div className="acc-head" data-target="acc3">
                      <div>
                        <strong>Poisoning</strong>
                        <div className="muted" style={{ fontSize: "13px" }}>
                          If you suspect ingestion of toxins
                        </div>
                      </div>
                      <div className="chip">Open</div>
                    </div>
                    <div className="acc-body" id="acc3">
                      <ol>
                        <li>
                          Call the Pet Poison Hotline (number above) and follow their
                          instructions.
                        </li>
                        <li>
                          Do not induce vomiting unless instructed by a professional.
                        </li>
                        <li>
                          Bring packaging or a photo of the substance to the clinic.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </Section>
      </MasterLayout>
      <Footer />
    </>
  );
};

export default Emergency;
