import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state,action) => {
   console.log(action)
   action.payload.qty=1;
   state.items.push(action.payload)
     
    },
    remove: (state,action) => {
     state.items=state.items.filter(i=>i.id !==action.payload.id)
    },
    clear: (state, action) => {
    state.items.length=0;
    },
    addQty:(state,action)=>{
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    removeQty:(state,action)=>{
 const item = state.items.find(item => item.id === action.payload);
 if (item.qty===1) {
state.items=state.items.filter(i=>i.id!==action)
 }
 else{
  item.qty -= 1;
 }
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, clear ,addQty,removeQty} = cartSlice.actions

export default cartSlice.reducer;