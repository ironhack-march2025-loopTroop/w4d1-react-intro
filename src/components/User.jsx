

function User(props){
    return(
        <section>
            <h3>Hello {props.userName}</h3>
            <p>Age: {props.age}</p>
        </section>
    )
}

export default User;