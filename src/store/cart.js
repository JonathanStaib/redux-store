let initialState = [];

function cartReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
    let cart = state.filter(item => item.name !== action.payload.name)
    return [
      ...cart,
      action.payload
    ]
    // return{
    //   state: cart
    // }
    default:
      return state
  }
}

export const Add = (item) => {
  return{
    type: 'ADD_TO_CART',
    payload: item
  }
}

export default cartReducer;