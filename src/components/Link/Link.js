import React from "react";
import "./Link.css";

/* PROPS

variant: primary (default) \ secondary \ tertiary \ destructive \ disabled

hasIcon: left \ right \ icon-only \ null (default)

onClick: reference any function here without calling the function (i.e. don't use the brackets after the name of the function)

label: string

loading? (default is not loading)

*/

const Link = (props) => {
  const { children, href, rel, target } = props;
  return (
    <a href={href} rel={rel} target={target} className={props.className}>
      {children}
    </a>
  );
};

export default Link;
