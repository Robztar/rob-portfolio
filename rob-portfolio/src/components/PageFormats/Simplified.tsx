import { uiStore } from '../../hooks/myStore'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"

export const Simplified = () =>{
     const {bgDark} = uiStore();

     return(
          <div className={`def-cont ${bgDark? '': 'light-mode'}`}>
               This view is still in development...
          </div>
     )
}