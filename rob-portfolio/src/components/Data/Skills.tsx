type elemProps= {
     elem: string
     setElem?: (elem: string) => void
}

export const Skills = (props: elemProps) =>{
     let state: boolean
     let skillLeft: string
     let skillTop: string
     let skillStyle: object
     let skillBtnLeft: string
     let skillBtnTop: string
     let skillBtnStyle: object

     if(props.elem === 'skills'){
          state = true
          // skillLeft = '10%'
          // skillTop = '15vh'
          skillLeft = '0'
          skillTop = '0'
          skillBtnLeft = 'calc(97% - 5rem)'
          skillBtnTop = 'calc(50vh - 2.5rem)'
     }else{
          state= false
          if(props.elem !== 'home'){
               skillLeft = 'calc(97% - 5rem)'
               skillTop = 'calc(50vh - 2.5rem)'
          }else{
               skillLeft = 'calc(40% - 2.5rem)'
               skillTop = '80vh'
          }
          skillBtnLeft = skillLeft
          skillBtnTop = skillTop
     }
     skillStyle = {'left': skillLeft,'top': skillTop}
     skillBtnStyle = {'left': skillBtnLeft,'top': skillBtnTop}

     return(
          <>
               <div 
                    className={`skills sect ${state===true?'active':''}`}
                    // style={{'left': skillPos}}
                    style={skillStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('skills')
                         }
                    }
               >
                    
               </div>
               <div 
                    className={`sect-btn ${state===true?'active':''}`}
                    style={skillBtnStyle}
                    onClick={ () =>{
                              if(state === false)
                                   props.setElem?.('skills')
                         }
                    }
               >
                    <i className="fa-solid fa-gears"></i>
                    <p>Skills</p>
               </div>
          </>
     )
}