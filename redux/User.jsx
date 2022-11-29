import { useEffect } from "react";
import { connect } from "react-redux";
import userFetchMiddleWare from "./userMiddleware";

function User(props){
    console.log(props)
    useEffect(function fn(){
        props.fetchUser();
    }, []);
    return (
        <>
            <h1>User</h1>
            {
                props.loading === true ? <div>Loading</div>:<h2>{props.user.name} </h2>
            }
        </>
    )
}
function mapStateToProps(store){
    return store.User;
}
function mapDispatchToProps(dispatch){
    return {
        fetchUser : () => {
            return dispatch(userFetchMiddleWare);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(User);