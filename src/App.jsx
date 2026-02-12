import { useState } from 'react'

import './App.css'
import { Accueil } from './Portfolio/1_accueil';
import NavBar from './Portfolio/0_NavBar';
import { Parcours } from './Portfolio/2_parcours';
import { Compétences } from './Portfolio/3_compétences';
import { Projets } from './Portfolio/4_projets'
import { Contact } from './Portfolio/5_contact';


function App() {
  

  return (
    <div>
  {/* <NavBar /> */}
  <NavBar />
  
  {/* <Accueil /> */}
  <Accueil />

  {/* <Parcours /> */}
  <Parcours />

  {/* <Compétences /> */}
  <Compétences />
  
  {/* <Projets /> */}
  <Projets />
    

 
  {/* <Contact /> */}
  
 <Contact />
    </div>
  )
}

export default App
