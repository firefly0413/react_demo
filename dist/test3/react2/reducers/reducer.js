"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = memberlist;

var _actionType = require("../action/actionType");

var types = _interopRequireWildcard(_actionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var initialState = {
	results: [{ serialNum: 1, name: "张三", age: 22, sex: "男", height: 180, weight: 80, enable: true }, { serialNum: 2, name: "李四", age: 22, sex: "男", height: 175, weight: 85, enable: true }, { serialNum: 3, name: "王五", age: 22, sex: "女", height: 168, weight: 60, enable: true }, { serialNum: 4, name: "赵六", age: 22, sex: "女", height: 156, weight: 70, enable: true }, { serialNum: 5, name: "田七", age: 22, sex: "男", height: 174, weight: 72, enable: true }, { serialNum: 6, name: "小明", age: 22, sex: "男", height: 175, weight: 68, enable: true }, { serialNum: 7, name: "陈二狗", age: 22, sex: "男", height: 183, weight: 74, enable: true }]
};
function cloneState(state) {
	return JSON.parse(JSON.stringify(state));
}

function memberlist() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	var action = arguments[1];

	state = cloneState(state);
	switch (action.type) {
		case types.ADD_LIST:
			state.results.push(action.param);
			return state;
		case types.REMOVE_LIST:
			state.results.splice([action.index], 1);
			return state;
		default:
			return state;
	}
}
//# sourceMappingURL=reducer.js.map