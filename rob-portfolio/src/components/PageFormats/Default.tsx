import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"

export const Default = () =>{

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