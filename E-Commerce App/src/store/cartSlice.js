import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products : [],
    productsNumber :0
}
// export const cartSlice = createSlice({
// name :"cart",
// initialState,

// reducers: {
//     addToCart: (state, action) => {
//      // check if product is alreay in array
// const addProductExists = state.products.find((product)=>product.id === action.payload.id)
//     if(addProductExists){
//         addProductExists.quantity += parseInt(action.payload.quantity)
//     } else{
//         state.products.push({...action.payload , quantity: parseInt(action.payload.quantity)})
//     }
//     state.productsNumber = state.productsNumber + parseInt(action.payload.quantity)

//     },
//     removeFromCart: (state, action) => {
      
//     }
// }

// })

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        // Check if product is already in the array
        const addProductExists = state.products.find(
          (product) => product.id === action.payload.id
        );
  
        if (addProductExists) {
          // Increment quantity if product exists
          addProductExists.quantity += parseInt(action.payload.quantity);
        } else {
          // Add product to array if it doesn't exist
          state.products.push({
            ...action.payload,
            quantity: parseInt(action.payload.quantity),
          });
        }
  
        // Update total products number
        state.productsNumber += parseInt(action.payload.quantity);
      },
      removeFromCart: (state, action) => {
        // Remove product from array
        // You can implement the removal logic here
      },
    },
  });

export const {addToCart , removeFromCart}= cartSlice.actions
export default cartSlice.reducer