import React, {useRef} from "react";


const RefComponent = () => {
    const inputRef = useRef()

    const checkRef = () => {
        alert(`your input has the string: ${inputRef.current.value}`)
        inputRef.current.value = ''
        inputRef.current.focus()
    }

    return (
        <div className="card" >
            <h2>UseRef</h2>
            <input type='text' ref={inputRef} />
            <button onClick={checkRef} >What's my ref?</button>
        </div>
    )
}


export default RefComponent