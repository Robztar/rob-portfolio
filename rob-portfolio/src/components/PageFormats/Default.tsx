import { useState } from 'react'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"
// import { Welcome } from "../Data/Welcome"

export const Default = () =>{
     const [elem, setElem] = useState('home');
     // const toggleElem = () => {setElem((elem) => !elem)}

     return(
          <div className='def-cont'>
               <Home />
               <Academics />
               <Skills />
               <Projects />
               <Contact />
          </div>
     )
}