import { Button } from "components/button";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
const menuLinks = [
  {
    url: "/home",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
const HeaderStyles = styled.header`
  font-family: "Poppins", sans-serif;
  padding: 20px 0;
  .header-main {
    display: flex;
    align-items: center;

    img {
      display: block;
      max-width: 50px;
    }
    .menu {
      display: flex;
      align-items: center;
      margin-left: 40px;
      gap: 20px;
      font-weight: 500;
    }
    .search {
      margin-left: auto;
      padding: 15px 25px;
      max-width: 320px;
      width: 100%;
      border-radius: 8px;
      display: flex;
      align-items: center;
      border: 1px solid #cfcfcf;
      position: relative;
      margin-right: 20px;
    }
    .search-input {
      flex: 1;
      padding-right: 45px;
      ::placeholder {
        font-weight: 400;
        font-size: 16px;
        color: #999999;
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 15px;
    }
    .header-button {
      max-width: 200px;
      width: 200px;
      margin-left: 20px;
      height: 56px;
      font-size: 18px;
      font-weight: 500;
    }
    @media screen and (max-width: 1023.98px) {
      .logo {
        max-width: 30px;
      }
      .menu,
      .search,
      .header-button,
      .header-auth {
        display: none;
      }
    }
  }
`;
function getLastName(name) {
  if (!name) {
    return;
  }
  const length = name.split(" ").length;
  return name.split(" ")[length - 1];
}
const Header = () => {
  const { userInfo } = useAuth();

  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-main">
          <Link to="/">
            <img srcSet="/images/monkey-logo.png" alt="logo" />
          </Link>
          <ul className="menu">
            {menuLinks.map((item) => (
              <li className="menu-item" key={item.title}>
                <NavLink className="menu-link" to={item.url}>
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search posts..."
            />
            <span className="search-icon">
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="7.66669"
                  cy="7.05161"
                  rx="6.66669"
                  ry="6.05161"
                  stroke="#999999"
                  strokeWidth="1.5"
                />
                <path
                  d="M17.0001 15.5237L15.2223 13.9099L14.3334 13.103L12.5557 11.4893"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M11.6665 12.2964C12.9671 12.1544 13.3706 11.8067 13.4443 10.6826"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          {!userInfo ? (
            <Link to="/sign-up">
              <Button type="button" className="header-button">
                Sign Up
              </Button>
            </Link>
          ) : (
            <div className="header-auth">
              <span>Welcome back, </span>
              <strong className="text-primary">
                {getLastName(userInfo?.displayName)}
              </strong>
            </div>
          )}
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
