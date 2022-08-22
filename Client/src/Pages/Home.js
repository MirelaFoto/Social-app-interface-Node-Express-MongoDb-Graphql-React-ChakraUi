import React from 'react'
import Footer from '../components/Footer'

import AllUsers from '../Containers/AllUsers'
import SmallCardContainer from '../Containers/SmallCardContainer'



export default function Home() {
  return (
    <React.Fragment >
<SmallCardContainer />
    <AllUsers/>
    <Footer />
    
    </React.Fragment>
  )
}
