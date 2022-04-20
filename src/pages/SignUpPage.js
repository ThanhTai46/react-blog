import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
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
  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .label {
    cursor: pointer;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    font-size: 16px;
  }
  .input {
    width: 100%;

    border-radius: 8px;

    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    font-size: 14px;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: #fff;
    border: 1px solid ${(props) => props.theme.blue};
  }
  .input::-webkit-input-placeholder {
    color: #84878b;
  }
  .input::-moz-input-placeholder {
    color: #84878b;
  }
  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;
const SignUpPage = () => {
  return (
    <SignUpPageStyles className="bg-slate-100">
      <div className="container ">
        <img
          srcSet="images/monkey-logo.png"
          alt="monkey-blogging"
          className="logo"
        />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form">
          <div className="field">
            <label htmlFor="fullName" className="label">
              Fullname
            </label>
            <input
              type="text"
              className="input"
              name="fullName"
              id="fullName"
              placeholder="Please Enter your fullname"
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
