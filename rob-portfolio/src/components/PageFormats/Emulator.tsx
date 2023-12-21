import { uiStore } from '../../hooks/myStore'
import '../../css/emul.css'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"

export const Emulator = () =>{
     const {bgDark} = uiStore();

     return(
          <div className={`def-cont ${bgDark? '': 'light-mode'}`}>
               This view is still in development...
               <div className='emul-cont'>
                    <div className='mobile-frame'>
                         <div className='mobile-screen-area'>
                              <Home />
                              <Academics />
                              <Skills />
                              <Projects />
                              <Contact />
                         </div>
                    </div>
               </div>
          </div>
     )
}