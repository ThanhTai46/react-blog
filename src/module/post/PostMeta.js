import React from "react";
import styled, { css } from "styled-components";
const PostMetaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  margin-left: auto;
  ${(props) =>
    props.type === "primary" &&
    css`
      color: #6b6b6b;
    `};
  ${(props) =>
    props.type === "secondary" &&
    css`
      color: white;
    `};
  .post-dot {
    display: inline-block;
    width: 4px;
    height: 4px;
    background-color: currentColor;
    border-radius: 100%;
  }
`;
const PostMeta = ({
  date = "Mar 23",
  author = "Andiez Le",
  type = "primary",
}) => {
  return (
    <PostMetaStyles type={type}>
      <span className="post-time">{date}</span>
      <span className="post-dot"></span>
      <span className="post-author">{author}</span>
    </PostMetaStyles>
  );
};

export default PostMeta;
