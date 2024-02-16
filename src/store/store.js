
import {create} from 'zustand'

const useStore = create((set, getState) => ({
 count: 0,
 cart:[],
 addToCart: (product) =>{
     (getState().cart.push(product))
     console.log(getState().cart)
    },
 increment: () => set((state) => ({ count: state.count + 1 })),
 decrement: () => set((state) => ({ count: state.count - 1 })),
 reset: () => set({ count: 0 })
}))

export default useStore