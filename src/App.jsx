import './App.css'
import { useEffect } from 'react';

import { Accueil } from './Portfolio/1_accueil';
import NavBar from './Portfolio/0_NavBar';
import { Parcours } from './Portfolio/2_parcours';
import { Compétences } from './Portfolio/3_compétences';
import { Projets } from './Portfolio/4_projets'
import { Contact } from './Portfolio/5_contact';

function App() {

  return (
    <div className="App">

  
      <div className="gradient-bg">
        <div className="gradient-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>

    
      <div className='content'>
        <NavBar />
        <Accueil />
        <Parcours />
        <Compétences />
        <Projets />

        <footer>
          <Contact />
        </footer>
      </div>

    </div>
  );
}

export default App;