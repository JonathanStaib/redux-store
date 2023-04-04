const initialState = {
  categories: [
    { name: 'Electronics'},
    { name: 'Food'},
    ],

  activeCategory: '',

  products: [
    { name: 'TV', description: 'See all the things', price: '$300', inventoryCount: 5, category: 'Electronics' },

    { name: 'MacBook', description: 'Do all the things', price: '$800', inventoryCount: 3, category: 'Electronics' },

    { name: 'potato', description: 'mash, fry or bake, good with butter', price: '$2', inventoryCount: 20, category: 'Food' },

    { name: 'lettuce', description: 'make a salad', price: '$5', inventoryCount: 15, category: 'Food' },

    { name: 'Mac and Cheese', description: 'cheesy', price: '$3', inventoryCount: 25, category: 'Food' },
  ]
}

  function categoryReducer(state = initialState, action) {
    switch (action.type) {
      case 'CategoryChange':
        return {
          ...state,
          activeCategory: action.payload
        }
      case 'RESET':
        return initialState;
      default:
        return state
    }
  };

  export const categoryChange = (activeCategory) => {
    return{
      type: 'CategoryChange',
      payload: activeCategory,
    }
  }

  export const reset = () => {
    return{
      type: 'RESET',
      payload: {},
    }
  }
  
  export default categoryReducer;