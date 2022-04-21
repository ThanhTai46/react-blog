import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Field } from "components/field";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Button } from "components/button";

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

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    watch,
    formState: { isSubmitting, isValid, errors },
    handleSubmit,
  } = useForm();
  const handleSignout = (value) => {
    if (!isValid) return;
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve();
        console.log(value);
      }, 3000)
    );
  };
  return (
    <SignUpPageStyles className="bg-slate-100">
      <div className="container ">
        <img
          srcSet="images/monkey-logo.png"
          alt="monkey-blogging"
          className="logo"
        />
        <h1 className="heading">Monkey Blogging</h1>
        <form
          className="form"
          onSubmit={handleSubmit(handleSignout)}
          autoComplete="off"
        >
          <Field>
            <Label htmlFor="fullName" className="label">
              Fullname
            </Label>
            <Input
              type="text"
              name="fullName"
              placeholder="Please Enter your fullname"
              control={control}
            />
          </Field>
          {/* Email Field */}
          <Field>
            <Label htmlFor="email" className="label">
              Email address
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Please Enter your email address"
              control={control}
            />
          </Field>
          {/* End Email Field */}
          {/* Password Field */}
          <Field>
            <Label htmlFor="password" className="label">
              Password
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Please Enter your password"
              control={control}
            >
              {showPassword ? (
                <IconEyeOpen
                  className="input-icon"
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                ></IconEyeOpen>
              ) : (
                <IconEyeClose
                  className="input-icon"
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                ></IconEyeClose>
              )}
            </Input>
          </Field>
          <Button
            type="submit"
            className="flex items-center justify-center"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Sign up
          </Button>
          {/* End Password Field */}
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
