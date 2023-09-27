import { useState } from 'react'
import {windStore} from '../../hooks/myStore'



export const Home = () =>{
     let state: boolean
     let homeLeft: string
     let homeTop: string
     let homeStyle: object

     const [ elem, setElem ] = windStore((state) => [ state.elem, state.setElem ]);

     if(elem === 'home'){
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
                         if(state === false){
                              setElem('home')
                         }
                    }
               }
          >
               <div className={`home-data ${state===true?'active':''}`}>
                    <h1 className='home-title'>Robert McFarlane's Portfolio</h1>
                    <div className='home-info'>
                         Hello, I am Robert McFarlane. I have a BSc. in Computer Science from the Northern Carribean University (NCU).
                         My field of speciality is in Frontend Web Development. I would Consider myself as a skilled, creative, detail-oriented individual.
                         I'm always seeking ways of improving projects and am always open to learning new concepts.
                    </div>
               </div>
               <div className={`home-btn ${state===true?'active':''}`}>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
               </div>
          </div>
     )
}