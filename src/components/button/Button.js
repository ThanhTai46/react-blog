import { Loading } from "components/loading";
import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  padding: 16px;
  max-width: 350px;
  width: 100%;
  border-radius: 8px;
  background-image: linear-gradient(to right bottom, #00a7b4, #a4d96c);
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  text-align: center;
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;
const Button = ({
  type = "button",
  onClick = () => {},
  children,
  ...props
}) => {
  const { isLoading } = props;
  const child = !!isLoading ? (
    <Loading width="20px" height="20px"></Loading>
  ) : (
    children
  );
  return (
    <div className="flex justify-center">
      <ButtonStyles type={type} onClick={onClick} {...props}>
        {child}
      </ButtonStyles>
    </div>
  );
};

export default Button;
