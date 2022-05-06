import React from "react";
import styled from "styled-components";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostItemStyles = styled.div`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 24px;
      display: block;
      width: 100%;
      border-radius: 15px;
    }
    &-category {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-image {
        aspect-ratio: 16/9;
        height: auto;
      }
    }
  }
`;
const PostItem = () => {
  return (
    <PostItemStyles>
      <PostImage
        to="/detailItem"
        alt=""
        url="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
      ></PostImage>

      <PostCategory className="post-category" type="primary">
        Kiến thức
      </PostCategory>
      <PostTitle>
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostMeta type="primary"></PostMeta>
    </PostItemStyles>
  );
};

export default PostItem;
