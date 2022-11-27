let initialState = {
    ball:10
}
function ballReducer(state=initialState, action){
    switch (action.type){
        case "increment":
            return {
                ball : state.ball+1
            };
        case "decrement":
             return {
                ball : state.ball-1
            };
        default:
            return state;
    }
}
export default ballReducer;
