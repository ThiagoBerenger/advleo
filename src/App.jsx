import React, { useEffect } from 'react'
import ReactGA from 'react-ga';

import { Outlet, useLocation } from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'


ReactGA.initialize('G-NY7YPXF0DW');

function App() {

  const location = useLocation(); 

  useEffect(() => {
    // Enviar uma página vista sempre que a rota mudar
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
      <div className="App">
        <Header/>
          <Outlet/>
        <Footer/>
      </div>
  )
}

export default App
