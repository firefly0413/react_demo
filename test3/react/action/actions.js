import * as types from './actionType';

export function deleteItem(index){
	return {
		type:types.DELETE_ITEM,
		index
	}
}

export function addItem(param){
	return {
		type:types.ADD_ITEM,
		param
	}
}

export function editItem(index,param){
	return {
		type:types.EDIT_ITEM,
		param,
		index
	}
}

export function addList(index,param){
	return {
		type:types.ADD_LIST,
		param,
	}
}

export default {deleteItem,addItem,editItem,addList};