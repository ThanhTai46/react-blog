import { IconEyeClose, IconEyeOpen } from "components/icon";
import React, { useState } from "react";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const [showPassword, setShowPassword] = useState(false);
  if (!control) return;
  return (
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
  );
};

export default InputPasswordToggle;
