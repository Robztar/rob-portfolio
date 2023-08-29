import { useState } from "react"
import OTLEmbed from '../../img/OTL_embed-pic.jpeg'
import FreshMart from '../../img/FreshMart-demo-shot.png'
import CRead from '../../img/CRead_thumb.png'
import GroundUp from '../../img/GroundUp_embed.png'

type elemProps= {
     elem: string
     setElem?: (elem: string) => void
}

export const Projects = (props: elemProps) =>{
     let state: boolean
     let projLeft: string
     let projTop: string
     let projStyle: object
     let projBtnLeft: string
     let projBtnTop: string
     let projBtnStyle: object

     const [activeProj, setProj] = useState('')

     if(props.elem === 'projects'){
          state = true
          projLeft = '0'
          projTop = '0'
          projBtnLeft = 'calc(97% - 5rem)'
          projBtnTop = 'calc(65vh - 2.5rem)'
     }else{
          state= false
          if(props.elem !== 'home'){
               projLeft = 'calc(97% - 5rem)'
               projTop = 'calc(65vh - 2.5rem)'
          }else{
               projLeft = 'calc(60% - 2.5rem)'
               projTop = '80vh'
          }
          projBtnLeft = projLeft
          projBtnTop = projTop
     }
     projStyle = {'left': projLeft,'top': projTop}
     projBtnStyle = {'left': projBtnLeft,'top': projBtnTop}

     return(
          <>
               <div 
                    className={`projects sect ${state===true?'active':''}`}
                    style={projStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('projects')
                         }
                    }
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Projects</h1>
                         <div className={`
                                   proj-info
                                   ${activeProj === ''? '':'active'}
                              `}
                         >
                              {/* GroundUp */}
                              <div 
                                   className={`
                                        proj-card 
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
                                             <a href="#demo">Demo (coming soon)</a>
                                             <a href="https://github.com/Robztar/groundup-hd" target="_blank">Source code</a>
                                        </div>
                                        <p>GroundUp is a house designing web application which allows the user to design houses to their desire and then receive an estimate of the quantity of material required to construct that building.</p>
                                        <p>Role: Developer</p>
                                        <p>Tech Stack:</p>
                                        <ul>
                                             <li>React.js</li>
                                             <li>Three.js / React Three Fiber</li>
                                             <li>Zustand</li>
                                        </ul>
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
                                        {/* <div className="proj-disp">*insert image here*</div> */}
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
                                        <p>Roles:</p>
                                        <ul>
                                             <li>I took on the role of team coordinator, ensuring that all the members had their tasks outlined and that deliverables were completed on time.</li>
                                             <li>I was in charge of the final design of th project, providing UI cohesion across the the web app and correcting errors and bugs for the final product.</li>
                                             <li>I was in charge of the workout plan section, completing the layout and animation effects, and filling in the data.</li>
                                        </ul>
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
                                        <p>Roles: </p>
                                        <ul>
                                             <li>I coordinated the shared work space, providing the file structure that would be utilized throughout development.</li>
                                             <li>I assisted with the UI design of the website</li>
                                             <li>I assisted with the backend development</li>
                                             <li>I assisted with the connection between the frontend and database of the website</li>
                                        </ul>
                                        <p>Tech Stack: </p>
                                        <ul>
                                             <li>Bootstrap 4</li>
                                             <li>PHP</li>
                                             <li>MySQL</li>
                                        </ul>
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
                                        <p>Roles: </p>
                                        <ul>
                                             <li>Helped with the UI design of multiple areas of the website.</li>
                                             <li>Implemented the test pages and functionality.</li>
                                             <li>Worked on the backend functionality along with the connection to the website's database.</li>
                                        </ul>
                                        <p>Tech Stack: </p>
                                        <ul>
                                             <li>HTML5</li>
                                             <li>PHP</li>
                                             <li>MySQL</li>
                                        </ul>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
               <div 
                         className={`sect-btn ${state===true?'active':''}`}
                         style={projBtnStyle}
                         onClick={ () =>{
                                   if(state === false)
                                        props.setElem?.('projects')
                              }
                         }
                    >
                    <i className="fa-solid fa-list"></i>
                    <p>Projects</p>
               </div>
          </>
     )
}