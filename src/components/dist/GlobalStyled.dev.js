"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyled = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n*{\n  margin:0;\n  padding:0;\n  box-sizing:border-box;\n}\nbody{\n  background-color: darkcyan;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyled = (0, _styledComponents.createGlobalStyle)(_templateObject());
exports.GlobalStyled = GlobalStyled;