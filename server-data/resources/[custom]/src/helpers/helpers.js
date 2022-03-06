"use strict";
exports.__esModule = true;
exports.Delay = void 0;
var Delay = function (ms) { return new Promise(function (res) { return setTimeout(res, ms); }); };
exports.Delay = Delay;
