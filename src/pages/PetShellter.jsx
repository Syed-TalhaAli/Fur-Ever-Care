import React, { useContext } from 'react'
import Header from '../components/Header'
import MasterLayout from '../layouts/MasterLayout'
import PetShellterContent from "../parts/petShelterContent"

const PetShellter = () => {

    return (
        <>
            <Header />
            <MasterLayout>
                 <PetShellterContent />
            </MasterLayout>
        </>
    )
}

export default PetShellter