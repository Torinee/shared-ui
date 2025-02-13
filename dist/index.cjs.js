'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');

const Button = props => {
  const {
    children
  } = props;
  return jsxRuntime.jsxs("div", {
    children: [jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("button", {
      children: children
    }), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {}), jsxRuntime.jsx("br", {})]
  });
};

const Input = () => {
  return jsxRuntime.jsx("div", {
    children: "Input"
  });
};

const Container = styled.div``;
const TextArea = () => {
  return jsxRuntime.jsx(Container, {
    children: "TextArea"
  });
};

exports.Button = Button;
exports.Input = Input;
exports.TextArea = TextArea;
//# sourceMappingURL=index.cjs.js.map
