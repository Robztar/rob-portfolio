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
                              <div 
                                   className={`
                                        proj-card 
                                        ${activeProj === '1'? 'active' : ''} 
                                        ${activeProj !== '1' && activeProj !== '' ? 'inactive' : ''}
                                   `}
                                   onClick={ () =>{
                                             if(activeProj !== '1')
                                                  setProj('1')
                                             else
                                                  setProj('')
                                        }
                                   }
                              >
                                   <div className='proj-thumb'>
                                        <p>*image expected here*</p>
                                   </div>
                                   <div className='proj-head'>
                                        <h2>Project1</h2>
                                        <i
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='proj-body'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
                                   </div>
                              </div>
                              <div 
                                   className={`
                                        proj-card 
                                        ${activeProj === '2'? 'active' : ''} 
                                        ${activeProj !== '2' && activeProj !== '' ? 'inactive' : ''}
                                   `}
                                   onClick={ () =>{
                                             if(activeProj !== '2')
                                                  setProj('2')
                                             else
                                                  setProj('')
                                        }
                                   }
                              >
                                   <div className='proj-thumb'>
                                        <p>*image expected here*</p>
                                   </div>
                                   <div className='proj-head'>
                                        <h2>Project2</h2>
                                        <i
                                             onClick={ () =>{
                                                  setProj('')
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='proj-body'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
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