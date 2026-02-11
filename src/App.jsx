import { useState } from 'react'

import './App.css'
import { Accueil } from './Portfolio/1_accueil';
import NavBar from './Portfolio/0_NavBar';
import { Parcours } from './Portfolio/2_parcours';
import { Compétences } from './Portfolio/3_compétences';
import { Projets } from './Portfolio/4_projets'
function App() {
  

  return (
    <div>
  {/* <NavBar /> */}
  <NavBar />

  <Accueil />
    </div>
  )
}

export default App
