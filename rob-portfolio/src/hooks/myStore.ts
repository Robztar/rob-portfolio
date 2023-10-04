import { create } from 'zustand'
import {persist} from 'zustand/middleware'

// abstraction for the state properties and methods
interface WindState {
     elem: string
     yearLine: string
     techSkill: string
     softSkill: string
     activeProj: string
     setElem: (by: string) => void
     initWind: () => void
     setYLine: (by: string) => void
     setTechSkill: (by: string) => void
     setSoftSkill: (by: string) => void
     setProj: (by: string) => void
}
interface UIState {
     pageFormat: string
     bgDark: boolean
     setFormat: (by: string) => void
     switchBG: () => void
}

// store for the window configuration states
export const windStore = create<WindState>()((set) => ({
     elem: 'home',  // stores the selected window
     yearLine: '',  // stores the selected academic year
     techSkill: '',  // 
     softSkill: '',  // 
     activeProj: '',  // 
     setElem: (newElem) => {
          set(() => ({ elem: newElem }))
          console.log('store is working. elem is now: '+ newElem)
     }, // activates the selected window
     initWind: () => {
          set(() => ({ yearLine:'', techSkill:'', softSkill:'', activeProj: '' }))
          console.log('reset all')
     }, // resets all wind attributes
     setYLine: (newYLine) => set(() => ({ yearLine: newYLine })), // 
     setTechSkill: (newTS) => set(() => ({ techSkill: newTS })), // 
     setSoftSkill: (newSS) => set(() => ({ softSkill: newSS })), // 
     setProj: (newProj) => set(() => ({ activeProj: newProj })), // 
}));

// store for the UI states
export const uiStore = create<UIState>()(
     persist(
          (set) => ({
          pageFormat: 'default',
          bgDark: true,
          setFormat: (newFormat) => set(() => ({ pageFormat: newFormat })),
          
          switchBG: () =>{
               set((state) => ({bgDark: !state.bgDark }))
          },
          }),{ name: 'uistate' }
     )
);