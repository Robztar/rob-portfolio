import {windStore} from '../../hooks/myStore'

interface HomeProps {
  pageMode?: string; // pageMode: 'default' | 'simple'
}

export const Home: React.FC<HomeProps> = ({ pageMode = 'default' }) => {
     let state: boolean

     const { elem, setElem, setLastElem, initWind } = windStore();

     if(elem === 'home'){state = true}
     else {state= false}

     const homeContent = (
          <div className={`home-data ${state?'active':''}`}>
               <h1 className='home-title'>Robert McFarlane's Portfolio</h1>
               <div className='home-info'>
                    <p>
                    Hi, I'm Robert McFarlane — a developer with a BSc. in Computer Science. I have a strong portfolio of building reliable, scalable, and user-friendly web applications. I am proficient in frontend and backend technologies, and database management. I enjoy solving problems through clean architecture, thoughtful design, and efficient code.
                    </p>
               
                    <p>
                    Whether improving performance, refining UI/UX, or implementing secure data flows, I aim to create systems that are maintainable and impactful. I'm always learning, always improving — and always looking for ways to build better digital experiences.
                    </p>
               </div>
          </div>
     )

     const homeButton = (
          <div className='home-btn'
               onClick={() => {
                    if (!state) {
                    setElem('home');
                    setLastElem('home');
                    initWind();
                    }
               }}
          >
               <p>Home</p>
               <i className="fa-solid fa-house"></i>
          </div>
     )

     return(
          <>
               {pageMode == 'simple' ?
                         <div className={`home ${state?'active':''}`}>
                              {homeContent}
                              {homeButton}
                         </div>
                    :
                         <>
                              <div className='side-btn-housing home-housing'>
                                   <div className={`home ${state?'active':''}`}>
                                        {homeButton}
                                   </div>
                              </div>
                              {homeContent}
                         </>
               }
               
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