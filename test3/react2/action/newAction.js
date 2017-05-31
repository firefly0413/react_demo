import * as types from "./actionType"


function addList(text){
	return {
		type:types.ADD_LIST,
		text
	}
}

function removeList(index){
	return {
		type:types.REMOVE_LIST,
		index
	}
}



export {addList,removeList};