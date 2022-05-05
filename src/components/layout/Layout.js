import HomePage from "pages/HomePage";
import React from "react";
import { Fragment } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};

export default Layout;
