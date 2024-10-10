import React from 'react'
import CancelamentoComponent from '../Components/CancelamentoComponent/CancelamentoComponent'

import { Helmet } from 'react-helmet'

const Cancelamento = () => {
  return (
    <div>
         <Helmet>
            <link rel="canonical" href="https://www.advleo.com.br/cancelamento-de-voo"/>
        </Helmet>
        <CancelamentoComponent/>
    </div>
  )
}

export default Cancelamento