import { useState } from "react";


const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="User-card">
            <h1>Count: {count}</h1>
            <h1>Count: {count2}</h1>
            <h2>Name: {name} </h2>
            <h2>Location: Siwan , Bihar</h2>
            <h2>contact Us : ankitkumarsingh@gmail.com</h2>


        </div>
    )
}
export default User;