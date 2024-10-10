import React from 'react'
import ExtravioComponent from '../Components/ExtravioComponent/ExtravioComponent'

import { Helmet } from 'react-helmet'

const Extravio = () => {
  return (
    <>
     <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/extravio-de-bagagem"/>
            <title>Extravio de Bagagem: Direitos do Passageiro e Assistência Jurídica Especializada</title>
          <meta
            name="description"
            content="Advogado especializado em extravio de bagagem. Saiba quais são seus direitos e como buscar indenização por bagagens perdidas ou danificadas. Consultoria jurídica completa para passageiros aéreos."
          />
      </Helmet>
        <ExtravioComponent/>
    </>
  )
}

export default Extravio