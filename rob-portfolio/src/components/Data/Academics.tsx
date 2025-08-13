import React from 'react';
// import { useState } from "react"
import {uiStore, windStore} from '../../hooks/myStore'
// import { shallow } from 'zustand/shallow'

import DStruct from '../../awards/DStruct_certificate.pdf'
import WebDev from '../../awards/WebDev_certificate.pdf'
import AdvApp from '../../awards/Advanced_Application_Development_certificate.pdf'
import InfoSys from '../../awards/Information_Sys_certificate.pdf'
import DbSys from '../../awards/Database_Sys_certificate.pdf'
import AdvProp from '../../awards/AdvProposal_certificate.pdf'
import AdvProj from '../../awards/AdvProject_certificate.pdf'

interface AcademicProps {
  pageMode?: string; // pageMode: 'default' | 'simple'
}

export const Academics: React.FC<AcademicProps> = ({ pageMode = 'default' }) => {
     let state: boolean
     let acadSide: boolean

     // const { elem, lastElem, yearLine, setElem, setLastElem, initWind, setYLine } = windStore(
     //      (state: WindState) => ({
     //           elem: state.elem,
     //           lastElem: state.lastElem,
     //           yearLine: state.yearLine,
     //           setElem: state.setElem,
     //           setLastElem: state.setLastElem,
     //           initWind: state.initWind,
     //           setYLine: state.setYLine,
     //      }),
     //      shallow
     // );
     const { elem, lastElem, yearLine, setElem, setLastElem, initWind, setYLine } = windStore();
     const { pageFormat } = uiStore();

     if(elem === 'academics') {state = true}
     else {state= false}
     if(elem === 'home') {acadSide = false}
     else {acadSide = true}

     const AcademicsData = (
          <div className="sect-data">
               <h1 className="sect-title">Academics</h1>
               <div className="academics-info">
                    <div className={yearLine === '2023'? 'new-timeline': 'timeline'}>
                         {/* 2018 */}
                         <div className='node-cont left-node'>
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
                                   {yearLine === '2018' || pageFormat === 'simple'?
                                        <p className='node-body'><small>Aug 28</small> - Start attending the Northern Caribbean University</p>
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
                                   
                                   {yearLine === '2019' || pageFormat === 'simple'?
                                        <p className='node-body'><small>Aug 27</small> - Start Sophomore year</p>
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
                                   
                                   {yearLine === '2020' || pageFormat === 'simple'?
                                        <div className='node-body'>
                                             <p><small>Sept 07</small> - Start Junior year</p>
                                             <p>Awards:</p>
                                             <ul>
                                                  <li><a href={DStruct} target="_blank">Data Structures and Algorithms</a></li>
                                                  <li><a href={WebDev} target="_blank">Website Design and Implementation</a></li>
                                             </ul>
                                        </div>
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
                                   
                                   {yearLine === '2021' || pageFormat === 'simple'?
                                        <div className='node-body'>
                                             <p><small>Aug 30</small> - Start Senior year </p>
                                             <p>Awards:</p>
                                             <ul>
                                                  <li><a href={AdvApp} target="_blank">Advanced Application Development</a></li>
                                             </ul>
                                        </div>
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
                                   
                                   {yearLine === '2022' || pageFormat === 'simple'?
                                        <div className='node-body'>
                                             <p><small>Aug 29</small> - Start final semester</p>
                                             <p>Awards:</p>
                                             <ul>
                                                  <li><a href={DbSys} target="_blank">Database Systems</a></li>
                                                  <li><a href={InfoSys} target="_blank">Foundations of Information Systems</a></li>
                                                  <li><a href={AdvProp} target="_blank">Advanced Project/Research Proposal Development</a></li>
                                                  <li><a href={AdvProj} target="_blank">Advanced Project/Research in CIS</a></li>
                                             </ul>
                                        </div>
                                   :''}
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
                                   
                                   {yearLine === '2023' || pageFormat === 'simple'?
                                        <div className='node-body'>
                                             <p><small>Aug 13</small> - Graduation from NCU</p>
                                             <ul>
                                                  <li>Graduated with a Bachelors of Science in Computer Science</li>
                                                  <li>Magna Cum Laude</li>
                                             </ul>
                                        </div>
                                        
                                   :''}
                                   
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )

     return(
          <>
               {/* {pageMode == 'simple' ? : } */}
               <div 
                    className={`academics sect 
                         ${state?'active':''}
                         ${lastElem === 'academics'?'standby':''}
                    `}
               >
                    {AcademicsData}
               </div>

               <div 
                    className={`sect-btn acad-btn ${state?'active':''} ${acadSide?'side-btn':''}`}
                    onClick={ () =>{
                              if(!state){
                                   setLastElem(elem)
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