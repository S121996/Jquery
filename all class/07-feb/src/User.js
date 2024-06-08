import Guest from "./Guest"

function User(props){
    return(
        <>
        <h2>User component</h2>
        <p>{props.udata}</p>
        <hr/>
        <Guest gdata={props.udata}/>
        </>
    )
}
export default User