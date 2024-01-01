import { uiStore } from '../../hooks/myStore'
import '../../css/simple.css'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"


const SideBar = ({BGCtrl } : { BGCtrl: React.FC }) =>{
     return(
          <div className='sidebar-cont'>
               <div className='side-layout-sel'>
                    <BGCtrl />
                    <div>S</div>
               </div>
               <div className='line'></div>
               <div className='side-page-sel'>
                    <div><a href='#home'>H</a></div>
                    <div><a href='#academics'>A</a></div>
                    <div><a href='#skills'>S</a></div>
                    <div><a href='#Projects'>P</a></div>
                    <div><a href='#contacts'>C</a></div>
               </div>
          </div>
     )
}
const MainBody = () =>{
     return(
          <div className='mainbody-cont'>
               <Home />
               <Academics />
               <Skills />
               <Projects />
               <Contact />
          </div>
     )
}
export const Simplified = ({ UICtrlr, BGCtrl }: { UICtrlr: React.FC, BGCtrl: React.FC }) =>{
     const {bgDark} = uiStore();

     return(
          <div className={`simp-cont ${bgDark? '': 'light-mode'}`}>
               {/* This view is still in development... */}
               <UICtrlr />
               <SideBar BGCtrl={BGCtrl} />
               <MainBody />
          </div>
     )
}