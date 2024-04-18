import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    products : [],
    productsNumber :0
}
export const cartSlice = createSlice({
name :"cart",
initialState,

reducers  :{

addToCart : {
addToCart :(state,action)=>{

}
},


removeFromCart:{
removeFromCart : (state,action)=>{

}

}


}

})

export const {addToCart , removeFromCart}= cartSlice.actions
export default cartSlice.reducer