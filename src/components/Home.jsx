import React from 'react'
import Banner from './Banner'
import Cabins from './Cabins'
import Facilities from './Facilities'
import Forest from './Forest'
import Silder from './Silder'

const Home = () => {
  return (
    <>
        <Banner />
        <Cabins />
        <div style={{marginTop: 150, paddingLeft: 150, }} >
        <Silder/>
        </div>
        <Forest />
        <Facilities />

    </>
  )
}

export default Home