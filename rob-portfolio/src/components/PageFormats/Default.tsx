import { uiStore } from '../../hooks/myStore'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"

export const Default = () =>{
     const {bgDark} = uiStore();

     return(
          <div className={`def-cont ${bgDark? '': 'light-mode'}`}>
               <Home />
               <Academics />
               <Skills />
               <Projects />
               <Contact />
          </div>
     )
}