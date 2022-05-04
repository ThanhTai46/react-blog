import React from "react";
import styled from "styled-components";

import { useController } from "react-hook-form";
const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    border-radius: 8px;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px" : "20px")};
    background-color: ${(props) => props.theme.grayLight};
    font-size: 14px;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .input:focus {
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.blue};
  }
  .input::-webkit-input-placeholder {
    color: #84878b;
  }
  .input::-moz-input-placeholder {
    color: #84878b;
  }
`;
const Input = ({ type = "", name, children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <InputStyles hasIcon={children ? true : false}>
      <input id={name} type={type} {...field} {...props} className="input" />
      {children}
    </InputStyles>
  );
};

export default Input;
