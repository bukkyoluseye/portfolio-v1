import React from "react";
import "./Button.css";
import Loader from "../Loader/Loader";

/* PROPS

variant: primary (default) \ secondary \ tertiary \ destructive \ disabled

hasIcon: left \ right \ icon-only \ null (default)

onClick: reference any function here without calling the function (i.e. don't use the brackets after the name of the function)

label: string

loading? (default is not loading)

*/

const Button = (props) => {
  const { label, variant, hasIcon, onClick, loading, icon, children } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${variant && variant} ${hasIcon && hasIcon} ${
        props.className && props.className
      }`}
    >
      {loading && variant === ("primary" || "destructive" || "disabled") ? (
        <Loader variant={variant} size="xs" />
      ) : loading && variant === ("secondary" || "tertiary") ? (
        <Loader variant="secondary" size="xs" />
      ) : hasIcon === ("left" || "icon-only") ? (
        icon
      ) : null}
      {hasIcon === "icon-only"
        ? null
        : loading
        ? "Loading..."
        : label
        ? label
        : null}
      {loading ? null : hasIcon === "right" ? icon : null}
      {children}
    </button>
  );
};

export default Button;
