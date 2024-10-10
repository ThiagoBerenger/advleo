import React from 'react'
import AtrasoComponent from '../Components/AtrasoComponent/AtrasoComponent'

import { Helmet } from 'react-helmet'

const Atraso = () => {
  return (
    <div>
        <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/atraso-de-voo"/>
        </Helmet>

        <AtrasoComponent />
    </div>
  )
}

export default Atraso