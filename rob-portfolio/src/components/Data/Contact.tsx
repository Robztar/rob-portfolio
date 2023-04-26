// import { useState } from 'react'

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