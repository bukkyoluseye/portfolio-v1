import React from "react";
import DesktopNavBar from "./DesktopNavBar";

const Layout = (props: { children: any }) => {
  const { children } = props;
  return (
    <>
      <DesktopNavBar />
      {children}
    </>
  );
};

export default Layout;
