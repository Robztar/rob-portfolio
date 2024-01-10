// import { useState } from "react"
import {windStore} from '../../hooks/myStore'

import DStruct from '../../awards/DStruct_certificate.pdf'
import WebDev from '../../awards/WebDev_certificate.pdf'
import AdvApp from '../../awards/Advanced_Application_Development_certificate.pdf'
import InfoSys from '../../awards/Information_Sys_certificate.pdf'
import DbSys from '../../awards/Database_Sys_certificate.pdf'
import AdvProp from '../../awards/AdvProposal_certificate.pdf'
import AdvProj from '../../awards/AdvProject_certificate.pdf'

export const Academics = () =>{
     let state: boolean
     let acadSide: boolean

     const { elem, yearLine, setElem, initWind, setYLine } = windStore();

     if(elem === 'academics') {state = true}
     else {state= false}
     if(elem === 'home') {acadSide = false}
     else {acadSide = true}

     return(
          <>
               <div 
                    className={`academics sect ${state===true?'active':''} ${acadSide===true?'side-sect':''}`}
                    onClick={ () =>{
                              if(state === false){
                                   // setElem('academics')
                                   // initWind()
                              }
                         }
                    }
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Academics</h1>
                         <div className="academics-info">
                              <div className={yearLine === '2023'? 'new-timeline': 'timeline'}>
                                   {/* 2018 */}
                                   <div className='node-cont left-node'>
                                   {/* <div className={`
                                        node-cont left-node 
                                        ${yearLine === '2018'?'active':''}
                                        ${yearLine !== '' && yearLine !== '2018'?'inactive':''} 
                                   `}> */}
                                        <div 
                                             className="node-point"
                                             onClick={ () =>{
                                                  if(yearLine !== '2018')
                                                       setYLine('2018')
                                                  else
                                                       setYLine('')
                                             }
                                        }></div>
                                        <span className="node-point-span"></span>
                                        <div 
                                             className={`node-data ${yearLine === '2018'?'active':''}`}
                                             onClick={ () =>{
                                                  if(yearLine !== '2018')
                                                       setYLine('2018')
                                                  else
                                                       setYLine('')
                                             }}
                                        >
                                             <h2 className='acad-year'><span>2018</span> <i>Start NCU ...</i></h2>
                                             {yearLine === '2018'?
                                                  <p><small>Aug 28</small> - Start attending the Northern Caribbean University</p>
                                             :''}
                                        </div>
                                   </div>

                                   {/* 2019 */}
                                   <div className="node-cont right-node">
                                        <div 
                                             className="node-point"
                                             onClick={ () =>{
                                                  if(yearLine !== '2019')
                                                       setYLine('2019')
                                                  else
                                                       setYLine('')
                                             }
                                        }></div>
                                        <span className="node-point-span"></span>
                                        <div 
                                             className={`node-data ${yearLine === '2019'?'active':''}`}
                                             onClick={ () =>{
                                                  if(yearLine !== '2019')
                                                       setYLine('2019')
                                                  else
                                                       setYLine('')
                                             }}
                                        >
                                             <h2 className='acad-year'><span>2019</span> <i>Sophomore - NCU ...</i></h2>
                                             
                                             {yearLine === '2019'?
                                                  <p><small>Aug 27</small> - Start Sophomore year</p>
                                             :''}
                                        </div>
                                   </div>

                                   {/* 2020 */}
                                   <div className="node-cont left-node">
                                        <div className="node-point">
                                             <div onClick={ () =>{
                                                       if(yearLine !== '2020')
                                                            setYLine('2020')
                                                       else
                                                            setYLine('')
                                                  }
                                             }></div>
                                        </div>
                                        <span className="node-point-span"></span>
                                        <div 
                                             className={`node-data spec-node ${yearLine === '2020'?'active':''}`}
                                             onClick={ () =>{
                                                  if(yearLine !== '2020')
                                                       setYLine('2020')
                                                  else
                                                       setYLine('')
                                             }}
                                        >
                                             <h2 className='acad-year'><span>2020</span> <i>Junior - NCU ...</i></h2>
                                             
                                             {yearLine === '2020'?
                                                  <>
                                                       <p><small>Sept 07</small> - Start Junior year</p>
                                                       <ul>
                                                            <li><a href={DStruct} target="_blank">Data Structures and Algorithms Most Outstanding Student</a></li>
                                                            <li><a href={WebDev} target="_blank">Website Design and Implementation Most Outstanding Student</a></li>
                                                       </ul>
                                                  </>
                                             :''}
                                             
                                        </div>
                                   </div>

                                   {/* 2021 */}
                                   <div className="node-cont right-node">
                                        <div className="node-point">
                                             <div onClick={ () =>{
                                                       if(yearLine !== '2021')
                                                            setYLine('2021')
                                                       else
                                                            setYLine('')
                                                  }
                                             }></div>
                                        </div>
                                        <span className="node-point-span"></span>
                                        <div 
                                             className={`node-data spec-node ${yearLine === '2021'?'active':''}`}
                                             onClick={ () =>{
                                                  if(yearLine !== '2021')
                                                       setYLine('2021')
                                                  else
                                                       setYLine('')
                                             }}
                                        >
                                             <h2 className='acad-year'><span>2021</span> <i>Senior - NCU ...</i></h2>
                                             
                                             {yearLine === '2021'?
                                                  <>
                                                       <p><small>Aug 30</small> - Start Senior year </p>
                                                       <ul>
                                                            <li><a href={AdvApp} target="_blank">Advanced Application Development Most Outstanding Student</a></li>
                                                       </ul>
                                                  </>
                                             :''}
                                        </div>
                                   </div>

                                   {/* 2022 */}
                                   <div className="node-cont left-node">
                                        <div className="node-point">
                                             <div onClick={ () =>{
                                                       if(yearLine !== '2022')
                                                            setYLine('2022')
                                                       else
                                                            setYLine('')
                                                  }
                                             }></div>
                                        </div>
                                        <span className="node-point-span"></span>
                                        <div 
                                             className={`node-data spec-node ${yearLine === '2022'?'active':''}`}
                                             onClick={ () =>{
                                                  if(yearLine !== '2022')
                                                       setYLine('2022')
                                                  else
                                                       setYLine('')
                                             }}
                                        >
                                             <h2 className='acad-year'><span>2022</span> <i>Final Year - NCU ...</i></h2>
                                             
                                             <div>{yearLine === '2022'?
                                                  <>
                                                       <p><small>Aug 29</small> - Start final semester</p>
                                                       <ul>
                                                            <li><a href={DbSys} target="_blank">Database Systems Most Outstanding Student</a></li>
                                                            <li><a href={InfoSys} target="_blank">Foundations of Information Systems Most Outstanding Student</a></li>
                                                            <li><a href={AdvProp} target="_blank">Advanced Project/Research Proposal Development Most Outstanding Student</a></li>
                                                            <li><a href={AdvProj} target="_blank">Advanced Project/Research in CIS Most Outstanding Student</a></li>
                                                       </ul>
                                                  </>
                                             :''}
                                             </div>
                                        </div>
                                   </div>

                                   {/* 2023 */}
                                   <div className="node-cont right-node">
                                        <div className="node-point">
                                             <div onClick={ () =>{
                                                       if(yearLine !== '2023')
                                                            setYLine('2023')
                                                       else
                                                            setYLine('')
                                                  }
                                             }></div>
                                        </div>
                                        <span className="node-point-span"></span>
                                        <div 
                                             className={`node-data spec-node ${yearLine === '2023'?'active':''}`}
                                             onClick={ () =>{
                                                  if(yearLine !== '2023')
                                                       setYLine('2023')
                                                  else
                                                       setYLine('')
                                             }}
                                        >
                                             <h2 className='acad-year'><span>2023</span> <i>NCU Graduation ...</i></h2>
                                             
                                             {yearLine === '2023'?
                                                  <>
                                                       <p><small>Aug 13</small> - Graduation from NCU</p>
                                                       <ul>
                                                            <li>Graduated with a Bachelors of Science in Computer Science</li>
                                                            <li>Magna Cum Laude</li>
                                                       </ul>
                                                  </>
                                                  
                                             :''}
                                             
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div 
                    className={`sect-btn acad-btn ${state===true?'active':''} ${acadSide===true?'side-btn':''}`}
                    onClick={ () =>{
                              if(state === false){
                                   setElem('academics')
                                   initWind()
                              }
                         }
                    }
               >
                    <i className="fa-solid fa-book"></i>
                    <p>Academics</p>
               </div>
          </>
     )
}