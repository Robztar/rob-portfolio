import { uiStore } from '../../hooks/myStore'
import '../../css/simple.css'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"

export const Simplified = () =>{
     const {bgDark} = uiStore();

     return(
          <div className={`simp-cont ${bgDark? '': 'light-mode'}`}>
               This view is still in development...
               <Home />
               <Academics />
               <Skills />
               <Projects />
               <Contact />
          </div>
     )
}