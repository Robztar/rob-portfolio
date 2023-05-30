import { useState } from "react"

type elemProps= {
     elem: string
     setElem?: (elem: string) => void
}

export const Skills = (props: elemProps) =>{
     let state: boolean
     let skillLeft: string
     let skillTop: string
     let skillStyle: object
     let skillBtnLeft: string
     let skillBtnTop: string
     let skillBtnStyle: object

     const [tSkill, setTSkill] = useState('')
     const [sSkill, setSSkill] = useState('')

     if(props.elem === 'skills'){
          state = true
          skillLeft = '0'
          skillTop = '0'
          skillBtnLeft = 'calc(97% - 5rem)'
          skillBtnTop = 'calc(50vh - 2.5rem)'
     }else{
          state= false
          if(props.elem !== 'home'){
               skillLeft = 'calc(97% - 5rem)'
               skillTop = 'calc(50vh - 2.5rem)'
          }else{
               skillLeft = 'calc(40% - 2.5rem)'
               skillTop = '80vh'
          }
          skillBtnLeft = skillLeft
          skillBtnTop = skillTop
     }
     skillStyle = {'left': skillLeft,'top': skillTop}
     skillBtnStyle = {'left': skillBtnLeft,'top': skillBtnTop}

     return(
          <>
               <div 
                    className={`skills sect ${state===true?'active':''}`}
                    style={skillStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('skills')
                         }
                    }
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Skills</h1>
                         <div className="skill-info">
                              <div 
                                   className={`skill-cat ${tSkill}`}
                                   onClick={ () =>{
                                             if(tSkill !== 'active'){
                                                  setTSkill('active')
                                                  setSSkill('inactive')
                                             }
                                        }
                                   }
                              >
                                   <div className='skill-cat-head'>
                                        <h2>Technical Skills</h2>
                                        <i
                                             onClick={ () =>{
                                                  if(tSkill === 'active'){
                                                       setTSkill('')
                                                       setSSkill('')
                                                  }
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='skill-cat-desc'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil.</p>
                                   </div>
                                   <div className='skill-cat-body'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
                                   </div>
                              </div>
                              <div 
                                   className={`skill-cat ${sSkill}`}
                                   onClick={ () =>{
                                        if(sSkill !== 'active'){
                                             setSSkill('active')
                                             setTSkill('inactive')
                                        }
                                   }
                              }
                              >
                                   <div className='skill-cat-head'>
                                        <h2>Soft Skills</h2>
                                        <i
                                             onClick={ () =>{
                                                  if(sSkill === 'active'){
                                                       setTSkill('')
                                                       setSSkill('')
                                                  }
                                             }}
                                        >X</i>
                                   </div>
                                   <div className='skill-cat-desc'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nihil.</p>
                                   </div>
                                   <div className='skill-cat-body'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate animi ducimus provident ea incidunt necessitatibus tempore vero. Atque inventore, reprehenderit eaque fuga autem iusto tempora nulla corrupti adipisci quia dignissimos voluptatum ad quae praesentium recusandae illo. Quaerat harum delectus dignissimos perspiciatis id nisi repudiandae odio dolor corporis aliquid quod, non unde saepe perferendis laborum expedita, amet nostrum labore corrupti?</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div 
                    className={`sect-btn ${state===true?'active':''}`}
                    style={skillBtnStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('skills')
                         }
                    }
               >
                    <i className="fa-solid fa-gears"></i>
                    <p>Skills</p>
               </div>
          </>
     )
}