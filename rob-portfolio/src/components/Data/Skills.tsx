import {windStore} from '../../hooks/myStore'

export const Skills = () =>{
     let state: boolean
     let skillSide: boolean

     const { elem, techSkill, softSkill, setElem, initWind, setTechSkill, setSoftSkill } = windStore();

     if(elem === 'skills') {state = true}
     else {state= false}
     
     if(elem === 'home') {skillSide = false}
     else {skillSide = true}

     return(
          <>
               <div 
                    className={`skills sect ${state===true?'active':''} ${skillSide===true?'side-sect':''}`}
                    onClick={ () =>{
                              if(state === false){
                                   setElem('skills')
                                   initWind()
                              }
                         }
                    }
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Skills</h1>
                         <div className="skill-info">
                              <div 
                                   className={`skill-cat ${techSkill}`}
                                   onClick={ () =>{
                                             if(techSkill !== 'active'){
                                                  setTechSkill('active')
                                                  setSoftSkill('inactive')
                                             }
                                        }
                                   }
                              >
                                   <div className='skill-cat-head'>
                                        <h2>Technical Skills</h2>
                                        <i 
                                             className="fa fa-times-circle-o"
                                             onClick={ () =>{
                                                  if(techSkill === 'active'){
                                                       setTechSkill('')
                                                       setSoftSkill('')
                                                  }
                                             }}
                                        ></i>
                                   </div>
                                   <div className='skill-cat-desc'>
                                        <p>These are the technical skills I possess that would make me a competent Web Developer</p>
                                   </div>
                                   <div className='skill-cat-body'>
                                        <div className='skill-cat-nodule'>HTML</div>
                                        <div className='skill-cat-nodule'>CSS</div>
                                        <div className='skill-cat-nodule'>JavaScript</div>
                                        <div className='skill-cat-nodule'>React.js</div>
                                        <div className='skill-cat-nodule'>TypeScript</div>
                                        <div className='skill-cat-nodule'>Figma</div>
                                   </div>
                              </div>
                              <div 
                                   className={`skill-cat ${softSkill}`}
                                   onClick={ () =>{
                                        if(softSkill !== 'active'){
                                             setSoftSkill('active')
                                             setTechSkill('inactive')
                                        }
                                   }
                              }
                              >
                                   <div className='skill-cat-head'>
                                        <h2>Soft Skills</h2>
                                        <i 
                                             className="fa fa-times-circle-o"
                                             onClick={ () =>{
                                                  if(softSkill === 'active'){
                                                       setTechSkill('')
                                                       setSoftSkill('')
                                                  }
                                             }}
                                        ></i>
                                   </div>
                                   <div className='skill-cat-desc'>
                                        <p>These are the additional skills I possess that make me a fitting employee for your company.</p>
                                   </div>
                                   <div className='skill-cat-body'>
                                        <div className='skill-cat-nodule'>Learnability</div>
                                        <div className='skill-cat-nodule'>Detail Orientation</div>
                                        <div className='skill-cat-nodule'>Creativity</div>
                                        <div className='skill-cat-nodule'>Oral Communication</div>
                                        <div className='skill-cat-nodule'>Team Player</div>
                                        <div className='skill-cat-nodule'>Dedicated</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div 
                    className={`sect-btn skill-btn ${state===true?'active':''} ${skillSide===true?'side-btn':''}`}
                    onClick={ () =>{
                              if(state === false){
                                   setElem('skills')
                                   initWind()
                              }
                         }
                    }
               >
                    <i className="fa-solid fa-gears"></i>
                    <p>Skills</p>
               </div>
          </>
     )
}