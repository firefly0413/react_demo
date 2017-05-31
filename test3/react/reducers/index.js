import {combineReducers} from "redux"
import memberlist from "./reducer"
import roomlist from "./reducer2"

const rootReducer = combineReducers({
	memberlist,
	roomlist
})

export default rootReducer;