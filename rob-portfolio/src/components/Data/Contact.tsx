import {windStore} from '../../hooks/myStore'
import MyResume from '../../resume/robert-mcfarlane_resume.pdf'

export const Contact = () =>{
     let state: boolean
     let contactSide: boolean

     const { elem, lastElem, setElem, setLastElem, initWind } = windStore();

     if(elem === 'contact'){state = true}
     else{state= false}

     if(elem === 'home') {contactSide = false}
     else {contactSide = true}

     return(
          <>
               <div 
                    className={`contact sect 
                         ${state?'active':''} 
                         ${lastElem === 'contact'?'standby':''}
                    `}
               >
                    <div className="sect-data">
                         <h1 className="sect-title">Contact</h1>
                         <div className="contact-info">
                              <p>This website was created by <strong>Robert V. McFarlane</strong> as his portfolio website, where his skills in web development can be expressed and demonstrated.
                              <br/>To contact Robert McFarlane or to see more information about him, see the links provided:</p>
                              <table className="contact-links">
                                   <tr className="contacts">
                                        <th><i className='fa fa-envelope'
                                                  onClick={ () =>{
                                                       window.open('mailto:leandomc@gmail.com', '_blank')
                                                  }
                                             }></i></th>
                                        <td><a href="mailto:leandomc@gmail.com">leandomc@gmail.com</a><i className="fa fa-external-link" aria-hidden="true"></i></td>
                                   </tr>
                                   <tr className="contacts">
                                        <th><i className='fa fa-mobile'
                                                  onClick={ () =>{
                                                       window.open('tel:+876-797-7361', '_blank')
                                                  }
                                             }></i></th>
                                        <td><a href="tel:+876-797-7361">876-797-7361</a></td>
                                   </tr>
                                   <tr className="contacts">
                                        <th><i className='fa fa-linkedin-square'
                                             onClick={ () =>{
                                                       window.open('https://www.linkedin.com/in/robert-v-mcfarlane/', '_blank')
                                                  }
                                             }></i></th>
                                        <td><a href="https://www.linkedin.com/in/robert-v-mcfarlane/" target="_blank">linkedin.com/in/robert-v-mcfarlane/</a><i className="fa fa-external-link" aria-hidden="true"></i></td>
                                   </tr>
                                   <tr className="contacts">
                                        <th><i className='fa fa-github'
                                                  onClick={ () =>{
                                                       window.open('https://github.com/Robztar', '_blank')
                                                  }
                                             }></i></th>
                                        <td><a href="https://github.com/Robztar" target="_blank">github.com/Robztar</a><i className="fa fa-external-link" aria-hidden="true"></i></td>
                                   </tr>
                                   <tr className="contacts">
                                        <th><i className='fa fa-globe'
                                                  onClick={ () =>{
                                                       window.open('https://robmc-portfolio.netlify.app/', '_blank')
                                                  }
                                             }></i></th>
                                        <td><a href="https://robmc-portfolio.netlify.app/" target="_blank">robmc-portfolio.netlify.app/</a><i className="fa fa-external-link" aria-hidden="true"></i></td>
                                   </tr>
                              </table>
                              <div className='resume-link'>
                                   <p>Here is a link to Robert's Primary Resume:</p>
                                   <a href={MyResume} target="_blank">My Resume</a>
                              </div>
                              <small>&emsp; Last Updated: April 18, 2024</small>
                              <div className='p-source-link'>
                                   <p>Here is a link to the source code of this website:</p>
                                   <a href='https://github.com/Robztar/rob-portfolio' target="_blank">Source Code</a>
                              </div>
                         </div>
                    </div>
               </div>
               <div 
                    className={`sect-btn contact-btn ${state?'active':''} ${contactSide?'side-btn':''}`}
                    onClick={ () =>{
                         if(!state){
                              setLastElem(elem)
                              setElem('contact')
                              initWind()
                         }
                    }}
               >
                    <i className="fa-solid fa-address-card"></i>
                    <p>Contact</p>
               </div>
          </>
     )
}