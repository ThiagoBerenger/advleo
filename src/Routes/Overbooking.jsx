import React from 'react'
import OverbookingComponent from '../Components/OverbookingComponent/OverbookingComponent'

import { Helmet } from 'react-helmet'

const Overbooking = () => {
  return (
    <div>
        <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/overbooking"/>
            <title>
            Overbooking: Direitos dos Passageiros e Como Buscar Compensação
            </title>
            <meta
              name="description"
              content="Saiba como proceder em casos de overbooking. Advogado especializado em direitos de passageiros, com atuação em compensações financeiras por overbooking."
            />
      </Helmet>
        <OverbookingComponent/>
    </div>
  )
}

export default Overbooking