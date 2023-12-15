import React, { useState } from "react";
import DarkModeButton from "./ThemeSwitchButton";

// import ios-moon from '.../assets/ios-moon.svg';

const DarkModeWrapper = (props: { children: any }) => {
  const { children } = props;
  // Checks if the client has a preferred colour scheme of dark
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  // Set theme based on preference
  const [theme, setTheme] = useState(preferredTheme);

  // TODO: Check value of current local storage and doesn't match or if there is no local storage set and the window match media is set and doesn't match then we set it. if local storage not set, we check the Window. localstorage.getItem || window.matchmedia != theme, then set theme localstorage query to be independent of component hierarchy

  // if the value saved in storage doesn't match the current theme
  const switchTheme = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // console.log('switch theme', theme);
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  // console.log(theme);
  return (
    <div className={theme}>
      {/* <DarkModeButton
                className="mobile-dark-mode"
                onClick={switchTheme}
                theme={theme}
            /> */}
      {/* <SideNavBar onClick={switchTheme} />
            <BottomNavBar />  */}
      {/* {console.log('darkmodewrapper', theme)} */}
      {children}
    </div>
  );
};

export default DarkModeWrapper;
