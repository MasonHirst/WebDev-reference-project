import {createStore} from 'redux'

let initialState = {
   name: 'mason',
   count: 0,
   mood: 'grumbly'
}

const reducer = (state = initialState, action) => {
   switch(action.type) {
      default:
         return state
   }
}

const store = createStore(reducer)

export default store