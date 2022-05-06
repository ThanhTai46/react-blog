import React from "react";
import styled, { css } from "styled-components";
const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.color6B};
  font-size: 14px;
  font-weight: 500;
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${(props) => props.theme.colorF3}; ;
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: white;
    `};
`;
const PostCategory = ({ children, type = "primary", className = "" }) => {
  return (
    <PostCategoryStyles type={type} className={className}>
      {children}
    </PostCategoryStyles>
  );
};

export default PostCategory;
