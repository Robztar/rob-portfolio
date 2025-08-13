import { uiStore } from '../../hooks/myStore'
import '../../css/default.css'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"

// export const Default = ({UICtrlr} : { UICtrlr: React.FC }) =>{
export const Default = ({UICtrlr} : { UICtrlr: React.JSX.Element }) =>{
     const {bgDark} = uiStore();

     return(
          <div className={`def-cont ${bgDark? '': 'light-mode'}`}>
               <div className='side-btn-housing-wrapper'>
                    <div className='side-btn-housing'>
                         {/* <UICtrlr /> */}
                         {UICtrlr}
                    </div>
                    
                    <Home />

                    <div className='side-btn-housing acad-housing'></div>
                    <Academics />
                    <div className='side-btn-housing'></div>
                    <Skills />
                    <div className='side-btn-housing'></div>
                    <Projects />
                    <div className='side-btn-housing'></div>
                    <Contact />
               </div>
               
               {/* <Academics /> */}

               {/* <Skills />
               <Projects />
               <Contact /> */}
          </div>
     )
}