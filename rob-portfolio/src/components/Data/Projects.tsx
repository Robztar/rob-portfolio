import { useState } from "react"

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
     // const [sSkill, setSSkill] = useState('')

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
                         <div className="proj-info">
                              {/* Project 1 */}
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
                                   <div className='proj-thumb'>
                                        <p>*image expected here*</p>
                                   </div>
                                   <div className='proj-head'>
                                        <h2>On The Limb - Group Project</h2>
                                        <i
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='proj-body'>
                                        <div className="proj-disp">*insert image here*</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
                                        <a href="https://github.com/Robztar/WebGroupProject" target="_blank">See project</a>
                                   </div>
                              </div>
                              {/* Project 2 */}
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
                                   <div className='proj-thumb'>
                                        <p>*image expected here*</p>
                                   </div>
                                   <div className='proj-head'>
                                        <h2>Fresh Mart - Group Project</h2>
                                        <i
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='proj-body'>
                                        <div className="proj-disp">*insert image here*</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
                                        <a href="https://github.com/Robztar/supermarketProject" target="_blank"></a>
                                   </div>
                              </div>
                              {/* Project 3 */}
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
                                   <div className='proj-thumb'>
                                        <p>*image expected here*</p>
                                   </div>
                                   <div className='proj-head'>
                                        <h2>CRead - Group Project</h2>
                                        <i
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='proj-body'>
                                        <div className="proj-disp">*insert image here*</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
                                        <a href="https://github.com/Robztar/FieldGroupProject" target="_blank"></a>
                                   </div>
                              </div>
                              {/* Project 4 */}
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
                                   <div className='proj-thumb'>
                                        <p>*image expected here*</p>
                                   </div>
                                   <div className='proj-head'>
                                        <h2>GroundUp House Designer</h2>
                                        <i
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='proj-body'>
                                        <div className="proj-disp">*insert image here*</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
                                        <a href="https://github.com/Robztar/groundup-hd" target="_blank"></a>
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