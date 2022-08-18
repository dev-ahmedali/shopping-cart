import products from '../product.json';
import { actionTypes } from '../type';

const initProducts = [...products]
const initialState = {
    products: initProducts,
    cartItems: [],
};
  
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.addToCart:
        let filProduct = state.products.filter(item => item.id !== action.payload.id)
        return {
          ...state, 
          cartItems: [...state.cartItems, action.payload],
          products: filProduct,
        };
  
      case actionTypes.removeFromCart:
        let filData = state.cartItems.filter(item => item.id !== action.payload.id)
        action.payload.quantity = 1
        return {
            ...state, 
            cartItems: filData, 
            products: [...state.products, action.payload]
        }

      case actionTypes.addItemQty:
        let addItem = []
        state.cartItems.map(item => {
            if(item.id === action.payload.id){
                item.quantity += 1
            }
            return addItem.push(item)
        })
        return {
            ...state, 
            cartItems: addItem, 
        }

      case actionTypes.removeItemQty:
        let removeItem = []
        state.cartItems.map(item => {
            if(item.id === action.payload.id){
                item.quantity -= 1
            }
            return removeItem.push(item)
        })
        return {
            ...state, 
            cartItems: removeItem, 
        }

      default:
        return state;
    }
}

export default cartReducer;
