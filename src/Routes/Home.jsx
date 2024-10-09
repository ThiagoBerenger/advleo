import React from 'react'
import { Helmet } from 'react-helmet';

import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Demands from '../Components/Demands/Demands'
import CallToAction from '../Components/CallToAction/CallToAction'
import Problem from '../Components/Problem/Problem'
import Customer from '../Components/Customer/Customer'
import Covered from '../Components/Covered/Covered'

import perfilMeta from '../assets/images/perfilmeta.png'

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <link rel="canonical" href="https://www.advleo.com.br/" />
        <meta name="description" content="Advogado especializado em direito aéreo. Auxiliamos passageiros com problemas de atraso de voo, extravio de bagagem, cancelamento de voo e overbooking a reivindicar seus direitos e obter indenizações." />
        <meta name="keywords" content="Advogado atraso de voo, Extravio de bagagem, Cancelamento de voo, Overbooking, Indenização por atraso de voo, Direitos do passageiro, Assistência jurídica voo, Reembolso passagem aérea, Ação contra companhia aérea, Problemas voo internacional" />
        <meta name="author" content="Leonardo Borges - Advogado" />
        <title>Dr. Leonardo Borges</title>

        {/* Meta tags para Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Dr. Leonardo Borges - Advogado Especializado em Direito Aéreo" />
        <meta property="og:description" content="Auxiliamos passageiros com problemas de atraso de voo, extravio de bagagem, cancelamento de voo e overbooking." />
        <meta property="og:image" content={perfilMeta} /> {/* Caminho da imagem */}
        <meta property="og:url" content="https://www.advleo.com.br/" />
        <meta property="og:type" content="website" />

        {/* Meta tags para Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Leonardo Borges - Advogado Especializado em Direito Aéreo" />
        <meta name="twitter:description" content="Auxiliamos passageiros com problemas de atraso de voo, extravio de bagagem, cancelamento de voo e overbooking." />
        <meta name="twitter:image" content={perfilMeta} /> {/* Caminho da imagem */}

        <meta name="google-site-verification" content="jxmXBEJPhY0zDuzBILOmN9A4i_kINLvMJjB-kQr1_PA" />
      </Helmet>

{/* componentes */}
        <Hero />
        <About />
        <Demands />
        <CallToAction />
        <Problem />
        <Customer />
        <Covered />
    </>
  )
}

export default Home