import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const PostTitleStyles = styled.h3`
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.25px;
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  &:hover {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 100ms;
    color: ${(props) => props.theme.textTitle};
  }
  ${(props) =>
    props.size === "normal" &&
    css`
      font-size: 18px;
      @media screen and (max-width: 1023.98px) {
        font-size: 14px;
      }
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
      @media screen and (max-width: 1023.98px) {
        font-size: 16px;
      }
    `};
  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 16px;
    `};
`;
const PostTitle = ({ children, className = "", size = "normal" }) => {
  return (
    <Link to="/detail">
      <PostTitleStyles size={size} className={className}>
        {children}
      </PostTitleStyles>
    </Link>
  );
};

export default PostTitle;
