import React from 'react'
import OverbookingComponent from '../Components/OverbookingComponent/OverbookingComponent'

import { Helmet } from 'react-helmet'

const Overbooking = () => {
  return (
    <div>
        <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/overbooking"/>
      </Helmet>
        <OverbookingComponent/>
    </div>
  )
}

export default Overbooking