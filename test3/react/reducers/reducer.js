import * as types from '../actionCreator/actionType';

const initialState = {
	results:[
		{serialNum:1,name:"张三",age:22,sex:"男",height:180,weight:80,enable:true},
		{serialNum:2,name:"李四",age:22,sex:"男",height:175,weight:85,enable:true},
		{serialNum:3,name:"王五",age:22,sex:"女",height:168,weight:60,enable:true},
		{serialNum:4,name:"赵六",age:22,sex:"女",height:156,weight:70,enable:true},
		{serialNum:5,name:"田七",age:22,sex:"男",height:174,weight:72,enable:true},
		{serialNum:6,name:"小明",age:22,sex:"男",height:175,weight:68,enable:true},
		{serialNum:7,name:"陈二狗",age:22,sex:"男",height:183,weight:74,enable:true}
	]
}
function cloneState(state) {
  return JSON.parse(JSON.stringify(state));
}

export default function memberlist(state=initialState,action){
	state = cloneState(state);
	switch(action.type){
		case types.ADD_ITEM:
			state.results.push(action.param);
			return state;
		case types.EDIT_ITEM:
			state.results.splice(action.index,1,action.param);
			return state;
		case types.DELETE_ITEM:
			state.results.splice([action.index],1);
			return state;
		default:
			return state;
	}
}

