import { use } from "react";


function MyFirstComponent() {

    const title = "JSX intro";

    const user = {
        firstName: "alice",
        surname: "smith"
    }

    const getMessage = () => {
        return <h3>The quick brown fox</h3>
    }

    const divStyle = {
        color: "#fff",
        border: "1px solid #fff",
        borderRadius: "10px"
    }

    return (
        <>
            <h2>{title}</h2>

            <div style={divStyle}>
                <p>Total: {2 + 2}</p>
                <p>Welcome, {user.firstName} {user.surname.toUpperCase()}</p>
            </div>

            {/* Here we're invoking a function that returns JSX */}
            {getMessage()}
        </>
    )
}

export default MyFirstComponent;