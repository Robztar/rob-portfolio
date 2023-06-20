import { useState } from "react"

useState
type elemProps= {
     elem: string
     setElem?: (elem: string) => void
}

export const Academics = (props: elemProps) =>{
     let state: boolean
     let acadLeft: string
     let acadTop: string
     let acadStyle: object
     let acadBtnLeft: string
     let acadBtnTop: string
     let acadBtnStyle: object

     const [yearLine, setYLine] = useState('')

     if(props.elem === 'academics'){
          state = true
          // acadLeft = '10%'
          // acadTop = '15vh'
          acadLeft = '0'
          acadTop = '0'
          acadBtnLeft = 'calc(97% - 5rem)'
          acadBtnTop = 'calc(35vh - 2.5rem)'
     }else{
          state= false
          if(props.elem !== 'home'){
               // acadPos = 'calc(35% - 2.5rem)'
               acadLeft = 'calc(97% - 5rem)'
               acadTop = 'calc(35vh - 2.5rem)'
               // acadBtnLeft = '0'
               // acadBtnTop = '0'
          }else{
               acadLeft = 'calc(20% - 2.5rem)'
               acadTop = '80vh'
               // acadBtnLeft = 'calc(20% - 2.5rem)'
               // acadBtnTop = '80vh'
          }
          acadBtnLeft = acadLeft
          acadBtnTop = acadTop
     }
     acadStyle = {'left': acadLeft,'top': acadTop}
     acadBtnStyle = {'left': acadBtnLeft,
                         'top': acadBtnTop}
     // acadIconStyle = acadStyle

     return(
          <>
               <div 
                    className={`academics sect ${state===true?'active':''}`}
                    // style={{'left': acadPos}}
                    style={acadStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('academics')
                         }
                    }
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Academics</h1>
                         <div className="academics-info">
                              <div className="timeline">
                                   <div className={`
                                        node-cont left-node 
                                        ${yearLine === '2018'?'active':''}
                                        ${yearLine !== '' && yearLine !== '2018'?'inactive':''} 
                                   `}>
                                        <div className="node-point"></div>
                                        <span className="node-point-span"></span>
                                        <div className="node-data">
                                             <h2>2018</h2>
                                             <p><small>Aug 28</small> - Start attending Northern Caribbean University</p>
                                        </div>
                                   </div>
                                   <div className="node-cont right-node">
                                        <div className="node-point"></div>
                                        <span className="node-point-span"></span>
                                        <div className="node-data">
                                             <h2>2019</h2>
                                             <p><small>Aug 27</small> - Start Sophomore year</p>
                                        </div>
                                   </div>
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
                                        <div className={`node-data spec-node ${yearLine === '2020'?'active':''}`}>
                                             <h2>2020</h2>
                                             <p><small>Sept 07</small> - Start Junior year <i>...</i></p>
                                             <ul>
                                                  <li>Data Structures Top Performer</li>
                                                  <li>Web Design Top Performer</li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="node-cont right-node">
                                        <div className="node-point"></div>
                                        <span className="node-point-span"></span>
                                        <div className="node-data">
                                             <h2>2021</h2>
                                             <p><small>30/08/2021</small> - Start Senior year</p>
                                        </div>
                                   </div>
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
                                        <div className={`node-data spec-node ${yearLine === '2022'?'active':''}`}>
                                             <h2>2022</h2>
                                             <p><small>29/08/2022</small> - Start final semester <i>...</i></p>
                                             <ul>
                                                  <li>Database Systems Top Performer</li>
                                                  <li>Foundations of Information Systems Top Performer</li>
                                                  <li>Advanced Proposal Top Performer</li>
                                                  <li>Advanced Project Top Performer</li>
                                             </ul>
                                        </div>
                                   </div>
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
                                        <div className={`node-data spec-node ${yearLine === '2023'?'active':''}`}>
                                             <h2>2023</h2>
                                             <p><small>13/08/2023</small> - Graduation from NCU <i>...</i></p>
                                             <ul>
                                                  <li>Graduated  with a Bachelors of Science in Computer Science</li>
                                                  <li>X Cum Laude Honours...?</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div 
                    className={`sect-btn ${state===true?'active':''}`}
                    style={acadBtnStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('academics')
                         }
                    }
               >
                    <i className="fa-solid fa-book"></i>
                    <p>Academics</p>
               </div>
          </>
     )
}