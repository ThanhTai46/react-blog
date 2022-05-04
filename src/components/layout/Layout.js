import HomePage from "pages/HomePage";
import React from "react";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <HomePage />
      {children}
    </Fragment>
  );
};

export default Layout;
