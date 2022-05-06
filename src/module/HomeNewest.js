import Heading from "components/layout/Heading";
import React from "react";
import styled from "styled-components";
import PostItem from "./post/PostItem";
import PostNewestItem from "./post/PostNewestItem";
import PostNewestLarge from "./post/PostNewestLarge";
const HomeNewestStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    align-items: start;
  }
  .sidebar {
    background-color: #f3edff;
    border-radius: 16px;
    padding: 28px 20px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;
const HomeNewest = () => {
  return (
    <HomeNewestStyles className="home-block">
      <div className="container">
        <Heading>Bài viết mới nhất</Heading>
        <div className="layout">
          <PostNewestLarge></PostNewestLarge>
          <div className="sidebar">
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
            <PostNewestItem></PostNewestItem>
          </div>
        </div>
        <div className="grid-layout grid-layout--primary">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
