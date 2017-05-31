"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

webpackJsonp([0], {

	/***/0:
	/***/function _(module, exports, __webpack_require__) {

		/* REACT HOT LOADER */if (false) {
			(function () {
				var ReactHotAPI = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-api\\modules\\index.js"),
				    RootInstanceProvider = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\RootInstanceProvider.js"),
				    ReactMount = require("react/lib/ReactMount"),
				    React = require("react");module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {
					return RootInstanceProvider.getRootInstances(ReactMount);
				}, React);
			})();
		}try {
			(function () {

				"use strict";

				var _reactDom = __webpack_require__(1);

				var _reactDom2 = _interopRequireDefault(_reactDom);

				var _app = __webpack_require__(168);

				var _app2 = _interopRequireDefault(_app);

				var _reactRedux = __webpack_require__(177);

				var _index = __webpack_require__(202);

				var _index2 = _interopRequireDefault(_index);

				var _redux = __webpack_require__(184);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				var store = (0, _redux.createStore)(_index2.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__);

				_reactDom2.default.render(React.createElement(_reactRedux.Provider, { store: store }, React.createElement(_app2.default, null)), document.createElement("div"));

				/* REACT HOT LOADER */
			}).call(this);
		} finally {
			if (false) {
				(function () {
					var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {
						var makeExportsHot = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\makeExportsHot.js");if (makeExportsHot(module, require("react"))) {
							foundReactClasses = true;
						}var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {
							module.hot.accept(function (err) {
								if (err) {
									console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message);
								}
							});
						}
					}module.hot.dispose(function (data) {
						data.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;
					});
				})();
			}
		}

		/***/
	},

	/***/168:
	/***/function _(module, exports, __webpack_require__) {

		/* REACT HOT LOADER */if (false) {
			(function () {
				var ReactHotAPI = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-api\\modules\\index.js"),
				    RootInstanceProvider = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\RootInstanceProvider.js"),
				    ReactMount = require("react/lib/ReactMount"),
				    React = require("react");module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {
					return RootInstanceProvider.getRootInstances(ReactMount);
				}, React);
			})();
		}try {
			(function () {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _newAction = __webpack_require__(169);

				var action = _interopRequireWildcard(_newAction);

				var _react = __webpack_require__(170);

				var _reactRedux = __webpack_require__(177);

				function _interopRequireWildcard(obj) {
					if (obj && obj.__esModule) {
						return obj;
					} else {
						var newObj = {};if (obj != null) {
							for (var key in obj) {
								if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
							}
						}newObj.default = obj;return newObj;
					}
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var App = function (_Component) {
					_inherits(App, _Component);

					function App(props) {
						_classCallCheck(this, App);

						var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

						console.log(action);

						//console.log(store);
						return _this;
					}

					_createClass(App, [{
						key: "render",
						value: function render() {}
					}]);

					return App;
				}(_react.Component);

				exports.default = (0, _reactRedux.connect)(function (state) {
					return state;
				})(App);

				/* REACT HOT LOADER */
			}).call(this);
		} finally {
			if (false) {
				(function () {
					var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {
						var makeExportsHot = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\makeExportsHot.js");if (makeExportsHot(module, require("react"))) {
							foundReactClasses = true;
						}var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {
							module.hot.accept(function (err) {
								if (err) {
									console.error("Cannot not apply hot update to " + "app.js" + ": " + err.message);
								}
							});
						}
					}module.hot.dispose(function (data) {
						data.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;
					});
				})();
			}
		}

		/***/
	},

	/***/169:
	/***/function _(module, exports, __webpack_require__) {

		/* REACT HOT LOADER */if (false) {
			(function () {
				var ReactHotAPI = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-api\\modules\\index.js"),
				    RootInstanceProvider = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\RootInstanceProvider.js"),
				    ReactMount = require("react/lib/ReactMount"),
				    React = require("react");module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {
					return RootInstanceProvider.getRootInstances(ReactMount);
				}, React);
			})();
		}try {
			(function () {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				function addList(text) {
					return {
						type: "ADD_LIST",
						text: text
					};
				}

				function removeList(index) {
					return {
						type: "REMOVE_LIST",
						index: index
					};
				}

				exports.addList = addList;
				exports.removeList = removeList;

				/* REACT HOT LOADER */
			}).call(this);
		} finally {
			if (false) {
				(function () {
					var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {
						var makeExportsHot = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\makeExportsHot.js");if (makeExportsHot(module, require("react"))) {
							foundReactClasses = true;
						}var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {
							module.hot.accept(function (err) {
								if (err) {
									console.error("Cannot not apply hot update to " + "newAction.js" + ": " + err.message);
								}
							});
						}
					}module.hot.dispose(function (data) {
						data.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;
					});
				})();
			}
		}

		/***/
	},

	/***/202:
	/***/function _(module, exports, __webpack_require__) {

		/* REACT HOT LOADER */if (false) {
			(function () {
				var ReactHotAPI = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-api\\modules\\index.js"),
				    RootInstanceProvider = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\RootInstanceProvider.js"),
				    ReactMount = require("react/lib/ReactMount"),
				    React = require("react");module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () {
					return RootInstanceProvider.getRootInstances(ReactMount);
				}, React);
			})();
		}try {
			(function () {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var initialState = [{ index: 1, text: "i need learn react" }, { index: 2, text: "i need learn es6" }, { index: 3, text: "buy a new car!" }];

				function cloneState(state) {
					return JSON.parse(JSON.stringify(state));
				}

				function todoList() {
					var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
					var action = arguments[1];

					state = cloneState(state);
					switch (action.type) {
						case "ADD_LIST":
							state.push({ index: state.length + 1, text: action.text });
							return state;
						case "REMOVE_LIST":
							state.splice(action.index, 1);
							return state;
						default:
							return state;
					}
				}

				exports.default = todoList;

				/* REACT HOT LOADER */
			}).call(this);
		} finally {
			if (false) {
				(function () {
					var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false;if (module.exports && module.makeHot) {
						var makeExportsHot = require("C:\\Users\\user\\Documents\\redux_demo\\test3\\node_modules\\react-hot-loader\\makeExportsHot.js");if (makeExportsHot(module, require("react"))) {
							foundReactClasses = true;
						}var shouldAcceptModule = true && foundReactClasses;if (shouldAcceptModule) {
							module.hot.accept(function (err) {
								if (err) {
									console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message);
								}
							});
						}
					}module.hot.dispose(function (data) {
						data.makeHot = module.makeHot;data.foundReactClasses = foundReactClasses;
					});
				})();
			}
		}

		/***/
	}

});
//# sourceMappingURL=index.js.map