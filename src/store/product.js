const initialState = [
    { name: 'TV', description: 'See all the things', price: '$300', inventoryCount: 5, category: 'Electronics' },

    { name: 'MacBook', description: 'Do all the things', price: '$800', inventoryCount: 3, category: 'Electronics' },

    { name: 'potato', description: 'mash, fry or bake, good with butter', price: '$2', inventoryCount: 20, category: 'Food' },

    { name: 'lettuce', description: 'make a salad', price: '$5', inventoryCount: 15, category: 'Food' },

    { name: 'Mac and Cheese', description: 'cheesy', price: '$3', inventoryCount: 25, category: 'Food' },
]

let tempState = [...initialState]

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

    case 'SET':
      return initialState.filter(product => product.category === action.payload)
        
    case 'ADD_TO_CART':
      let activeCategory = action.payload.category
      tempState = tempState.map(item => item.name === action.payload ? {...item, inventoryCount: item.inventoryCount - 1} : item)
      let results = tempState.filter(product => product.category === activeCategory);

      return results;
      case 'RESET':
      return initialState;
    default:
      return state
  }
};

export const set = (category) => {
  return {
    type: 'SET',
    payload: category,
  }
}

export const addtoCart = (product) => {
  return{
    type:'ADD_TO_CART',
    payload: product
  }
}

export default productReducer;