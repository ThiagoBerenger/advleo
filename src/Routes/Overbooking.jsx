import React from 'react'
import OverbookingComponent from '../Components/OverbookingComponent/OverbookingComponent'

import { Helmet } from 'react-helmet'
import ArrowUp from '../Components/ArrowUp/ArrowUp'

const Overbooking = () => {
  return (
    <div>
        <Helmet>
            <link rel="canonical" href="https://advleo.com.br/overbooking"/>
            <title>
            Overbooking: Direitos dos Passageiros e Como Buscar Compensação
            </title>
            <meta
              name="description"
              content="Saiba como proceder em casos de overbooking. Advogado especializado em direitos de passageiros, com atuação em compensações financeiras por overbooking."
            />
        </Helmet>
        <OverbookingComponent/>
        <ArrowUp/>
    </div>
  )
}

export default Overbooking