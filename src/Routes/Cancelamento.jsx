import React from 'react'
import CancelamentoComponent from '../Components/CancelamentoComponent/CancelamentoComponent'

import { Helmet } from 'react-helmet'
import ArrowUp from '../Components/ArrowUp/ArrowUp'


const Cancelamento = () => {
  return (
    <div>
         <Helmet>
            <link rel="canonical" href="https://advleo.com.br/cancelamento-de-voo"/>
            <title>
            Cancelamento de Voo: Direitos e Indenizações para Passageiros
            </title>
            <meta
              name="description"
              content="Saiba o que fazer em caso de cancelamento de voo. Conheça seus direitos e como buscar indenização por transtornos."
            />
        </Helmet>
        <CancelamentoComponent/>
        <ArrowUp/>
    </div>
  )
}

export default Cancelamento