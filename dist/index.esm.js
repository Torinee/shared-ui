import { jsxs, jsx } from 'react/jsx-runtime';
import styled from 'styled-components';

const Button = props => {
  const {
    children
  } = props;
  return jsxs("div", {
    children: [jsx("br", {}), jsx("br", {}), jsx("br", {}), jsx("br", {}), jsx("button", {
      children: children
    }), jsx("br", {}), jsx("br", {}), jsx("br", {}), jsx("br", {})]
  });
};

const Input = () => {
  return jsx("div", {
    children: "Input"
  });
};

const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const TextArea = () => {
  return jsx(Container, {
    children: "TextArea"
  });
};

export { Button, Input, TextArea };
//# sourceMappingURL=index.esm.js.map
