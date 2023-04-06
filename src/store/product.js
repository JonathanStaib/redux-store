import axios from "axios"

const initialState = [
    // { name: 'TV', description: 'See all the things', price: '$300', inventoryCount: 5, category: 'Electronics' },

    // { name: 'MacBook', description: 'Do all the things', price: '$800', inventoryCount: 3, category: 'Electronics' },

    // { name: 'potato', description: 'mash, fry or bake, good with butter', price: '$2', inventoryCount: 20, category: 'Food' },

    // { name: 'lettuce', description: 'make a salad', price: '$5', inventoryCount: 15, category: 'Food' },

    // { name: 'Mac and Cheese', description: 'cheesy', price: '$3', inventoryCount: 25, category: 'Food' },
]

let tempState = []

// function productReducer(state=initialState, action) {
//   let { type, payload } = action;
//   switch(type){
//     case 'ADD_TO_CART':
//       return state.map(item => item.name === payload.name ? {
//         ...item,
//         inventoryCount: item.inventoryCount - 1
//       }
//       :
//       item
//       )
      
//     default:
//       return state
//   }
// }

function productReducer(state = initialState, action) {
  switch (action.type) {

    case 'SET-PRODUCT':
      tempState = [...action.payload];
      return action.payload;

    case 'UPDATE_PRODUCT':
      return state.map(product => product.name === action.payload ? action.payload : product)

    case 'SELECT':
      return tempState.filter(product => product.category === action.payload)
        
    // case 'ADD_TO_CART':
    //   let activeCategory = action.payload.category
    //   tempState = tempState.map(item => item.name === action.payload ? {...item, inventoryCount: item.inventoryCount - 1} : item)
    //   let results = tempState.filter(product => product.category === activeCategory);

    //   return results;
      case 'RESET':
      return initialState;
    default:
      return state
  }
};

export const select = (category) => {
  return {
    type: 'SELECT',
    payload: category,
  }
}

export const setProduct = (data) => {
  return {
    type: 'SET-PRODUCT',
    payload: data
  }
}

export const setCategory = (data) => {
  return {
    type: 'SET-CATEGORY',
    payload: data
  }
}

export const updateProduct = (product) => {
  return{
    type: 'UPDATE_PRODUCT',
    payload: product
  }
}

export const get = (endpoint) => async (dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/${endpoint}`);

  if (endpoint === 'products'){
    dispatch(setProduct(response.data.results))
  }
  if (endpoint === 'categories'){
    dispatch(setCategory(response.data.results))
  }
}

export const adjustInventory = (product) => async (dispatch, getState) => {
  product.inStock--;
  let response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  dispatch(updateProduct(response.data))
}
 
export const addtoCart = (product) => {
  return{
    type:'ADD_TO_CART',
    payload: product
  }
}

export default productReducer;