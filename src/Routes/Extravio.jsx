import React from 'react'
import ExtravioComponent from '../Components/ExtravioComponent/ExtravioComponent'

import { Helmet } from 'react-helmet'
import ArrowUp from '../Components/ArrowUp/ArrowUp'

const Extravio = () => {
  return (
    <>
     <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/extravio-de-bagagem"/>
            <title>Extravio de Bagagem: Direitos do Passageiro e Assistência Jurídica Especializada</title>
          <meta
            name="description"
            content="Advogado especializado em extravio de bagagem. Descubra seus direitos e busque indenização por bagagens perdidas ou danificadas."
          />
        </Helmet>
        <ExtravioComponent/>
        <ArrowUp/>
    </>
  )
}

export default Extravio