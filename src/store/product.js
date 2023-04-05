// let initialState = [
//     { name: 'TV', description: 'See all the things', price: '$300', inventoryCount: 5, category: 'Electronics' },

//     { name: 'MacBook', description: 'Do all the things', price: '$800', inventoryCount: 3, category: 'Electronics' },

//     { name: 'potato', description: 'mash, fry or bake, good with butter', price: '$2', inventoryCount: 20, category: 'Food' },

//     { name: 'lettuce', description: 'make a salad', price: '$5', inventoryCount: 15, category: 'Food' },

//     { name: 'Mac and Cheese', description: 'cheesy', price: '$3', inventoryCount: 25, category: 'Food' },
// ]

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

// export default productReducer;