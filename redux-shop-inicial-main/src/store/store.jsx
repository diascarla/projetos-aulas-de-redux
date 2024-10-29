import { createStore } from 'redux'
import cartReducer from './reducers/cart'

const rootReducer = combineRedacers({
    cartProducts: cartReducer
})

const store = createStore()

export default store