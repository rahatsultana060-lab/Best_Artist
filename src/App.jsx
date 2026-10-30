import React from 'react'
import Navbar from './Components/Navbar'
import Featured from './Components/Featured'
import Masterpieces from './Components/Masterpieces'
import Svgsection from './Components/Svgsection'
import Services from './Components/Services'
import Collection from './Components/Collection'
import Slider from './Components/Slider'
import Incredible from './Components/Incredible'
import ArtEvents from './Components/ArtEvents'
import JoinNow from './Components/JoinNow'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
        <Navbar/>
        <Svgsection/>
        <Featured/>
        <Masterpieces/>
        <Services/>
        <Collection/>
        <Slider/>
        <Incredible/>
        <ArtEvents/>
        <JoinNow/>
        <Footer/>

    </>
   
  )
}

export default App