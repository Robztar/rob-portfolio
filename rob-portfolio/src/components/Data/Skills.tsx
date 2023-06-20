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
                                        <p>These are the technical skills I possess that would make me a competent Frontend Developer</p>
                                   </div>
                                   <div className='skill-cat-body'>
                                        <div className="skill-cat-nodule active">HMTL</div>
                                        <div className="skill-cat-nodule">CSS</div>
                                        <div className="skill-cat-nodule">JavaScript</div>
                                        <div className="skill-cat-nodule">React.js</div>
                                        <div className="skill-cat-nodule">TypeScript</div>
                                        <div className="skill-cat-nodule">Figma</div>
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
                                        <p>These are the additional skills I possess that make me a fitting employee for your company.</p>
                                   </div>
                                   <div className='skill-cat-body'>
                                        <div className="skill-cat-nodule">Learnability</div>
                                        <div className="skill-cat-nodule">Detail Orientation</div>
                                        <div className="skill-cat-nodule">Creativity</div>
                                        <div className="skill-cat-nodule">Oral Communication</div>
                                        <div className="skill-cat-nodule">Team Player</div>
                                        <div className="skill-cat-nodule">Dedicated</div>
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