// const initialState = {
//   categories: [
//     { name: 'Electronics', description: 'they do the thing'},
//     { name: 'Food', description: 'they tasty'},
//     ],

//   activeCategory: '',

//   }

//   function categoryReducer(state=initialState, action) {
//     let { type, payload } = action;
//     switch(type){
//       case 'CATEGORY':
//         return{
//           ...state,
//           activeCategory: payload
//         }
//       default:
//         return state
//     }
//   }

//   export const Category = (name) => {
//     return{
//       type: 'CATEGORY',
//       payload: name,
//     }
//   }

//   export default categoryReducer;