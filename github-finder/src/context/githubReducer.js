export const gitHubReducer = (state,action)=>{
 
    switch (action.type) {
        case "GET_USERS":
          return {
            ...state,
            users:action.payload,
            loading:false
          }
         case "LOADING":
          return {
            ...state,
            loading:true
          }
          case "DELETE_LOADING":
            return {
              ...state,
              loading:false
            }
          case "GET_USER_LOGIN":
            return{
              ...state,
              user:action.payload.user,
              repos:action.payload.repos
            }
          
        default:
            return state;
    }

}