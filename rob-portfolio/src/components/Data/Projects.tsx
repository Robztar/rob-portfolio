import {windStore} from '../../hooks/myStore'

import OTLEmbed from '../../img/OTL_embed-pic.jpeg'
import FreshMart from '../../img/FreshMart-demo-shot.png'
import CRead from '../../img/CRead_thumb.png'
import GroundUp from '../../img/GroundUp_embed.png'

export const Projects = () =>{
     let state: boolean
     let projSide: boolean

     const { elem, activeProj, setElem, initWind, setProj } = windStore();

     if(elem === 'projects') {state = true}
     else{state= false}

     if(elem === 'home') {projSide = false}
     else {projSide = true}

     return(
          <>
               <div 
                    className={`projects sect ${state===true?'active':''} ${projSide===true?'side-sect':''}`}
                    onClick={ () =>{
                              if(state === false){
                                   // setElem('projects')
                                   // initWind()
                              }
                         }
                    }
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Projects</h1>
                         <div className='proj-info'>
                              {/* GroundUp */}
                              <div 
                                   className={`
                                        proj-card src-card
                                        ${activeProj === '1'? 'active' : ''} 
                                        ${activeProj !== '1' && activeProj !== '' ? 'inactive' : ''}
                                   `}
                                   onClick={ () =>{
                                             if(activeProj !== '1')
                                                  setProj('1')
                                        }
                                   }
                              >
                                   <img className='proj-thumb' src={GroundUp} alt="GroundUp Embed" />
                                   <div className='proj-head'>
                                        <h2>GroundUp House Designer</h2>
                                        <i 
                                             className="fa fa-times-circle-o"
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        ></i>
                                   </div>
                                   <div className='proj-body'>
                                   <img 
                                             className='proj-disp' 
                                             src={GroundUp} 
                                             alt="Ground Embed"
                                             onClick={ () =>{
                                                       window.open('https://www.youtube.com/embed/9zk-3wzJSio', '_blank')
                                                  }
                                             }
                                        />
                                        <div className="proj-links">
                                             <a href="https://grounduphd.netlify.app/" target="_blank">Demo</a>
                                             <a href="https://github.com/Robztar/groundup-hd" target="_blank">Source code</a>
                                        </div>
                                        <p>GroundUp is a house designing web application which allows the user to design houses to their desire and then receive an estimate of the quantity of material required to construct that building.</p>
                                        <table className="proj-details">
                                             <tr className="proj-roles">
                                                  <th>My Role</th>
                                                  <td style={{padding: "0.5rem"}}>Sole Developer</td>
                                             </tr>
                                             <tr className="proj-stack">
                                                  <th>Tech Stack</th>
                                                  <td>
                                                       <p>React.js</p>
                                                       <p>Three.js / React Three Fiber</p>
                                                       <p>Zustand</p>
                                                  </td>
                                             </tr>
                                        </table>
                                   </div>
                              </div>
                              {/* OTL */}
                              <div 
                                   className={`
                                        proj-card 
                                        ${activeProj === '2'? 'active' : ''} 
                                        ${activeProj !== '2' && activeProj !== '' ? 'inactive' : ''}
                                   `}
                                   onClick={ () =>{
                                             if(activeProj !== '2')
                                                  setProj('2')
                                        }
                                   }
                              >
                                   <img className='proj-thumb' src={OTLEmbed} alt="On The Limb Embed" />
                                   
                                   <div className='proj-head'>
                                        <h2>On The Limb</h2>
                                        <i 
                                             className="fa fa-times-circle-o"
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        ></i>
                                   </div>
                                   <div className='proj-body'>
                                        <img 
                                             className='proj-disp' 
                                             src={OTLEmbed} 
                                             alt="On The Limb Embed"
                                             onClick={ () =>{
                                                       window.open('https://www.youtube.com/embed/jqvCiUc2oMs', '_blank')
                                                  }
                                             }
                                        />
                                        <div className="proj-links">
                                             <a href="https://github.com/Robztar/WebGroupProject" target="_blank">Source code</a>
                                        </div>
                                        <p>On the Limb is a fitness website that provides workout programs based on the fitness level of the user.</p>
                                        <table className="proj-details">
                                             <tr className="proj-roles">
                                                  <th>My Roles</th>
                                                  <td>
                                                       <p>Team coordinator</p>
                                                       <p>Chief UI designer</p>
                                                       <p>Development for the "workout plan" section</p>
                                                  </td>
                                             </tr>
                                        </table>
                                   </div>
                              </div>
                              {/* FreshMart */}
                              <div 
                                   className={`
                                        proj-card 
                                        ${activeProj === '3'? 'active' : ''} 
                                        ${activeProj !== '3' && activeProj !== '' ? 'inactive' : ''}
                                   `}
                                   onClick={ () =>{
                                             if(activeProj !== '3')
                                                  setProj('3')
                                        }
                                   }
                              >
                                   <img className='proj-thumb' src={FreshMart} alt="FreshMart Embed" />
                                   <div className='proj-head'>
                                        <h2>Fresh Mart</h2>
                                        <i 
                                             className="fa fa-times-circle-o"
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        ></i>
                                   </div>
                                   <div className='proj-body'>
                                        <img 
                                             className='proj-disp' 
                                             src={FreshMart} 
                                             alt="FreshMart Embed"
                                             onClick={ () =>{
                                                       window.open('https://www.youtube.com/embed/Ua9_-t_BxtQ', '_blank')
                                                  }
                                             }
                                        />
                                        <div className="proj-links">
                                             <a href="https://github.com/Robztar/supermarketProject" target="_blank">Source code</a>
                                        </div>
                                        <p>This website acts as an ecommerce portal for a supermarket. On this website, customers can view what the supermarket has available, add to cart the items they desire and purchase them when ready.</p>
                                        <table className="proj-details">
                                             <tr className="proj-roles">
                                                  <th>My Roles</th>
                                                  <td>
                                                       <p>Workspace coordinator</p>
                                                       <p>UI designer</p>
                                                       <p>Backend developer</p>
                                                  </td>
                                             </tr>
                                             <tr className="proj-stack">
                                                  <th>Tech Stack</th>
                                                  <td>
                                                       <p>Bootstrap 4</p>
                                                       <p>PHP</p>
                                                       <p>MySQL</p>
                                                  </td>
                                             </tr>
                                        </table>
                                   </div>
                              </div>
                              {/* CRead */}
                              <div 
                                   className={`
                                        proj-card 
                                        ${activeProj === '4'? 'active' : ''} 
                                        ${activeProj !== '4' && activeProj !== '' ? 'inactive' : ''}
                                   `}
                                   onClick={ () =>{
                                             if(activeProj !== '4')
                                                  setProj('4')
                                        }
                                   }
                              >
                                   <img className='proj-thumb' src={CRead} alt="CRead Thumbnail" />
                                   <div className='proj-head'>
                                        <h2>CRead</h2>
                                        <i 
                                             className="fa fa-times-circle-o"
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        ></i>
                                   </div>
                                   <div className='proj-body'>
                                        <img 
                                             className='proj-disp' 
                                             style={{cursor:'default'}}
                                             src={CRead} 
                                             alt="CRead Thumbnail"
                                        />
                                        <div className="proj-links">
                                             <a href="https://github.com/NakardaRichards/CRead" target="_blank">Source code</a>
                                        </div>
                                        <p>CRead is a website intended for aiding children to improve their literacy. The website also has a test feature that comes at the end of each lesson.</p>
                                        <table className="proj-details">
                                             <tr className="proj-roles">
                                                  <th>My Roles</th>
                                                  <td>
                                                       <p>UI designer</p>
                                                       <p>Development of the test pages</p>
                                                       <p>Backend Development</p>
                                                       <p>Database setup</p>
                                                  </td>
                                             </tr>
                                             <tr className="proj-stack">
                                                  <th>Tech Stack</th>
                                                  <td>
                                                       <p>HTML5</p>
                                                       <p>PHP</p>
                                                       <p>MySQL</p>
                                                  </td>
                                             </tr>
                                        </table>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div 
                    className={`sect-btn proj-btn ${state===true?'active':''} ${projSide===true?'side-btn':''}`}
                    onClick={ () =>{
                              if(state === false){
                                   setElem('projects')
                                   initWind()
                              }
                         }
                    }
               >
                    <i className="fa-solid fa-list"></i>
                    <p>Projects</p>
               </div>
          </>
     )
}