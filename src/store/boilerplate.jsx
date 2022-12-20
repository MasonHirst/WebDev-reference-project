import { createContext, useReducer } from "react";


const initialState = {

}


const BoilerPlateContext = createContext()

const BoilerPlateContextProvider = (props) => {
    const reducer = (state, action) => {
        switch(action.type) {
            default: 
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <BoilerPlateContext.Provider value={{state, dispatch}} >
            {props.children}
        </BoilerPlateContext.Provider>
    )
}


// export default BoilerPlateContext
// export {BoilerPlateContextProvider}