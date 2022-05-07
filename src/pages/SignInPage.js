import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import { auth, fbProvider, GoogleProvider } from "firebase-app/firebase-config";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import AuthenticationPage from "./AuthenticationPage";
const schema = yup.object({
  email: yup.string().email().required("Please enter your email. 😢😢"),
  password: yup
    .string()
    .required("Please enter your password. 😢😢")
    .min(8, "Your password must be least 8 characters or greaters. 😢😢")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters. 😢😢"),
});
const SignInPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const auth = getAuth();
  auth.languageCode = "it";
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, reset },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  // sign in GG
  const SignInWithGoogle = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, GoogleProvider);
    navigate("/");
  };
  // Sign in with FB
  const SignInWithFacebook = async (e) => {
    e.preventDefault();
    await signInWithPopup(auth, fbProvider);
    navigate("/");
  };
  return (
    <div>
      <AuthenticationPage className="bg-slate-100">
        <form
          className="form"
          onSubmit={handleSubmit(handleSignIn)}
          autoComplete="off"
        >
          {/* ----- Email Field ----*/}
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
          {/* ----End Email Field---- */}
          {/* Password Field */}
          <Field>
            <Label htmlFor="password" className="label">
              Password
            </Label>
            <InputPasswordToggle control={control}></InputPasswordToggle>
          </Field>
          {/* End Password Field */}
          <div className="have-account">--- Or Login with --- </div>
          {/* Login FB */}
          <div className="max-w-[300px] mx-auto my-5 p-4 bg-blue-600 rounded-full text-white flex justify-center items-center cursor-pointer text-base gap-3">
            <FaFacebookF className="w-5 h-5 object-cover" />
            <button onClick={(e) => SignInWithFacebook(e)}>
              <span className="">
                Sign in with <span className="font-semibold">Facebook</span>
              </span>
            </button>
          </div>
          {/* Login Google */}
          <div className="max-w-[300px] mx-auto my-5 p-4 bg-red-500 rounded-full text-white flex justify-center items-center cursor-pointer text-base gap-3">
            <BsGoogle className="w-5 h-5 object-cover" />
            <button onClick={(e) => SignInWithGoogle(e)}>
              <span className="">
                Sign in with <span className="font-semibold">Google</span>
              </span>
            </button>
          </div>

          <div className="have-account">
            Don't have an account?{" "}
            <Link to="/sign-up">Register an account</Link>
          </div>
          <Button
            kind="primary"
            type="submit"
            className="flex items-center justify-center"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Login
          </Button>
        </form>
      </AuthenticationPage>
    </div>
  );
};

export default SignInPage;
