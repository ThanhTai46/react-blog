import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const PostTitleStyles = styled.h3`
  font-weight: 600;
  line-height: 1.5;
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.size === "normarl" &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.size === "big" &&
    css`
      font-size: 22px;
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
