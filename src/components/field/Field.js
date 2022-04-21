import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { IconEyeClose, IconEyeOpen } from "components/icon";
import styled from "styled-components";
const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Field = ({ children }) => {
  return (
    <>
      <FieldStyles>{children}</FieldStyles>
    </>
  );
};

export default Field;
