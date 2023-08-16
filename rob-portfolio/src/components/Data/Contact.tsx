// import { useState } from 'react'
import MyResume from '../../resume/my_resume.pdf'

type elemProps= {
     elem: string
     setElem?: (elem: string) => void
}

export const Contact = (props: elemProps) =>{
     let state: boolean
     let contactLeft: string
     let contactTop: string
     let contactStyle: object
     let contactBtnLeft: string
     let contactBtnTop: string
     let contactBtnStyle: object

     if(props.elem === 'contact'){
          state = true
          contactLeft = '0'
          contactTop = '0'
          contactBtnLeft = 'calc(97% - 5rem)'
          contactBtnTop = 'calc(80vh - 2.5rem)'
     }else{
          state= false
          if(props.elem !== 'home'){
               contactLeft = 'calc(97% - 5rem)'
               contactTop = 'calc(80vh - 2.5rem)'
          }else{
               contactLeft = 'calc(80% - 2.5rem)'
               contactTop = '80vh'
          }
          contactBtnLeft = contactLeft
          contactBtnTop = contactTop
     }
     contactStyle = {'left': contactLeft,'top': contactTop}
     contactBtnStyle = {'left': contactBtnLeft,'top': contactBtnTop}

     return(
          <>
               <div 
                    className={`contact sect ${state===true?'active':''}`}
                    style={contactStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('contact')
                         }
                    }
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Contact Information</h1>
                         <div className="contact-info">
                              <p>This website was created by <strong>Robert V. McFarlane</strong> as his portfolio website, where his skills web development can be expressed and demonstrated.
                              <br/>To contact Robert McFarlane or see more from him, see the links below:</p>
                              <ul>
                                   <li className="contacts"><i className='fa fa-envelope'></i><a href="mailto:leandomc@gmail.com">Leandomc@gmail.com</a><i className="fa fa-external-link" aria-hidden="true"></i></li>
                                   <li className="contacts"><i className='fa fa-mobile'></i><a href="tel:+876-797-7361">876-797-7361</a></li>
                                   <li className="contacts"><i className='fa fa-linkedin-square'></i><a href="https://www.linkedin.com/in/robert-v-mcfarlane/" target="_blank">https://www.linkedin.com/in/robert-v-mcfarlane/</a><i className="fa fa-external-link" aria-hidden="true"></i></li>
                                   <li className="contacts"><i className='fa fa-github'></i><a href="https://github.com/Robztar" target="_blank">https://github.com/Robztar</a><i className="fa fa-external-link" aria-hidden="true"></i></li>
                                   <li className="contacts"><i className='fa fa-globe'></i><a href="https://elaborate-arithmetic-fb683f.netlify.app/" target="_blank">https://elaborate-arithmetic-fb683f.netlify.app/</a><i className="fa fa-external-link" aria-hidden="true"></i></li>
                              </ul>
                              <p>Resume - </p><a href={MyResume} target="_blank">My Resume (2023)</a>
                         </div>
                    </div>
               </div>
               <div 
                    className={`sect-btn ${state===true?'active':''}`}
                    style={contactBtnStyle}
                    onClick={ () =>{
                         if(state === false)
                              props.setElem?.('contact')
                    }
               }
               >
                    <i className="fa-solid fa-address-card"></i>
                    <p>Contact</p>
               </div>
          </>
     )
}