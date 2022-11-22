// const initialState = {
//     articles: []
// };

// const starredReducer = (state = initialState, action) => {
//     console.log(action)
//     switch (action.type) {
        
//         default:
//                 return state;
//         case "ADD_STARRED_ARTICLE":
//             return {
//                 ...state,
//                 articles: [...state.articles, action.payload]
//             };
//             case "REMOVE_STARRED_ARTICLE":
//                 return {
//                     articles: [...state.articles.filter(article => article !== action.payload)]
//                 };
            
//     }
// };

// export default starredReducer;