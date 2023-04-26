type elemProps= {
     elem: string
     setElem?: (elem: string) => void
}

export const Projects = (props: elemProps) =>{
     let state: boolean
     let projLeft: string
     let projTop: string
     let projStyle: object
     let projBtnLeft: string
     let projBtnTop: string
     let projBtnStyle: object

     if(props.elem === 'projects'){
          state = true
          projLeft = '0'
          projTop = '0'
          projBtnLeft = 'calc(97% - 5rem)'
          projBtnTop = 'calc(65vh - 2.5rem)'
     }else{
          state= false
          if(props.elem !== 'home'){
               projLeft = 'calc(97% - 5rem)'
               projTop = 'calc(65vh - 2.5rem)'
          }else{
               projLeft = 'calc(60% - 2.5rem)'
               projTop = '80vh'
          }
          projBtnLeft = projLeft
          projBtnTop = projTop
     }
     projStyle = {'left': projLeft,'top': projTop}
     projBtnStyle = {'left': projBtnLeft,'top': projBtnTop}

     return(
          <>
               <div 
                    className={`projects sect ${state===true?'active':''}`}
                    style={projStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('projects')
                         }
                    }
               >
                    
               </div>
               <div 
                         className={`sect-btn ${state===true?'active':''}`}
                         style={projBtnStyle}
                         onClick={ () =>{
                                   if(state === false)
                                        props.setElem?.('projects')
                              }
                         }
                    >
                    <i className="fa-solid fa-list"></i>
                    <p>Projects</p>
               </div>
          </>
     )
}