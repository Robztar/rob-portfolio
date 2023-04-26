import { useState } from 'react'

type elemProps= {
     elem: string
     setElem?: (elem: string) => void
}

export const Home = (props: elemProps) =>{
     let state: boolean
     let homeLeft: string
     let homeTop: string
     let homeStyle: object

     if(props.elem === 'home'){
          state = true
          homeLeft = '10%'
          homeTop = '15vh'
     }else{
          state= false
          // homeLeft = 'calc(20% - 2.5rem)'
          // homeTop = '80vh'
          homeLeft = 'calc(97% - 5rem)'
          homeTop = 'calc(20vh - 2.5rem)'
     }
     console.log('Home pos is: '+homeLeft)
     homeStyle = {'left': homeLeft,'top': homeTop}

     return(
          <div 
               className={`home ${state===true?'active':''}`}
               // style={{'left': homePos}}
               style={homeStyle}
               onClick={ () =>{
                         if(state === false)
                              props.setElem?.('home')
                    }
               }
          >
               <div className={`home-btn ${state===true?'active':''}`}>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
               </div>
          </div>
     )
}