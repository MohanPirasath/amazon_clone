export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log("action:", action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
      // ...state,basket: state.basket.filter(item=>item.id !== action.id)
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index,1);
      } else {
        console.warn("error da in ", action.id);
      }
      return{
        ...state,
        basket:newBasket
      }

    default:
      return state;
  }
};

export default reducer;
