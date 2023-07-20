import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers : {
        addtocart : (state,action) => {
            let itemfound = false;
            state.map((ele) => {
                    if(ele.name === action.payload.name){
                        ele.quantity++;
                        itemfound = true;
                    }
                })
            if(itemfound===false)
            {
                state.push(action.payload);
            }
        },
        removefromcart : (state,action) => {
            const remitem = action.payload.name;
            console.log(remitem +" removing from cart");
            state=state.filter((ele) => 
            ele.name.toLowerCase()  !== remitem.toLowerCase());
            return state;
        },
        incrementQuantity : (state,action) => {
            const additem = action.payload.name;
            state.map((ele) => {
                if(ele.name === additem)
                {
                    ele.quantity++;
                }
            })
        },
        decrementQuantity : (state,action) => {
            const remitem = action.payload.name;
            state.map((ele) => {
                if(ele.name === remitem)
                {
                    if(ele.quantity>1){ele.quantity--;}
                    
                }
            })
        }

    }
});

export const {addtocart, removefromcart,incrementQuantity,decrementQuantity} = cartSlice.actions; 

export default cartSlice.reducer;