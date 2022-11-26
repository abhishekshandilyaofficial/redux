let initialState = {
    ball:10
}
function ballReducer(state=initialState, action){
    switch (action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        default:
            return state;
    }
}
export default ballReducer;