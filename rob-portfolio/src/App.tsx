import { uiStore } from './hooks/myStore'

import { Default } from './components/PageFormats/Default'
import { Simplified } from './components/PageFormats/Simplified';
import { Emulator } from './components/PageFormats/Emulator';


function App() {
  const {pageFormat, bgDark, setFormat, switchBG } = uiStore();
  // default /or/ simple /or/ emulator

  const BGCtrl = () =>{
      return(
        <div className={`bg-ctrl-cont ${bgDark? '': 'light-mode'}`}>
          <i className="far fa-sun"></i>
          <label className="bg-toggle">
            <input 
              type="checkbox" 
              checked={bgDark ? true : false}
              onClick={()=>{
                switchBG();
              }}
            />
            <span className="bg-slider"></span>
          </label> 
          <i className="far fa-moon"></i>
        </div>
      )
  }
  const LayoutCtrl = () =>{
      return(
        <div className={`layout-ctrl-cont ${bgDark? '': 'light-mode'}`}>
          <div 
            className={`layout-ctrl ${pageFormat === 'default'?'active':''}`}
            onClick={()=>{
              if(pageFormat !== 'default')
                setFormat('default');
            }}
          >Default</div>
          <div 
            className={`layout-ctrl ${pageFormat === 'simple'?'active':''}`}
            onClick={()=>{
              if(pageFormat !== 'simple')
                setFormat('simple');
            }}
          >Simplified</div>
          <div 
            className={`layout-ctrl ${pageFormat === 'emulator'?'active':''}`}
            onClick={()=>{
              if(pageFormat !== 'emulator')
                setFormat('emulator');
            }}
          >Emulator</div>
        </div>
      )
  }


  if(pageFormat === 'default'){
    return ( 
      <>
        <BGCtrl />
        <LayoutCtrl />
        <Default /> 
      </>
      
    )
  }
  else if(pageFormat === 'simple'){
    return ( 
      <>
        <BGCtrl />
        <LayoutCtrl />
        <Simplified />
      </> 
    )
  }
  else if(pageFormat === 'emulator'){
    return ( 
      <>
        <BGCtrl />
        <LayoutCtrl />
        <Emulator /> 
      </>
    )
  }
  else{
    return (
      <div className="App"> Sorry, <br/> There has been an error!</div>
    )
  }
}

export default App


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank" title='Click to learn more'>
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank" title='Click to learn more'>
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           <code>src/App.tsx</code> Has been edited... HMR works!
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
