import React from "react";
import styled from "styled-components";
const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    width: 121px;
    height: 156px;
    margin: 0 auto 27px;
  }
  .heading {
    font-size: 40px;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    text-align: center;
    margin-bottom: 100px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
  .have-account {
    text-align: center;
    margin-bottom: 20px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;
const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container ">
        <img
          srcSet="images/monkey-logo.png"
          alt="monkey-blogging"
          className="logo"
        />
        <h1 className="heading">Monkey Blogging</h1>
        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
