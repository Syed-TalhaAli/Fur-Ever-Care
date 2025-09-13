import React from 'react'
import Section from "../components/Section"
import MasterLayout from "../layouts/MasterLayout"
import Appointment from "../parts/Appointment"
import Gallery from "../parts/Gallery"
import HomeAboutSec from "../parts/HomeAboutSec"
import Reviews from "../parts/Reviews"
import Slider from "../parts/Slider"
import WhyChooseUs from "../parts/WhyChooseUs"
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header/>
      <MasterLayout>
        <Slider />
        <Section>
          <HomeAboutSec />
        </Section>
        <Section>
          <WhyChooseUs />
        </Section>
        <Section>
          <Appointment />
        </Section>
        <Section>
          <Reviews />
        </Section>
      </MasterLayout>
    </>
  )
}

export default Home