import React from 'react'
import ExtravioComponent from '../Components/ExtravioComponent/ExtravioComponent'

import { Helmet } from 'react-helmet'

const Extravio = () => {
  return (
    <>
     <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/extravio-de-bagagem"/>
      </Helmet>
        <ExtravioComponent/>
    </>
  )
}

export default Extravio