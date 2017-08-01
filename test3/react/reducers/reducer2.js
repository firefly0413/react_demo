import * as types from '../action/actionType';
const initialState = {
			result:[
				{roomNum:101,name:"海景房",price:380,enable:true},
				{roomNum:305,name:"山景房",price:350,enable:true},
				{roomNum:8203,name:"阳光房",price:260,enable:true},
				{roomNum:603,name:"主题房",price:280,enable:true}
			]
	}

function cloneState(state) {
  return JSON.parse(JSON.stringify(state));
}

export default function roomList(state=initialState,action){
	state = cloneState(state);
	switch(action.type){
		case types.ADD_LIST:
			return state;
		default:
			return state;
	}
}