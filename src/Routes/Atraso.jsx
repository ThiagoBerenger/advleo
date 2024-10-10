import React from 'react'
import AtrasoComponent from '../Components/AtrasoComponent/AtrasoComponent'

import { Helmet } from 'react-helmet'

const Atraso = () => {
  return (
    <div>
        <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/atraso-de-voo"/>
            <title>
             Atraso de Voo: Indenizações e Soluções Legais
            </title>
            <meta
              name="description"
              content="Especialista em indenizações por atrasos de voo. Descubra seus direitos como passageiro e como buscar reparação financeira por transtornos causados por atrasos de voos."
            />
        </Helmet>
        <AtrasoComponent />
    </div>
  )
}

export default Atraso