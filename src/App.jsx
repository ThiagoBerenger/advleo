import React, { useEffect } from 'react';
import ReactGA from 'react-ga4'; // use react-ga4 se for GA4

import { Outlet, useLocation } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// Inicializa o Google Analytics apenas no ambiente de produção
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('G-NY7YPXF0DW');
}

function App() {
  const location = useLocation();

  useEffect(() => {
    // Verifica se o GA está configurado (no ambiente de produção)
    if (process.env.NODE_ENV === 'production') {
      // Envia uma visualização de página sempre que a rota mudar
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;