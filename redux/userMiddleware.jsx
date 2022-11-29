export default async function userFetchMiddleWare(dispatch){
    let resp =  await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await resp.json();
    dispatch({
        type: "success_users",
        payload: user
    })
}