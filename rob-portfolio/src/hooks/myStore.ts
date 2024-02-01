import { create } from 'zustand'
import {persist} from 'zustand/middleware'

// abstraction for the state properties and methods
interface WindState {
     menu: boolean
     elem: string
     lastElem: string
     yearLine: string
     techSkill: string
     softSkill: string
     activeProj: string
     switchMenu: () => void
     setElem: (by: string) => void
     setLastElem: (by: string) => void
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
     menu: false,
     elem: 'home',  // stores the selected window
     lastElem: 'home',  // stores the previously selected window
     yearLine: '',  // stores the selected academic year
     techSkill: '',  // 
     softSkill: '',  // 
     activeProj: '',  // 
     switchMenu: () =>{
          set((state) => ({menu: !state.menu }))
     },
     setElem: (newElem) => {
          set(() => ({ elem: newElem }))
          console.log('store is working. elem is now: '+ newElem)
     }, // activates the selected window
     setLastElem: (update) => {
          set((state) => ({lastElem: update }))
     }, // designates the previously selected window
     initWind: () => {
          set(() => ({ menu: false, yearLine: '', techSkill: '', softSkill: '', activeProj: '' }))
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