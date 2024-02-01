import {windStore} from '../../hooks/myStore'



export const Home = () =>{
     let state: boolean

     const { elem, setElem, setLastElem, initWind } = windStore();

     if(elem === 'home'){state = true}
     else {state= false}

     return(
          <>
               <div className={`home ${state?'active':''}`}>
                    <div className={`home-data ${state?'active':''}`}>
                         <h1 className='home-title'>Robert McFarlane's Portfolio</h1>
                         <div className='home-info'>
                              Hello, I am Robert McFarlane. I have a BSc. in Computer Science from the Northern Carribean University (NCU).
                              My field of speciality is Web Development. I would Consider myself as a skilled, creative, detail-oriented individual.
                              I'm always seeking ways of improving projects and am always open to learning new concepts.
                         </div>
                    </div>
                    <div 
                         className={`home-btn ${state?'active':''}`}
                         onClick={ () =>{
                              if(!state){
                                   setElem('home')
                                   setLastElem('home')
                                   initWind()
                              }
                         }
                    }
                    >
                         <i className="fa-solid fa-house"></i>
                         <p>Home</p>
                    </div>
               </div>
               <div 
                    className={`home-btn-ext ${state?'active':''}`}
                    onClick={ () =>{
                         if(!state){
                              setElem('home')
                              initWind()
                         }
                    }
               }>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
               </div>
          </>
     )
}