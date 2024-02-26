import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carts:[],
}

const cartSlice = createSlice({
  name: 'cartslice',
  initialState,
  reducers: {
   //add to cart

   addToCart:(state, action) =>{
    console.log("action", action)
    const ItemIndex = state.carts.findIndex((iteam)=> iteam.pid === action.payload.pid)
    console.log(ItemIndex)

    if(ItemIndex >= 0){
      state.carts[ItemIndex].quantity += 1
    }else{
      const temp = {...action.payload, quantity: 1}
      state.carts = [...state.carts, temp]
    }
  },
  

  // remove perticular iteam

  removeToCart:(state,action) =>{
    const data = state.carts.filter((ele)=>ele.pid !== action.payload);
    state.carts = data
  },

  //remove single iteams
  removeSingleIteams:(state,action) =>{
    const ItemIndex_dec = state.carts.findIndex((iteam)=> iteam.pid === action.payload.pid);

    if(state.carts[ItemIndex_dec].quantity >= 1){
        state.carts[ItemIndex_dec].quantity -= 1
    }
  },

}
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, removeSingleIteams} = cartSlice.actions

export default cartSlice.reducer