import { windStore, uiStore } from '../../hooks/myStore'
import '../../css/simple.css'

import { Home } from '../Data/Home'
import { Academics } from "../Data/Academics"
import { Contact } from "../Data/Contact"
import { Projects } from "../Data/Projects"
import { Skills } from "../Data/Skills"


const SideBar = ({BGCtrl } : { BGCtrl: React.FC }) =>{
     const {pageFormat, bgDark, setFormat} = uiStore();
     const { elem, setElem, initWind } = windStore();
     return(
          <div className='sidebar-cont'>
               <div className='side-ui-sel'>
                    <div className='side-bg-icon'>
                         {bgDark? 
                              <i className='far fa-moon active'></i>
                              : <i className='far fa-sun active'></i>
                         }
                    </div>
                    <BGCtrl />
                    <div className='side-layout-icon'>S</div>
                    <div className="side-layout-sel">
                         <div className='side-layout-btn'
                              onClick={()=>{
                                   if(pageFormat !== 'default')
                                        setFormat('default');
                              }}
                         >D</div>
                         <div className='side-layout-btn active'>Simplified</div>
                         <div className='side-layout-btn'
                              onClick={()=>{
                                   if(pageFormat !== 'emulator')
                                        setFormat('emulator');
                              }}
                         >E</div>
                    </div>
               </div>
               <div className='line'></div>
               <div className='side-page-sel'>
                    {/* <div className='side-page-btn active'> */}
                    <a href='#home' className={`side-page-btn ${elem=== 'home' ?'active':''}`}>
                         <div className='side-page-icon'><i className="fa-solid fa-house"></i></div>
                         <div className='side-page-label'>Home</div>
                    </a>
                    <a href='#academics' className={`side-page-btn ${elem=== 'academics' ?'active':''}`}>
                         <div className='side-page-icon'><i className="fa-solid fa-book"></i></div>
                         <div className='side-page-label'>Academics</div>
                    </a>
                    <a href='#skills' className={`side-page-btn ${elem=== 'skills' ?'active':''}`}>
                         <div className='side-page-icon'>S</div>
                         <div className='side-page-label'>Skills</div>
                    </a>
                    <a href='#projects' className={`side-page-btn ${elem=== 'projects' ?'active':''}`}>
                         <div className='side-page-icon'>P</div>
                         <div className='side-page-label'>Projects</div>
                    </a>
                    <a href='#contacts' className={`side-page-btn ${elem=== 'contacts' ?'active':''}`}>
                         <div className='side-page-icon'>C</div>
                         <div className='side-page-label'>Contacts</div>
                    </a>
               </div>
          </div>
     )
}
const MainBody = () =>{
     const { elem, setElem, initWind } = windStore();
     return(
          <div className='mainbody-cont'>
               <div 
                    // style={{height:'100vh',background:'red'}} 
                    onMouseEnter={()=>{
                    if(elem !== 'home'){
                         setElem('home')
                         initWind()
                    }
               }}>
                    <Home />
               </div>
               <div onMouseEnter={()=>{
                    if(elem !== 'academics'){
                         // setElem('academics')
                         // initWind()
                    }
               }}>
                    <Academics />
               </div>
               <Skills />
               <Projects />
               <Contact />
          </div>
     )
}
export const Simplified = ({ BGCtrl }: { BGCtrl: React.FC }) =>{
     const {bgDark} = uiStore();

     return(
          <div className={`simp-cont ${bgDark? '': 'light-mode'}`}>
               {/* This view is still in development... */}
               <SideBar BGCtrl={BGCtrl} />
               <MainBody />
          </div>
     )
}