import React from "react";
import "./index.scss";
import styled from "styled-components";
import { Button } from "components/button";
import { Link } from "react-router-dom";
const HomeBannerStyles = styled.div`
  border-radius: 6px;
  min-height: 520px;
  padding: 36px;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .banner-content {
    max-width: 500px;
    color: white;
    .banner-heading {
      font-family: Montserrat;
      font-weight: 700;
      font-size: 48px;
      margin-bottom: 28px;
    }
    .banner-desc {
      font-family: Montserrat;
      font-weight: 400;
      font-size: 14px;
      margin-bottom: 48px;
    }
    .wrap_banner-btn {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .banner-btn {
        min-width: 180px;
        font-size: 16px;
        font-weight: 500;
        color: #23bb86;
      }
    }
  }
`;
const HomeBanner = () => {
  return (
    <div className="container">
      <HomeBannerStyles>
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
              dignissimos nisi hic atque neque minima qui reprehenderit aut
              itaque vitae, exercitationem a beatae eius quam facilis voluptas
              placeat odit dolores.
            </p>
            <Link to="/sign-in">
              <div className="wrap_banner-btn">
                <Button className="banner-btn" type="button">
                  Get Started
                </Button>
              </div>
            </Link>
          </div>
          <div className="banner-image">
            <img src="/images/banner-img.png" alt="banner" />
          </div>
        </div>
      </HomeBannerStyles>
    </div>
  );
};

export default HomeBanner;
