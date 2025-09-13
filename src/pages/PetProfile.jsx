import React from 'react'
import Header from "../components/Header"
import MasterLayout from "../layouts/MasterLayout"
import "../assets/styles/petprofile.css"
import Gallery from '../parts/Gallery'
import Footer from '../components/Footer'



const PetProfile = () => {
    return (
        <>
            <Header />
            <MasterLayout>
              <Gallery/>
            </MasterLayout>
            <Footer/>
        </>
    )
}

export default PetProfile