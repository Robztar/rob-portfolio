import { useEffect, useRef } from 'react';

import { windStore, uiStore } from './hooks/myStore'

import { Default } from './components/PageFormats/Default'
import { Simplified } from './components/PageFormats/Simplified'
import { Emulator } from './components/PageFormats/Emulator'


function App() {
  const {menu, switchMenu} = windStore();
  const {pageFormat, bgDark, setFormat, switchBG } = uiStore();

  {/* Background Colour Mode Selector */}
  const BGCtrl = (
    <div className='bg-ctrl'>
      <i className={`far fa-sun ${bgDark? '': 'active'}`}></i>
      <label className="bg-toggle">
        <input 
          type="checkbox" 
          checked={bgDark ? true : false}
          onChange={()=>{
            switchBG();
          }}
        />
        <span className="bg-slider"></span>
      </label> 
      <i className={`far fa-moon ${bgDark? 'active': ''}`}></i>
    </div>
  )
  
  {/* Layout Mode Controller */}
  const LayoutCtrl = (
    <div className='layout-ctrl-cont'>
      <div 
        className={`layout-ctrl ${pageFormat === 'default'?'active':''}`}
        onClick={()=>{
          if(pageFormat !== 'default') setFormat('default')
        }}
      >Default</div>
      <div 
        className={`layout-ctrl ${pageFormat === 'simple'?'active':''}`}
        onClick={()=>{
          if(pageFormat !== 'simple') setFormat('simple')
        }}
      >Simplified</div>
      {/* <div 
        className={`layout-ctrl ${pageFormat === 'emulator'?'active':''}`}
        onClick={()=>{
          if(pageFormat !== 'emulator')
            setFormat('emulator');
        }}
      >Emulator</div> */}
    </div>
  )

  const uiCtrlrRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { menu, switchMenu } = windStore.getState();
      if (uiCtrlrRef.current && !uiCtrlrRef.current.contains(event.target as Node)) {
        console.log('Clicked outside UICtrlr')

        if(menu) {
          console.log('closing menu...')
          switchMenu()
        };
      }
    };

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, []);

  if(pageFormat === 'default'){
    const UICtrlr = (
      <div ref={uiCtrlrRef} className={`float-menu-cont ${menu? 'active': ''} ${bgDark? '': 'light-mode'}`}>
        <div 
          className={`menu-toggle`}
          onClick={()=>{
              switchMenu()
          }}
        >
          <div className='tripbar'></div>
        </div>
        <div className='menu-body'>
          {BGCtrl}
          {LayoutCtrl}
        </div>
      </div>
    )

    return ( 
      <>
        <Default UICtrlr={UICtrlr} />
      </>
      
    )
  }else if(pageFormat === 'simple'){
    return ( 
      <>
        <Simplified BGCtrl={BGCtrl} />
      </> 
    )
  }
  // else if(pageFormat === 'emulator'){
  //   return ( 
  //     <>
  //       <UICtrlr />
  //       <Emulator /> 
  //     </>
  //   )
  // }
  else{
    return (
      <div className="App"> Sorry, <br/> There has been an error!</div>
    )
  }
}

export default App