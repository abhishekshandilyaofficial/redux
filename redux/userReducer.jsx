let initialState = {
    user : "",
    loading : true
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case "success_users":
            return {
                user : action.payload,
                loading : false
            } 
        default:
            return state;
    }
}