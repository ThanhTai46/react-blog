import { Loading } from "components/loading";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
const ButtonStyles = styled.button`
  padding: 16px;
  max-width: 350px;
  width: 100%;
  border-radius: 8px;
  background-color: white;
  ${(props) =>
    props.kind === "secondary" &&
    css`
      color: ${(props) => props.theme.primary};
      background-color: white;
    `};

  ${(props) =>
    props.kind === "primary" &&
    css`
      color: white;
      background-image: linear-gradient(to right bottom, #00a7b4, #a4d96c);
    `};
  ${(props) =>
    props.kind === "info" &&
    css`
      color: white;
      max-width: 200px;
      font-size: 16px;
      font-weight: 300;
      background-color: ${(props) => props.theme.blue};
    `};

  font-weight: 600;
  font-size: 18px;
  color: #fff;
  text-align: center;
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`;
/**
 *
 * @requires
 * @param {string} type of Button 'button' | 'submit'
 * @returns
 */
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

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]).isRequired,
  onClick: PropTypes.func,
};
export default Button;
