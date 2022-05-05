import { yupResolver } from "@hookform/resolvers/yup";
import { Field } from "components/field";
import { Label } from "components/label";
import { Button } from "components/button";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Input } from "components/input";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import AuthenticationPage from "./AuthenticationPage";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import { useAuth } from "contexts/auth-context";

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
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const [showPassword, setShowPassword] = useState(false);
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
          {/* End Password Field */}
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
