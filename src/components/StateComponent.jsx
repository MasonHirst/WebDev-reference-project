import React, {useState} from "react";


const StateComponent = (props) => {
    const [userInput, setUserInput] = useState('')
    // each instance of useState() always has two variables. The first (userInput) is the current state, or value. Its starting value is determined by what you put in the initial parenthesis of the userstate(). The 2nd

    const handleUpdateState = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <div className="card">
            <h2>userState</h2>
            <h3>State: {userInput}</h3>
            <input type="text" onChange={handleUpdateState} />
        </div>
    )
}


export default StateComponent