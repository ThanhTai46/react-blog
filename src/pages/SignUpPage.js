import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import { Input } from "components/input";
import { Label } from "components/label";
import { auth, db } from "firebase-app/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import AuthenticationPage from "./AuthenticationPage";

const schema = yup.object({
  fullName: yup.string().required("Please enter your fullname.😢😢"),
  email: yup.string().email().required("Please enter your email. 😢😢"),
  password: yup
    .string()
    .required("Please enter your password. 😢😢")
    .min(8, "Your password must be least 8 characters or greaters. 😢😢")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters. 😢😢"),
});

const SignUpPage = () => {
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
  const navigate = useNavigate();
  const handleSignUp = async (value) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    await updateProfile(auth.currentUser, {
      displayName: value.fullName,
    });
    toast.success("Register successfully 😄😄️🎉️🎉");
    navigate("/");
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: value.fullName,
      email: value.email,
      password: value.password,
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = "Register Page";
  }, []);
  return (
    <AuthenticationPage className="bg-slate-100">
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
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
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              ></IconEyeOpen>
            ) : (
              <IconEyeClose
                className="input-icon"
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              ></IconEyeClose>
            )}
          </Input>
        </Field>
        <div className="have-account">
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </div>
        <Button
          kind="primary"
          type="submit"
          className="flex items-center justify-center"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign up
        </Button>
        {/* End Password Field */}
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
