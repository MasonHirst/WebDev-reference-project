import React, {useRef} from "react";
import { useNavigate } from "react-router-dom";


const HomeScreen = () => {
    const navigate = useNavigate()
    const userInputRef = useRef()

    const clickHandler = () => {
        let checkInput = +userInputRef.current.value
        console.log(Number.isFinite(checkInput))
        if (Number.isFinite(checkInput)) {
            console.log("number")
            navigate(`/details/${checkInput}`)
        } else {
            console.log('not a number')
        }
    }

    return (
        <div className="col-container">
            <h1>Home</h1>
            <input type="text" ref={userInputRef} />
            <button onClick={clickHandler}>Leave</button>
        </div>
    )
}

export default HomeScreen