"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removeList = exports.addList = undefined;

var _actionType = require("./actionType");

var types = _interopRequireWildcard(_actionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addList(text) {
	return {
		type: types.ADD_LIST,
		text: text
	};
}

function removeList(index) {
	return {
		type: types.REMOVE_LIST,
		index: index
	};
}

exports.addList = addList;
exports.removeList = removeList;
//# sourceMappingURL=newAction.js.map