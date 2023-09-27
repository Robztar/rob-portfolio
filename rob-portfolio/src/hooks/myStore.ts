import { create } from 'zustand'
import {persist} from 'zustand/middleware'

// abstraction for the state properties and methods
interface WindState {
     elem: string
     setElem: (by: string) => void
}
interface UIState {
     data: number
     // addProj: (by: number) => void
     increase: (by: number) => void
}

// store for the window configuration states
export const windStore = create<WindState>()((set) => ({
     elem: 'home',  // stores the selected window
     setElem: (newElem) => {
          set(() => ({ elem: newElem }))
          console.log('store is working. elem is now: '+ newElem)
     }, // activates the selected window
}));

// store for the UI states
export const uiSet = create<UIState>()(
     persist(
     (set) => ({
     data: 0,
     increase: (by: number) => set((state) => ({ data: state.data + by })),
     
     // addProj: (by: number) =>{
     //      set((state) => ({data: state.data + by }))
     // },
     }),{ name: 'uistate' }
));